import './news.css';
import { INews } from '../../types/index';
import HandleBookmarks from '../../controller/handleBookmarks';

class News {
    private static bookmarks = new HandleBookmarks();
    draw(data: INews[]) {
        const newsSelector = document.querySelector('.news');

        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLMetaElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsContent = (newsItemTemp?.content as unknown) as Element;
            const newsClone: HTMLElement = newsContent.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            (newsClone.querySelector('.news__item') as HTMLElement).dataset.id = idx.toString();

            (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLElement).textContent = item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLElement).setAttribute('href', item.url);

            const allSavedNews = News.bookmarks.news.articles;

            for (const saved of allSavedNews) {
                if (saved.url == item.url) {
                    ((newsClone.querySelector('.news__bookmark') as HTMLElement)
                        .childNodes[0] as HTMLElement).classList.remove('fa-regular');
                    ((newsClone.querySelector('.news__bookmark') as HTMLElement)
                        .childNodes[0] as HTMLElement).classList.add('fas');
                }
            }

            fragment.append(newsClone);
        });

        if (newsSelector != null) {
            newsSelector.innerHTML = '';
            newsSelector.appendChild(fragment);
        }
    }
}

export default News;

import { INews } from '../types';

class HandleBookmarks {
    private static STORAGE_KEY = 'NEWS_APP_BOOKMARKS';
    private static _savedNews: INews[] = [];
    private static newsContainer = document.querySelector('.news');
    private static news: INews[] = [];
    constructor() {
        HandleBookmarks._savedNews = this.load() ?? [];
    }

    private load(): INews[] | null {
        const bookamarksJSON = localStorage.getItem(HandleBookmarks.STORAGE_KEY);
        if (bookamarksJSON) {
            return JSON.parse(bookamarksJSON) as INews[];
        }
        return null;
    }

    event() {
        HandleBookmarks.newsContainer?.addEventListener('click', (event) => {
            if (HandleBookmarks._savedNews.length >= 10) {
                alert("You can't have more than 10 articles in your bookmarks!");
            }
            const target = event.target as HTMLElement;
            if (
                target.classList.contains('news__bookmark') ||
                (target.parentNode as HTMLElement).classList.contains('news__bookmark')
            ) {
                const id = (event.composedPath() as HTMLElement[]).find((ele) => ele.dataset.id)?.dataset.id;
                if (target.childNodes.length) {
                    if ((target.childNodes[0] as HTMLElement).classList.contains('fa-regular')) {
                        (target.childNodes[0] as HTMLElement).classList.toggle('fa-regular');
                        (target.childNodes[0] as HTMLElement).classList.toggle('fas');
                        this.add(id!);
                    } else {
                        (target.childNodes[0] as HTMLElement).classList.toggle('fa-regular');
                        (target.childNodes[0] as HTMLElement).classList.toggle('fas');
                        this.remove(id!, event);
                    }
                } else {
                    if (target.classList.contains('fa-regular')) {
                        target.classList.toggle('fa-regular');
                        target.classList.toggle('fas');
                        this.add(id!);
                    } else {
                        target.classList.toggle('fa-regular');
                        target.classList.toggle('fas');
                        this.remove(id!, event);
                    }
                }
            } else return;
        });
    }

    private add(id: string) {
        HandleBookmarks._savedNews.push(HandleBookmarks.news[parseInt(id)]);
        this.save();
    }

    private remove(id: string, event: Event) {
        HandleBookmarks._savedNews = HandleBookmarks._savedNews.filter((ele, ind) => ind != parseInt(id));
        this.save();
    }

    public setNews(news: INews[]) {
        HandleBookmarks.news = news;
    }

    save() {
        localStorage.setItem(HandleBookmarks.STORAGE_KEY, JSON.stringify(HandleBookmarks._savedNews));
    }

    get news() {
        return {
            articles: HandleBookmarks._savedNews,
        };
    }
}

export default HandleBookmarks;

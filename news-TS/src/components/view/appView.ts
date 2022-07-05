import News from './news/news';
import Sources from './sources/sources';
import { ISources, INews, ISourcesSource, INewsSource } from '../types/index';

interface IAppView {
    drawNews: (data: INewsSource) => void;
    drawSources: (data: ISourcesSource) => void;
}

export class AppView implements IAppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INewsSource) {
        const values: INews[] = data?.articles ? data.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISourcesSource) {
        const values: ISources[] = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ISourcesSource, INewsSource } from '../types/index';
import HandleBookmarks from '../controller/handleBookmarks';

interface IApp {
    start(): void;
}

class App implements IApp {
    private bookmarks = new HandleBookmarks();
    private controller = new AppController();
    private view = new AppView();

    start() {
        this.bookmarks.event();
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: INewsSource) => this.view.drawNews(data))
            );
        document.querySelector('.bookmarks')?.addEventListener('click', () => {
            this.view.drawNews(this.bookmarks.news);
        });
        this.controller.getSources((data: ISourcesSource) => this.view.drawSources(data));
    }
}

export default App;

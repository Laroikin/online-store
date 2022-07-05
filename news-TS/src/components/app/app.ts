import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ISourcesSource, INewsSource } from '../types/index';

interface IApp {
    controller: AppController;
    view: AppView;
    start(): void;
}

class App implements IApp {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: INewsSource) => this.view.drawNews(data))
            );
        this.controller.getSources((data: ISourcesSource) => this.view.drawSources(data));
    }
}

export default App;

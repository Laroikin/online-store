import { ISourcesSource, INewsSource } from '../types';
import AppLoader from './appLoader';

interface IAppController {
    getNews(e: Event, callback: (data: INewsSource) => void): void;
    getSources(callback: (data: ISourcesSource) => void): void;
}

class AppController extends AppLoader implements IAppController {
    getSources(callback: (data: ISourcesSource) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: INewsSource) => void) {
        let target: HTMLInputElement = e.target as HTMLInputElement;
        const newsContainer: HTMLInputElement = e.currentTarget as HTMLInputElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id') ?? '';
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLInputElement;
        }
    }
}

export default AppController;

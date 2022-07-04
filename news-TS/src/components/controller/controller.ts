import AppLoader from './appLoader';

interface IAppController {
    getSources(callback: () => void): void;
    getNews(e: Event, callback: () => void): void;
}

class AppController extends AppLoader implements IAppController {
    getSources(callback: () => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: () => void) {
        let target: HTMLInputElement = e.target as HTMLInputElement;
        const newsContainer: HTMLInputElement = e.currentTarget as HTMLInputElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id')!;
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

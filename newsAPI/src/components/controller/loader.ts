import { ISourcesSource, INewsSource } from '../types/index';

interface Ioptions {
    apiKey?: string;
    sources?: string;
}

type ApiEndpoints = string;

interface ILoader {
    getResp(
        { endpoint, options }: { endpoint: ApiEndpoints; options?: Ioptions },
        callback: ((data: INewsSource) => void) | ((data: ISourcesSource) => void)
    ): void;
    load(
        method: string,
        endpoint: ApiEndpoints,
        callback: ((data: INewsSource) => void) | ((data: ISourcesSource) => void),
        options: Ioptions
    ): void;
}

class Loader implements ILoader {
    private baseLink: string;
    private options: Ioptions;
    constructor(baseLink: string, options: Ioptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: ApiEndpoints; options?: Ioptions },
        callback: ((data: INewsSource) => void) | ((data: ISourcesSource) => void)
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler = (res: Response) => {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    };

    private makeUrl(options: Ioptions, endpoint: ApiEndpoints) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof Ioptions] ?? ''}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: string,
        endpoint: ApiEndpoints,
        callback: ((data: INewsSource) => void) | ((data: ISourcesSource) => void),
        options: Ioptions = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data as INewsSource & ISourcesSource))
            .catch((err) => console.error(err));
    }
}

export default Loader;

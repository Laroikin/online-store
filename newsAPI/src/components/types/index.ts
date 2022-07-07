export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    language: string;
    country: string;
}

export interface INewsSource {
    articles: INews[];
}

export interface ISourcesSource {
    sources: ISources[];
}

export interface INews {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface Source {
    name: string;
    title: string;
    id: string | null;
}

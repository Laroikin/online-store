import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0a1151c74c14421a943cbd5c16858096', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

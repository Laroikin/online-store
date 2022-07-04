import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '05f9e2bb90524bffbd50d91342d6759d', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

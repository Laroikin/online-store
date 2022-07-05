import './sources.css';
import { ISources } from '../../types';

class Sources {
    draw(data: ISources[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLMetaElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceContent = (sourceItemTemp?.content as unknown) as Element;
            const sourceClone: Element = sourceContent.cloneNode(true) as Element;

            const itemName = sourceClone.querySelector('.source__item-name')!;
            itemName.textContent = item.name;
            const itemElem = sourceClone.querySelector('.source__item')!;
            itemElem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const appendElement = document.querySelector('.sources');
        appendElement?.append(fragment);
    }
}

export default Sources;

import Child from './Child';
import { createRoot, Root } from 'react-dom/client';

class ChildWebComponent extends HTMLElement {
    static get observedAttributes() {
        return ['title']
    }
    mountPoint!: HTMLSpanElement;
    root!: Root;

    render() {        
        const title = (this.getAttribute('title')) as any;
        if(!this.root) this.root = createRoot(this.mountPoint);
        this.root.render(<Child title={title} />);
    }

    connectedCallback() {
        this.mountPoint = document.createElement('span');
        this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
    
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }
}

export default ChildWebComponent;

customElements.define('react-child', ChildWebComponent);
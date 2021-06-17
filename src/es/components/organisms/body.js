class Body extends HTMLElement {
    constructor(...args) {
        super(...args);
    }

    connectedCallback(){
        if (this.shouldComponentRenderCSS()) this.renderCss();
        if (this.shouldComponentRenderHTL()) this.rednerHTML();
    }

    disconnectedCallback(){

    }


    renderCss(){
        this.css = `
            :host {
                background-color: var(--background-color, red);
            }
        `
    }

    rednerHTML() {
        const main = this.root.appendChild(document.createElement('main'));
        Array.from(this.root.children).forEach(node => {
            if (node === main || node.getAttribute('slot') || node.nodeName === 'STYLE') return false;
            main.appendChild(node);
        })
    }

    shouldComponentRenderCSS () {
        return !this.root.querySelector('style[_css]')
      }

    shouldComponentRenderHTML () {
        return !this.root.querySelector('main')
      }
    
}
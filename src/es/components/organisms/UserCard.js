const template = document.createElement('template');

template.innerHTML =`
<style>
h3 {
    color: coral;
}

div.user-card {
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    width 500px;
    display: flex;
    justify-content: center; 
    align-items: center;
    padding: 2em;
}



div.user-card img {
    margin: 2em;
}



</style>

<div class="user-card">
<img />
<div>
<h3></h3>
<div class="info">
<p><slot name="email"></slot></p>
<p><slot name="phone"></slot></p>
<button id="toggle-info">Hide Info</button>
</div>
</div>
</div>
`;


class UserCard extends HTMLElement {
    constructor(){
        super();
        this.showInfo = true;
        this.attachShadow({ mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }


    toggleInfo(){
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('div.info');
        const toggleBtn = this.shadowRoot.querySelector('button#toggle-info');

        if (this.showInfo){
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide info';
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Hide info';
        }
    }


    connectedCallback() {
        this.shadowRoot.querySelector('button#toggle-info')
        .addEventListener('click', ()  => this.toggleInfo);
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('button#toggle-info')
        .removeEventListener();
    }
    
}



window.customElements.define('user-card', UserCard);
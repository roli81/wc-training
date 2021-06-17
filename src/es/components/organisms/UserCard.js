const template = document.createElement('template');

template.innerHTML =`
<style>
h3 {
    color: coral;
}

.user-card {
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    width 500px;
    display: flex;
    justify-content: center; 
}

.user-card img {
    margin: 2rem;
}

</style>

<div class="user-card">
<img />
<div>
<h3></h3>
<div class="info">
<p>EMAIL</p>
<p>PHONE</p>
</div>
</div>
</div>
`;


class UserCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
     
    }
}


window.customElements.define('user-card', UserCard);
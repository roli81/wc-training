import { Shadow } from '../prototypes/Shadow.js';







export default class Body extends Shadow() {
    constructor(...args) {
        super(...args);
    }

    connectedCallback(){
        console.log(element);
    }

    disconnectedCallback(){

    }
}
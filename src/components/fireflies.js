// firefly-component.js
import { LitElement, html, css } from '../../node_modules/lit';

export class FireflyComponent extends LitElement {
    static properties = {
        quantity: {}
    };

    static styles = css`
        .circle {
            background-color: #040212;
            position: absolute;
            border-radius: 300px;
            top: 45%;
            left: 45%;
            width: 200px;
            height: 200px;
            box-shadow: 0 0 50px 60px #040212;
        }
        :host {
            display: block;
            height: 100vh;
            background-size: cover;
        }
        
        .firefly {
            border-radius: 10px;
            position:absolute;
            left: 50%;
            top: 50%;
            width: 0px;
            height: 0px;
            animation: ease 20s alternate infinite;
            pointer-events: none;
            transform-origin: -10vw;
            box-shadow: 0 0 15px 6px #84e1de;
            opacity: 0.8;
        }
    `;

    constructor() {
        super();
        this.quantity = 100; // Set the quantity of fireflies
    }

    render() {
        const fireflies = [];
        const keyframes = [];

        for (let i = 0; i < this.quantity; i++) {
            fireflies.push(this._renderTemplate());

            let steps = Math.floor(Math.random() * 12) + 16;
            const keys = [];
            for (let x = 0; x < steps; x++) {
                keys.push(this._getKeyframe(x , steps));
            }
            keyframes.push(keys);
        }

        return html`
            ${fireflies}
            ${this._getDinamicStyle(fireflies, keyframes)}
            <div class="circle"></div>
        `;
    }

    _renderTemplate() {
        return html`<div class="firefly"></div>`
    }

    _getKeyframe(x, steps){
        let percentage = (x * 100) / steps;
        let translateX = Math.random() * 100 - 50;
        let translateY = Math.random() * 100 - 50; 
        let scale = Math.random() * 0.75 + 0.25;

        let frames = `${percentage}% {
transform: translateX(${translateX}vw) translateY(${translateY}vh) scale(${scale});
}\n`;

        return frames;
    }
    
    _getDinamicStyle(fireflies, keyframes){

        let childs = [];
        let frames = [];
        fireflies.forEach((item, index) => {
            childs.push(`.firefly:nth-child(${index}) {
                animation-name: move${index};
                animation-duration: ${this._getRotationSpeed()}s;
}`)
            ;
        })

        for (let i = 0; i < this.quantity; i++) {
            frames.push(`@keyframes move${i} { 
${keyframes[i]}
                }
            `);
        }


        let before = `.firefly::before { 
    animation-duration: ${this._getRotationSpeed()}s;
        }`;
        let after = `.firefly::after {
    animation-duration: ${this._getRotationSpeed()}s, ${this._getRandomDelay()}ms;
    animation-delay: 0ms, ${this._getRandomDelay()}ms;
        }`;

        return html `
            <style>
                ${childs}
                ${before}
                ${after}
                ${frames}
           </style>
        `;
    }

    _getRotationSpeed(){
        return (Math.random() * 10 + 8);
    }

    _getRandomDelay(){
        return Math.floor(Math.random() * 8000) + 500;
    }
}

customElements.define('firefly-component', FireflyComponent);

// firefly-component.js
import { LitElement, html, css } from 'lit';
const COLORS_BY_INDEX = ['red', 'blue', 'yellow', 'green', 'black'];
const POSITIONS = ['static', 'relative', 'absolute', 'fixed', 'sticky'];

export class FireflyComponent extends LitElement {
    static properties = {
        quantity: {}
    };

    static styles = css`
        :host {
            display: block;
            height: 100vh;
            background-color: #000;
            background-size: cover;
        }
        
        .firefly {
            background: #fff;
            border-radius: 10px;
            left: 50%;
            top: 50%;
            width: 10px;
            height: 10px;
            margin: -0.2vw 0 0 9.8vw;
            animation: ease 200s alternate infinite;
            pointer-events: none;
            transform-origin: -10vw;
            z-index:1;
        }
        
        firefly::before, firefly::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        
        firefly::before {
            background: black;
            opacity: 0.4;
            animation: drift ease alternate infinite;
        }
        
        firefly::after {
            background: white;
            opacity: 0;
            box-shadow: 0 10 10vw 10vw yellow;
            animation: drift ease alternate infinite, flash ease infinite;
        }
    `;

    constructor() {
        super();
        this.quantity = 30; // Set the quantity of fireflies
    }

    render() {
        const fireflies = [];
        const befores = [];
        const afters = [];
        const keyframes = [];

        for (let i = 0; i < this.quantity; i++) {
            fireflies.push(this._renderTemplate());
            befores.push(this._renderTemplateBefore());
            afters.push(this._renderTemplateAfter()); 

            let steps = Math.floor(Math.random() * 12) + 16;
            const keys = [];
            for (let x = 0; x < steps; x++) {
                keys.push(this._getKeyframe(x , steps));
            }
            keyframes.push(keys);
        }

        return html`
            ${fireflies}
            ${afters}
            ${befores}
            ${this._getDinamicStyle(fireflies, keyframes)}
            
        `;
    }

    _renderTemplate() {
        return html`<div class="firefly"></div>`
    }
    _renderTemplateBefore(){
        return html`<div class="before"></div>`
    }
    _renderTemplateAfter(){
        return html`<div class="after"></div>`
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
        let num = Math.floor(Math.random() * 4);
        let childs = [];
        let frames = [];
        fireflies.forEach((item, index) => {
            childs.push(`.firefly:nth-child(${index}) {
                position: ${POSITIONS[num]};
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


        let before = `before { 
    animation-duration: ${this._getRotationSpeed()}s;
        }`;
        let after = `after {
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

// firefly-component.js
import { LitElement, html, css } from 'lit';
const COLORS_BY_INDEX = ['red', 'blue', 'yellow', 'green', 'black'];

class FireflyComponent extends LitElement {
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
            position: fixed;
            left: 50%;
            top: 50%;
            width: 0.4vw;
            height: 0.4vw;
            margin: -0.2vw 0 0 9.8vw;
            animation: ease 200s alternate infinite;
            pointer-events: none;
            transform-origin: -10vw;
        }
        
        .before,
        .after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        
        .before {
            background: black;
            opacity: 0.4;
            animation: drift ease alternate infinite;
        }
        
        .after {
            background: white;
            opacity: 0;
            box-shadow: 0 0 0vw 0vw yellow;
            animation: drift ease alternate infinite, flash ease infinite;
        }
    `;

    constructor() {
        super();
        this.quantity = 15; // Set the quantity of fireflies
    }

    render() {
        return html`
        <!-- No need for static HTML content here -->
        `;
    }


    firstUpdated() {
        // Dynamically create and append fireflies based on the quantity
        const fragment = document.createDocumentFragment();

        for (let i = 1; i <= this.quantity; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        fragment.appendChild(firefly);
        }
        this.shadowRoot.appendChild(fragment);

        // Set up animations for each firefly
        for (let i = 1; i <= this.quantity; i++) {
        const steps = Math.floor(Math.random() * 12) + 16;
        const rotationSpeed = Math.random() * 10 + 8;

        const firefly = this.querySelector(`.firefly:nth-child(${i})`);
        firefly.style.animationName = `move${i}`;
        firefly.style.animationDuration = `${rotationSpeed}s`;

        const before = document.createElement('div');
        before.className = 'before';
        firefly.appendChild(before);

        const after = document.createElement('div');
        after.className = 'after';
        firefly.appendChild(after);

        before.style.animationDuration = `${rotationSpeed}s`;

        const randomDelay = Math.floor(Math.random() * 8000) + 500;
        after.style.animationDuration = `${rotationSpeed}s, ${randomDelay}ms`;
        after.style.animationDelay = `0ms, ${randomDelay}ms`;

        // Set up keyframes animation for each firefly
        const keyframes = [];
        for (let step = 0; step <= steps; step++) {
            const percentage = (step * 100) / steps;
            const translateX = Math.random() * 100 - 50;
            const translateY = Math.random() * 100 - 50;
            const scale = Math.random() * 0.75 + 0.25;

            keyframes.push(`${percentage}% {
            transform: translateX(${translateX}vw) translateY(${translateY}vh) scale(${scale});
            }`);
        }

        const moveAnimation = document.createElement('style');
        moveAnimation.textContent = `@keyframes move${i} {
            ${keyframes.join('\n')}
        }`;
        this.appendChild(moveAnimation);
        }
    }




}

customElements.define('firefly-component', FireflyComponent);

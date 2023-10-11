(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lit')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lit'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myBundle = {}, global.lit));
})(this, (function (exports, lit) { 'use strict';

    // firefly-component.js

    class FireflyComponent extends lit.LitElement {
        static properties = {
            quantity: {}
        };

        static styles = lit.css`
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

            return lit.html`
            ${fireflies}
            ${this._getDinamicStyle(fireflies, keyframes)}
            <div class="circle"></div>
        `;
        }

        _renderTemplate() {
            return lit.html`<div class="firefly"></div>`
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
            });

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

            return lit.html `
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

    class MovingText extends lit.LitElement {
        static properties = {
            text: {type: String, attribute:"text"},
        };

        static styles = lit.css`
        .m-scroll {
        display: flex;
        position: absolute;
        width: 100%;
        height: 600px;
        margin: auto;
        overflow: hidden;
        }

        .m-scroll__title {
        display: flex;
        position: absolute;
        top: -140px;
        left: 0;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        white-space: nowrap;
        transform: scale(2);
        transition: all 1s ease;
        }

        .m-scroll__title > div {
        display: flex;
        animation: scrollText 20s infinite linear;
        }

        h1 {
        margin: 0;
        font-size: 64px;
        color: #e6e6e6;
        transition: all 2s ease;
        }

        @keyframes scrollText {
            from   { transform: translateX(0%); }
            to { transform: translateX(-50%); }
        }
    `;

        render() {
            return lit.html`
        <div class="m-scroll">
            <div class="m-scroll__title">
            <div>
                <h1>${this.text}</h1>
                <h1>${this.text}</h1>
            </div>
            </div>
        </div>
        `;
        }
    }

    customElements.define('moving-text', MovingText);

    class LinkItem extends lit.LitElement {
        static properties = {
            text: {type: String, attribute:"text"},
        };

        static styles = lit.css`
    .container {
        display: flex;
        align-items: center;
        position: absolute;
        padding: 0;
        margin: 0;
    }
    
    .logo-container {
        width: 30px;
        height: 30px;
    }

    .logo-container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        transform: scale(1);
        background-color: rgba(132, 225, 222, 0);
        transition: background-color 0.3s ease-in-out; 
        transition: transform 0.3s ease-in-out; 
    }
    .container:hover .logo-container::before {
        background-color: rgba(132, 225, 222, 1);
        transform: scale(0.2);
    }

    .logo{
        transition: transform 0.3s ease-in-out; 
    }

    .container:hover .logo {
        transform: scale(0.2);
    }

    .text {
        color: #84e1de;
        text-decoration: none;
        margin-left: 10px;
        transform: translateX(0px);
        transition: transform 0.5s ease;
    }

    .container:hover .text {
        transform: translateX(-10px);
        
    }

    .text::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #84e1de;
        left: 0;
        bottom: -4px;
        position: absolute;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease-out; 
    }
    
    .container:hover .text::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    
    @keyframes scale-down-center {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.2);
        }
    }
    
    @keyframes slide-left {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-10px);
        }
    }
          
    `;

        render() {
            return lit.html`
            <div class="container">
            <div class="logo-container">
                <img class="logo" src="src/images/component1.png">
            </div>
                <a href="#contact" class="text">${this.text}</a>
            </div>
        `;
        }
    }
    customElements.define('link-item', LinkItem);

    class SkillsComponent extends lit.LitElement {
        static properties = {
            text: {type: String, attribute:"text"},
        };

        connectedCallback() {
            super.connectedCallback();
            window.addEventListener("scroll", () => {
                this.handleScroll();
            });
            console.log("a");
        }
        
        handleScroll(){
            const logo = this.shadowRoot.querySelectorAll("#diamond");
            
            const scrollY = window.scrollY;
            const rotationAngle = scrollY / 3; 
            
            logo.forEach(element => {
                element.style.transform = `rotate(${rotationAngle}deg)`;
            });

        }



        static styles = lit.css`
        .container {
            display: flex;
            align-items: center;
            padding: 50px;
            overflow: hidden;
        }
        
        .scroll {
            white-space: nowrap;
            margin: 0 2em;
        }
        
        .scroll div {
            display: flex;
            gap: 2em;
        }
        
        .scroll p {
            letter-spacing: .5rem;
            font-size: 20px;
            color: white;
            font-weight: bold;
            margin-bottom: 0;
            line-height: 10px;
        }
        
        .RightToLeft {
            animation: RightToLeft 8s infinite linear;
        }
        
        @keyframes  RightToLeft {
            from {
            transform: translateX(0%);
            }
            to {
            transform: translateX(-33.5%);
            }
        }
        
        .LeftToRight {
            animation: LeftToRight 8s infinite linear;
        }
        
        @keyframes  LeftToRight {
            from {
            transform: translateX(-33.5%);
            }
            to {
            transform: translateX(0%);
            }
        }

        .skill {
            position:relative;
            padding:10px;
            display:flex;
        }

        .line, .line2{
            position: relative;
            flex-basis: 40%;
            background-color: #e6e6e6;
            height: 3px;
            top: 24px;
            margin-right:50px;
        }
        .line2 {
            margin-right:0px;
            margin-left:50px;
        }

        #diamond {
            position:relative;
            width: 35px;
            height: 30px;
            background: #ffa69e;
            top: 34px;
            transform: rotate(-45deg);
        }



        .text {
            position:relative;
            text-align: center;
            font-size: 64px;
            flex-basis: 20%;
            margin:0;
            margin-left:50px;
            margin-right:50px;
            top: 10px;
        }
    `;

        render() {
            return lit.html`
        <div class="wrap">
            <div class="container">
                <div class="scroll">
                    <div class="RightToLeft">
                        <p>${this.text}</p>
                        <p>${this.text}</p>
                        <p>${this.text}</p>
                    </div>
                </div>
            </div>

            <div class="skill">
                <h2 class="line"></h2>
                <div id="diamond"></div>
                <h2 class="text">Skills</h2>
                <div id="diamond"></div>
                <h2 class="line2"></h2>
            </div>

            <div class="container">
                <div class="scroll">
                    <div class="LeftToRight">
                        <p>${this.text}</p>
                        <p>${this.text}</p>
                        <p>${this.text}</p>
                    </div>
                </div>
            </div>
        </div>

        `;
        }
    }
    customElements.define('skills-component', SkillsComponent);

    exports.FireflyComponent = FireflyComponent;
    exports.LinkItem = LinkItem;
    exports.MovingText = MovingText;
    exports.SkillsComponent = SkillsComponent;

}));

import { LitElement, html, css } from 'lit';

export class LinkItem extends LitElement {
    static properties = {
        text: {type: String, attribute:"text"},
    };

    static styles = css`
    .container {
        display: flex;
        align-items: center;
        position: absolute;
        padding: 0;
        margin: 0;
    }
    
    .logo {
        diplay:flex;
        transition: all 0.4s ease; 
    }

    .container:hover .logo {
        display: none;
    }
        
    .logo2 {
        display: none;
    }

    .container:hover .logo2 {
        display: flex;
        animation: scale-down-center 0.4s both;
    }

    .container:hover .text {
        animation: slide-left 0.5s both;
    }

    .text {
        color: #84e1de;
        text-decoration: none;
        margin-left: 10px;
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
            transform: scale(0.3);
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
        return html`
            <div class="container">
                <img class="logo" src="src/images/component1.png">
                <img class="logo2" src="src/images/component1-after.png">
                <a href="#contact" class="text">${this.text}</a>
            </div>
        `;
    }
}
customElements.define('link-item', LinkItem);
//import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
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
        return html`
            <div class="container">
                <div class="logo-container">
                    <img class="logo" src="src/assets/icons/component1.png">
                </div>
                <div class="text">${this.text}</div>
            </div>
        `;
    }
}
customElements.define('link-item', LinkItem);

import { LitElement, html, css } from 'lit';

export class LinkItem extends LitElement {
    static properties = {
        text: {type: String, attribute:"text"},
    };

    static styles = css`
        .container {
            display: flex;
            align-items:center;
            position: relative;
            padding: 0;
            margin:0;
        }

        .text {
            color:#84e1de;
            text-decoration: none;
            margin-left: 10px;
        }

        .container:hover .logo {
            display:none;
        }
        .container:hover .logo2 {
            display:flex;
	        animation: scale-down-center 0.4s both;
        }

        .logo2 {
            display:none;
        }

        @keyframes scale-down-center {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(0.3);
            }
        }
          
    `;

    render() {
        return html`
            <div class="container">
                <div>
                <img class="logo" src="src/images/component1.png">
                <img class="logo2" src="src/images/component1-after.png">
                <a href="#contact" class="text">${this.text}</a>
                </div>
            </div>
        `;
    }
}
customElements.define('link-item', LinkItem);
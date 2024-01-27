import { LitElement, html, css } from '../../node_modules/lit';

export class MovingText extends LitElement {
    static properties = {
        text: {type: String, attribute:"text"},
    };

    static styles = css`
        .m-scroll {
            display: flex;
            position: absolute;
            width: 100vw;
            height: 17vw;
            margin: auto;
            overflow: hidden;
            }

        .m-scroll__title {
            top: 4.5vw;
            display: flex;
            position: absolute;
            left: 0;
            align-items: center;
            justify-content: flex-start;
            width: 100vw;
            height: 10vh;
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

        @media (max-width: 1200px){
            h1 {
                font-size: 48px;

            }     
            .m-scroll__title {
                top: 1.5vw;
            }    
        }
        @media (max-width: 900px){
            h1 {
                font-size: 32px;

            }     
            .m-scroll__title {
                top: 1.5vw;
            }    
        }
    `;

    render() {
        return html`
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
import { LitElement, html, css } from 'lit';

export class MovingText extends LitElement {
    static properties = {
        text: {type: String, attribute:"text"},
    };

    static styles = css`
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
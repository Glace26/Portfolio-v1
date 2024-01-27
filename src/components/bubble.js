import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Bubble extends LitElement {
    static styles = css`
        .container {
            display: grid;
            width: fit-content;
            background-color: #040212;
            padding: 20px 30px;
            position: relative;
            box-shadow: 10px 10px #ffa69e;
        }
        
        .container p, .container a {
            margin: 0;
            padding: 10px 0;
            text-align: left;
            font-weight: bold;
            letter-spacing: 3px;
            font-size: 15px;
            color: #e6e6e6;
            position: relative;
        }

        .container a {

        }

        .container p:after {
            content: "";
            width: 30px;
            height: 11px;
            background-color: #ffa69e;
            position: absolute;
            display: block;
            top: -20px;
            left: -40px;
        }
    `;

    render() {
        return html`
        <div class="container">
            <a href="src/assets/docs/CV_2023.pdf" download class="btn2">Send email <-</a>
        </div>
        `;
    }
}
customElements.define('text-bubble', Bubble);
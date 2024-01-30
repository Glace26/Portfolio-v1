import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Section4 extends LitElement {
    static properties = {
        desc: {type: String, attribute:"desc"},
    };

    static styles = css`

            .project-conclusion{
                height: 100vh;
                width: 100vw;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 50px;
                flex-direction: column;
            }

            .title-cont{
                height: 100%;
                width: 100%;
                font-size: 70px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                flex: 0.4;
            }


            .desc-texts{
                flex: 0.5;
                font-size: 35px;
                height: 100%;
                width: 100%;
                text-align: center;
                max-width: 80vw;
            }
           
            .out{
                flex: 0.1;
            }
            }`;

    render() {
        return html`
    
        <div class="project-conclusion">
            <div class="title-cont">
                <p class="title">CONCLUSIONS</p>
            </div>
            <div class="desc-texts">
                <p class="desc">${this.desc}</p>
            </div>
            <div class="out">
            <a href="index.html">
                <img id="out-img" src="src/assets/icons/X.png" alt="">
            </a>
            </div>
        </div>`;
    }
}

customElements.define('section-4', Section4);
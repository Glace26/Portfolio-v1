//import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { LitElement, html, css } from 'lit';
export class Section3 extends LitElement {
    static properties = {
        desc: {type: String, attribute:"desc"},
        desc2: {type: String, attribute:"desc2"},
        imag: {type: String, attribute:"imag"},
    };

    static styles = css`

            .project-overview{
            height: fit-content;
            width: 100vw;
            font-size: 70px;
            padding-bottom: 250px;
            }

                        
            .lane{
                height: 0px;
                width: 100%;
                background-color: white;
            }

            .box1{
                display: flex;
                height: 100px;
                flex:0.6;
                align-items: center;
                justify-content: center;
            }

            .box2{
                display: flex;
                flex: 0.3;
                height: 100px;
                text-align: center;
                align-items: center;
                justify-content: center;
                font-size: 70px;
            }

            .box3{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100px;
                flex: 0.1;
            }


            .project-overview_header{
                display: flex;
                align-content: stretch;
                height: 200px;
                width: 100vw;
            }

            .project-overview_info{
            display: flex;
            justify-content: center;
            height: 400px;
            }

            .v-lane{
                height: 100%;
                width: 1px;
                background-color: white;
            }

            .overview_info-box1{
                display: flex;
                flex: 0.4;
                flex-direction: column;
                justify-content: center;
    
                }
                .overview-titulo{
                    text-align:  right;
                    font-size: 14px;
                }
    
                .overview-desc{
                    font-size: 14px;
                    text-align: right;
                }
    
    
                .overview_info-box2{
                    flex: 0.1;
                    height: 100%;
                    width: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
    
    
                .overview_info-box3{
                    flex: 0.4;
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                }
    
                .overview-titulo2{
                    text-align: left;
                    font-size: 14px;
                }
    
                .overview-desc2{
                    font-size: 14px;
                    text-align: left;
                }
            .imagen{
                width: 1800px;
                height: 900px;
            }

            .study-cases_image2{
            margin-top: 100px;
            width: 1800px;
            height: 900px;
            background: #D9D9D9;
            margin-left: auto;
            margin-right: auto;
            }`;

    render() {
        return html`
        <div class="project-overview">
        <div class="project-overview_header">
            <div class="box1"><div class="lane"></div></div>
            <div class="box2">The STRATEGY</div>
            <div class="box3"><div class="lane"></div> </div>
       </div>
    
        <div class="project-overview_info">

            <div class="overview_info-box1">
                <p class="overview-desc">${this.desc}</p>
            </div>
    
            <div class="overview_info-box2">
                <div class="v-lane"></div>
            </div>
    
            <div class="overview_info-box3">
                <p class="overview-desc2">${this.desc2}</p>
            </div>
    
        </div>

        <div class="study-cases_image2">
        <img class= "imagen" src=${this.imag}>
        </div>
    </div>`;
    }
}

customElements.define('section-3', Section3);

import { LitElement, html, css } from 'lit';

export class SkillsComponent extends LitElement {
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



    static styles = css`
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
        return html`
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

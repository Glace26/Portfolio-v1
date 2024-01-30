//import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { LitElement, html, css } from 'lit';
export class FeaturedProjects extends LitElement {
    static properties = {
        text: {type: String, attribute:"text"},
    };

    connectedCallback() {
        super.connectedCallback();
        this.intersectionObserver = new IntersectionObserver(this.handleIntersection);
        // Observe your target elements (divs)
        this.intersectionObserver.observe(this.div1);
        this.intersectionObserver.observe(this.div2);
        this.intersectionObserver.observe(this.div2);
        this.intersectionObserver.observe(this.div2);
    }
    
    handleScroll(){
        var container = this.shadowRoot.getElementById('container');
        var square1 = this.shadowRoot.querySelector('.square-1');
        var square2 = this.shadowRoot.querySelector('.square-2');
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var scrollArea = 1000 - windowHeight;
        

        var scrollTop = window.scrollY || window.scrollTop;
        var scrollPercent = scrollTop/scrollArea || 0;
        
        square1.style.left = scrollPercent*window.innerWidth + 'px';
        square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
    }

    static styles = css`
        body {
            overflow-x: hidden;
        }
        
        .container {
            width: 100%;
            height: 1000px;
        }
        
        .square {
            position: relative;
        }
        
        .square-1 {
            width: 100px;
            height: 100px;
            background: red;
            top: 600px;
        }
        
        .square-2 {
            width: 120px;
            height: 120px;
            background: pink;
            left: 800px;
            top: 800px;
        }
    `;

    render() {
        return html`
        <div class="container" id="container">
            <div class="square square-1"></div>
            <div class="square square-2"></div>
            <div class="square square-3"></div>
            <div class="square square-4"></div>
        </div>
        `;
    }
}
customElements.define('featured-projects', FeaturedProjects);

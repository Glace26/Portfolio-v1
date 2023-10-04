import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

export class MyElement extends LitElement {
    static properties = {
        msg: {},
        checked: {},
        _listItems: {state:true},
        hideCompleted: {},
    };

    static styles = css `
        .completed {
            text-decoration-line: line-through;
            color: #777;
            cursor:pointer;
        }
    `;

    constructor() {
        super();
        this.msg = 'HEY YOOO!';
        this.checked = false;
        this._listItems = [
            {text: 'Start Lit Tutorial', completed: false},
            {text: 'Make to-do list', completed: true},
        ];
        this.hideCompleted = false;
    }

    render() {
        const items = this.hideCompleted
        ? this._listItems.filter((item) => !item.completed)
        : this._listItems;

        const todos = html `
            <ul>
                ${items.map( (item) => html`
                    <li class=${item.completed ? 'completed' : ''}
                            @click=${() => this.toggleCompleted(item)}>
                        ${item.text}
                    </li> `
                )}
            </ul>
        `;

        const caughtUpMessage = html`
            <p>
                You're all caught up!
            </p>
        `;
        const todosOrMessage = items.length > 0
        ? todos
        : caughtUpMessage;


        return html`
        <div>
            <p> Welcome: ${this.msg} </p>
            <input ?disabled=${!this.checked} @input=${this.changeName} placeholder="Enter your name"> <br>
            <label>
                <input type="checkbox" @change=${this.setChecked}> Enable editing 
            </label> <br><br>
        </div>
        <button @click=${this.handleClick}> SURPRISE! </button> <br><br>

        <hr>

        <div>
            <h2>TO-DO List</h2>
            ${todosOrMessage}
            <input id="newItem" aria-label="New Item" >
            <button @click=${this.addTask}> Add </button>
            <br>
            
            <label>
                <input type="checkbox" @change=${this.setHideCompleted} >
                Hide completed
            </label>
        </div>
        <br>
        <hr><hr>
        `
    }

    setHideCompleted(e) {
        this.hideCompleted = e.target.checked;
    }    

    toggleCompleted(task){
        task.completed = !task.completed;
        this.requestUpdate();
    }

    changeName(e){
        let input = e.target;
        this.msg = input.value;
    }

    setChecked(e){
        this.checked = e.target.checked;
    }

    handleClick(e){
        alert("WELCOME BACK");
    }

    get input() {
        return this.renderRoot?.querySelector("#newItem") ?? null;
    }

    addTask(e) {
        this._listItems = [...this._listItems,
            {text: this.input.value, completed:false}
        ];
        this.input.value ='';
    }
}
customElements.define('my-element', MyElement);
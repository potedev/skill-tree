{/* <form>
    <input/>
    <input/>
</form> */}


import { InputGroup } from '../components/inputGroup'

const App = document.getElementById('app');

class Login {
    constructor(props) {
        const { parent, id, callback } = props;

        this.parent = parent
        this.id = id
        this.callback = callback


        this.element = document.createElement('form')
        this.element.id = "login"

        this.handleSubmit = this.handleSubmit.bind(this);
        this.element.addEventListener('submit', this.handleSubmit)

        this.UsernameInput = new InputGroup(this.element, 'username', '', 'john doe', 'text')
        this.PasswordInput = new InputGroup(this.element, 'password', '', '********', 'password')
        this.SubmitButton = document.createElement('button');
        this.SubmitButton.innerHTML = "LOGIN"

        this.state = {
            message: '',
            loading: false
        }

        this.init();
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.UsernameInput.value);
        console.log(this.PasswordInput.value);
    }

    init() {
        //logic
        //On rajoute le bouton à notre this.element
        this.element.appendChild(this.SubmitButton)
        this.render();
    }

    render() {
        this.parent.appendChild(this.element)
    }
}

const LoginPage = new Login({ parent: App, id: 'login-page' })
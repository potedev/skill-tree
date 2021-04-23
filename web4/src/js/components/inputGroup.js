{/* <input type="text" value="" placeholder="" id="username"/> */ }

export class InputGroup {
    constructor(parent, id, value, placeholder, type) {

        //Configuration de notre Input
        this.parent = parent
        this.id = id
        this.value = value
        this.placeholder = placeholder
        this.type = type

        this.element = document.createElement('input');
        this.element.id = this.id
        this.element.placeholder = this.placeholder
        this.element.type = this.type

        this.handleChange = this.handleChange.bind(this)
        this.element.addEventListener('change', this.handleChange)

        this.init();
    }

    init() {
        console.log(`Votre composant InputGroup avec l'id : ${this.id} est prêt !`)
        this.render();
    }

    handleChange(e) {
        e.preventDefault();
        //This à l'intérieur
        console.log('event ', e.target.value);
        this.value = e.target.value
        console.log(this.value);
    }

    render() {
        this.parent.appendChild(this.element)
    }
}
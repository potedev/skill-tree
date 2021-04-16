class Category {
    constructor(title, description) {
        this.title = title
        this.description = description
    }

    get() {
        return (this.title)
    }
}

export default Category;
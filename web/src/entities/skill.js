class Skill {
    constructor(title, content, category) {
        this.title = title
        this.content = content
        this.category = category
    }

    get() {
        return (this.title)
    }

    setCategory(category) {
        this.category = category
    }
}

export default Skill;
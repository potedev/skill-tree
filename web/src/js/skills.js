import Skill from '../entities/skill'
import skills from '../data/skills'

const createSkillNode = (skill) => {

    //Instance checking
    //checking if the param `skill` is an instance of our Class Skill
    if (!(skill instanceof Skill)) {

        // console.error(skill, '-> ', typeof skill, ' : is not an instance of our class Skill')
        console.error(`${skill} -> ${typeof skill} : is not an instance of our class Skill`)

        return {
            errors: true,
            message: `${skill} -> ${typeof skill} : is not an instance of our class Skill`
        }
    }

    // //Creating our skill node parent
    // const skillNode = document.createElement('div');
    // skillNode.classList.add('skill');

    // //Creating our skill text node
    // const skillTextNode = document.createElement('p');
    // skillTextNode.innerHTML = skill.title;

    // //Adding to our skill node the fine paragraph containing our skill.title
    // skillNode.appendChild(skillTextNode)

    // --> 

    const skillNode = `<div class="skill"><p>${skill.title}</p></div>`

    return skillNode
}

const skillsRender = (skills) => {

    //Type checking
    //checking if the param `skill` is an instance of our Class Skill
    if (!Array.isArray(skills)) {

        // console.error(skill, '-> ', typeof skill, ' : is not an instance of our class Skill')
        console.error(`${skills} -> ${typeof skills} : is not an array`)

        return {
            errors: true,
            message: `${skill} -> ${typeof skill} : is not an instance of our class Skill`
        }
    }

    const skillsNode = skills.map(skill => {
        return createSkillNode(skill);
    })

    return skillsNode.join('')
}


const skillsParent = document.getElementById('#skills');
console.log(skillsParent);
// skillsParent.innerHTML = lol;

const skillsNode = skillsRender(skills);
skillsParent.innerHTML = skillsNode;
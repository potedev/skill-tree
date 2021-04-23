import { Skill } from '../entities/skill'
import categories from './categories'

const skill1 = new Skill('Maquetter une application', 'Maquetter une application description...', categories[0])
const skill2 = new Skill('Développer une interface utilisateur de type desktop ', 'Développer une interface utilisateur de type desktop description...', categories[0])
const skill7 = new Skill('Faire du vélo ', 'Développer une interface utilisateur de type desktop description...', categories[0])

const skill3 = new Skill('Concevoir une base de données', 'Concevoir une base de données description...', categories[1])
const skill4 = new Skill('Mettre en place une base de données ', 'Mettre en place une base de données description...', categories[1])

const skill5 = new Skill('Concevoir une application', 'Concevoir une application description...', categories[2])
const skill6 = new Skill('Développer des composants métier ', 'Développer des composants métier description...', categories[2])
const skill9 = new Skill("Avoir de l'empathie ", 'Développer des composants métier description...', categories[2])

// const skill8 = new Skill('Concevoir une application', 'Concevoir une application description...', categories[3])

const skills = []

skills.push(skill1)
skills.push(skill2)
skills.push(skill3)
skills.push(skill4)
skills.push(skill5)
skills.push(skill6)
skills.push(skill7)
skills.push(skill9)

export default skills
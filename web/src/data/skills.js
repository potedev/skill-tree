import Skill from '../entities/skill'
import Categories from '../data/categories'

const skill1 = new Skill('Maquetter une application', 'Maquetter une application description...', Categories[0])
const skill2 = new Skill('Développer une interface utilisateur de type desktop ', 'Développer une interface utilisateur de type desktop description...', Categories[0])

const skill3 = new Skill('Concevoir une base de données', 'Concevoir une base de données description...', Categories[1])
const skill4 = new Skill('Mettre en place une base de données ', 'Mettre en place une base de données description...', Categories[1])

const skill5 = new Skill('Concevoir une application', 'Concevoir une application description...', Categories[2])
const skill6 = new Skill('Développer des composants métier ', 'Développer des composants métier description...', Categories[2])

const skills = []

skills.push(skill1)
skills.push(skill2)
skills.push(skill3)
skills.push(skill4)
skills.push(skill5)
skills.push(skill6)

export default skills
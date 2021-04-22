import { Skill } from '../entities/skill'
import categoriesData from './category'

console.log(categoriesData);

const MaquetterUneApplication = new Skill('maquetter une application', categoriesData[0])

const skills = []

skills.push(MaquetterUneApplication);

export default skills
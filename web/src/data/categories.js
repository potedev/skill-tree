import Category from '../entities/category'

const ActivityType1 = new Category('Activité Type 1', "Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité");
const ActivityType2 = new Category('Activité Type 2', "Concevoir et développer la persistance des données en intégrant les recommandations de sécurité");
const ActivityType3 = new Category('Activité Type 3', "Concevoir et développer une application multicouche répartie en intégrant les recommandations de sécurité");

const categories = []

categories.push(ActivityType1)
categories.push(ActivityType2)
categories.push(ActivityType3)

export default categories
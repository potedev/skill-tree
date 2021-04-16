// import User from './entities/user'
// import Category from './entities/category'
// import Skill from './entities/skill'
// import Level from './entities/level'
// import Progress from './entities/progress'

// // ----------------------------------------------------------------------------------------------------------------------------
// // ------------------------------------------------------ USERS ---------------------------------------------------------------
// // ----------------------------------------------------------------------------------------------------------------------------

// const Quentin = new User('Quentin', 'Danneville');

// const users = []
// users.push(Quentin)

// // ----------------------------------------------------------------------------------------------------------------------------
// // ---------------------------------------------------- CATEGORY --------------------------------------------------------------
// // ----------------------------------------------------------------------------------------------------------------------------

// const ActivityType1 = new Category('Activité Type 1', "Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité");
// const ActivityType2 = new Category('Activité Type 2', "Concevoir et développer la persistance des données en intégrant les recommandations de sécurité");
// const ActivityType3 = new Category('Activité Type 3', "Concevoir et développer une application multicouche répartie en intégrant les recommandations de sécurité");

// const categories = []
// categories.push(ActivityType1)
// categories.push(ActivityType2)
// categories.push(ActivityType3)

// // ----------------------------------------------------------------------------------------------------------------------------
// // ------------------------------------------------------ SKILLS --------------------------------------------------------------
// // ----------------------------------------------------------------------------------------------------------------------------

// const skill1 = new Skill('Maquetter une application', 'Maquetter une application description...', ActivityType1)
// const skill2 = new Skill('Développer une interface utilisateur de type desktop ', 'Développer une interface utilisateur de type desktop description...', ActivityType1)

// const skill3 = new Skill('Concevoir une base de données', 'Concevoir une base de données description...', ActivityType2)
// const skill4 = new Skill('Mettre en place une base de données ', 'Mettre en place une base de données description...', ActivityType2)

// const skill5 = new Skill('Concevoir une application', 'Concevoir une application description...', ActivityType3)
// const skill6 = new Skill('Développer des composants métier ', 'Développer des composants métier description...', ActivityType3)

// const skills = []
// skills.push(skill1)
// skills.push(skill2)
// skills.push(skill3)
// skills.push(skill4)
// skills.push(skill5)
// skills.push(skill6)

// // ----------------------------------------------------------------------------------------------------------------------------
// // ----------------------------------------------------- LEVELS ---------------------------------------------------------------
// // ----------------------------------------------------------------------------------------------------------------------------

// //Creating our levels
// const level1 = new Level(1, 'Imiter')
// const level2 = new Level(1, 'Adapter')
// const level3 = new Level(1, 'Transposer')

// const levels = []
// levels.push(level1)
// levels.push(level2)
// levels.push(level3)

// // ----------------------------------------------------------------------------------------------------------------------------
// // ---------------------------------------------------- PROGRESS  -------------------------------------------------------------
// // ----------------------------------------------------------------------------------------------------------------------------

// const quentinProgress = new Progress(Quentin, skill1, level3)

// const progresses = []

// progresses.push(quentinProgress);


// ----------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------- RENDER LOGIC  ------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------

// import Skill from './entities/skill'

// const createSkillNode = (skill) => {

//     //Instance checking
//     //checking if the param `skill` is an instance of our Class Skill
//     if (!(skill instanceof Skill)) {

//         // console.error(skill, '-> ', typeof skill, ' : is not an instance of our class Skill')
//         console.error(`${skill} -> ${typeof skill} : is not an instance of our class Skill`)

//         return {
//             errors: true,
//             message: `${skill} -> ${typeof skill} : is not an instance of our class Skill`
//         }
//     }

//     // //Creating our skill node parent
//     // const skillNode = document.createElement('div');
//     // skillNode.classList.add('skill');

//     // //Creating our skill text node
//     // const skillTextNode = document.createElement('p');
//     // skillTextNode.innerHTML = skill.title;

//     // //Adding to our skill node the fine paragraph containing our skill.title
//     // skillNode.appendChild(skillTextNode)

//     // --> 

//     const skillNode = `<div class="skill"><p>${skill.title}</p></div>`

//     return skillNode
// }

// const skillsRender = (skills) => {

//     //Type checking
//     //checking if the param `skill` is an instance of our Class Skill
//     if (!Array.isArray(skills)) {

//         // console.error(skill, '-> ', typeof skill, ' : is not an instance of our class Skill')
//         console.error(`${skills} -> ${typeof skills} : is not an array`)

//         return {
//             errors: true,
//             message: `${skill} -> ${typeof skill} : is not an instance of our class Skill`
//         }
//     }

//     const skillsNode = skills.map(skill => {
//         return createSkillNode(skill);
//     })

//     return skillsNode.join('')
// }

// import skills from './data/skills'

// const skillsParent = document.getElementById('#skills');
// console.log(skillsParent);
// // skillsParent.innerHTML = lol;

// const skillsNode = skillsRender(skills);
// skillsParent.innerHTML = skillsNode;




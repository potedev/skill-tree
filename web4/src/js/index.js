import studentsData from './data/students'
import skillsData from './data/skills'

import progresses from './data/progress'

console.log(progresses);

// console.log(skillsData);

const app = document.getElementById('app');

//On créé notre element titre
const title = document.createElement('h1')
title.classList.add('title')
title.innerHTML = 'Arbre de compétence'

//On l'ajoute dans notre app (noeud)
app.appendChild(title)


const renderSkills = (skills) => {


    const categories = skills.map(skill => skill.category)

    const uniqueCategories = []

    categories.forEach(category => {

        if (uniqueCategories.indexOf(category) === -1) {
            uniqueCategories.push(category);
        }
    })

    const skillsByCategories = uniqueCategories.map(category => {

        const skillsBycategory = skills.filter(skill => skill.category.id === category.id)

        return {
            title: category.title,
            description: category.description,
            skills: skillsBycategory
        }
    })

    skillsByCategories.forEach(skillByCategory => {
        app.innerHTML += `<h2 class="category">${skillByCategory.title}</h2>`

        skillByCategory.skills.forEach(skill => {

            let level = null

            progresses.forEach(progress => {
                if (progress.skill === skill) {
                    level = progress.level.number
                }
            })

            app.innerHTML += `<p class="skill">${skill.name} <strong class="level">${level ? level : 1}</strong></p>`
        })
    })
}

renderSkills(skillsData);



// const renderStudents = (students) => {
//     //J'itère sur le tableau étudiant pour créer un élément pour chaque valeur du tableau
//     students.forEach((student, index) => {
//         // console.log(`student : ${index} -> ${student.firstname}`);

//         //On est entrain de créer notre noeud
//         const studentEl = document.createElement('p')
//         studentEl.classList.add('student')
//         studentEl.innerHTML = (student.firstname)

//         //On ajoute à l'intérieur de notre app, chaque élément du tableau
//         app.appendChild(studentEl);
//     })
// }

// const renderSkills = (skills) => {

//     //On créé un nouveau tableau qui nous renvoie uniquement les category des compétences
//     let categories = skills.map(skill => skill.category)

//     let uniqueCategories = []

//     categories.forEach(category => {
//         //Si une catégorie n'est pas dans notre tableau, alors on la rajoute
//         // array.indexOf(value) renvoie -1 si un élément n'est pas dans un tableau
//         if (uniqueCategories.indexOf(category) === -1) {
//             uniqueCategories.push(category);
//         }
//     })

//     const skillsByCategories = uniqueCategories.map(category => {

//         const categorySkills = skills.filter(skill => skill.category.id === category.id)

//         return {
//             title: category.title,
//             skills: categorySkills
//         }
//     })

//     skillsByCategories.forEach(skillsByCategory => {
//         const categoryEl = document.createElement('h2')
//         categoryEl.classList.add('category')
//         categoryEl.innerHTML = skillsByCategory.title

//         app.appendChild(categoryEl)

//         skillsByCategory.skills.forEach(skill => {

//             let level = null

//             progresses.forEach(progress => {
//                 if (progress.skill === skill) {
//                     level = progress.level.number
//                 }
//             })

//             const skillEl = document.createElement('p')
//             skillEl.classList.add('skill')
//             skillEl.innerHTML = `- ${skill.name} : <strong class="level">${level ? level : '0'}</strong>`

//             app.appendChild(skillEl)
//         })
//     })
// }

// renderStudents(studentsData);
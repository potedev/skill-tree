import studentsData from './data/students'
import skillsData from './data/skills'

console.log(skillsData);

const app = document.getElementById('app');

//On créé notre element titre
const title = document.createElement('h1')
title.classList.add('title')
title.innerHTML = 'Arbre de compétence'

//On l'ajoute dans notre app (noeud)
app.appendChild(title)

const renderStudents = (students) => {
    //J'itère sur le tableau étudiant pour créer un élément pour chaque valeur du tableau
    students.forEach((student, index) => {
        // console.log(`student : ${index} -> ${student.firstname}`);

        //On est entrain de créer notre noeud
        const studentEl = document.createElement('p')
        studentEl.classList.add('student')
        studentEl.innerHTML = (student.firstname)

        console.log(studentEl);

        //On ajoute à l'intérieur de notre app, chaque élément du tableau
        app.appendChild(studentEl);
    })
}

renderStudents(studentsData);
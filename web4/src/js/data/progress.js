import { Progress } from '../entities/progress'

import students from './students'
import skills from './skills'
import levels from './level'

// students[0] -> Quentin
// skills[8] -> Skill {name:"skill1", descript:"...", category:{id:1,name:"activity 1"}}
// levels[2] -> Level {number:3, "Transposer"}

const QuentinProgress1 = new Progress(students[0], skills[0], levels[2])
const QuentinProgress2 = new Progress(students[0], skills[1], levels[0])
const QuentinProgress3 = new Progress(students[0], skills[2], levels[0])
const QuentinProgress4 = new Progress(students[0], skills[3], levels[1])

const quentinProgresses = []

quentinProgresses.push(QuentinProgress1, QuentinProgress2, QuentinProgress3, QuentinProgress4)

export default quentinProgresses
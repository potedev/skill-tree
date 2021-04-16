import Level from '../entities/level'

//Creating our levels
const level1 = new Level(1, 'Imiter')
const level2 = new Level(1, 'Adapter')
const level3 = new Level(1, 'Transposer')

const levels = []

levels.push(level1)
levels.push(level2)
levels.push(level3)

export default levels
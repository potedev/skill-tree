import { Level } from '../entities/level'

const level1 = new Level(1, "imiter");
const level2 = new Level(2, "adapter");
const level3 = new Level(3, "transposer");

const levels = []

levels.push(level1, level2, level3)

export default levels
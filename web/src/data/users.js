import User from '../entities/user'

const Quentin = new User('Quentin', 'Danneville');
const John = new User('John', 'Doe');
const Grace = new User('Grace', 'Hopper');

const users = []

users.push(Quentin)
users.push(John)
users.push(Grace)

export default users
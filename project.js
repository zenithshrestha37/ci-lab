// function getGreeting(name){
//     return "Hi " + name;
// }


// module.exports = getGreeting;

//////////////////
const { expect } = require("@jest/globals")
let colors = ['Red', 'Green', 'Blue']

module.exports = {
    stateAge: (age)=> {
        return ` I am ${age}`
    },
    addUser: (name, age) => {
        let user = {
            name,
            age
        }
        if (user.age >= 21) {
            return user
        } else {
            return 'User not old enough'
        }
    },
    addColor: (color) => {
        colors.push(color.toLowerCase())
        return colors
    }
}
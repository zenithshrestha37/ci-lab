// const getGreeting = require('./project');

// test('can create a basic greeting', () => {
//   expect(getGreeting('Sam')).toBe("Hi Sam");
// });
////////////////////////////////////////
const { test, expect } = require("@jest/globals");
const { stateAge, addUser, addColor } = require('./project')

test("Should return I am age {age}", () => {
    expect(stateAge(37)).toEqual(" I am 37")
} )

test("Should return the user obj or failed status", () => {
    expect(addUser('Joey', 21)).toEqual({name: 'Joey', age: 21})
    expect(addUser('Chandler', 15)).toEqual('User not old enough')
    
})

test ("Should add new color and return list of unique colors", () => {
    expect(addColor('pink')).toContain('pink')

})
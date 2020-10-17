// fireship.io tutorials:
//=======================
// JavaScript Pro Tips
// -------------------
// https://www.youtube.com/watch?v=Mus_vwhTCq0&t=620s
// 00:51 - Debugging with console.log
// 02:39 - Destructuring
// 03:59 - Template literals
// 06:07 - Spread syntax
// 08:19 - Loops
// 10:18 - async/await
// Beyond console.log - https://www.youtube.com/watch?v=L8CDt1J3DAw
// Async Await -https://www.youtube.com/watch?v=vn3tm0quoqE&feature=youtu.be

// Cypress - https://www.youtube.com/watch?v=7N63cMKosIE
// Build a Chatbot from Scratch - Dialogflow on Node.js - https://www.youtube.com/watch?v=0NXqwT3Y09E&t=8s
// Tensorflow - https://www.youtube.com/watch?v=Y_XM3Bu-4yc
// Fullstack Autocomplete Search with Algolia - https://www.youtube.com/watch?v=dTXzxSlhTDM

// 1. Objects
// ==========

// 1.1 In Dev Tools
// ----------------

// View all the properties on the prototype of Object
console.dir({})

// Look at the default values of the properties in an Object
const user = { name: 'Stuart', age: 48, address: { street: 'Friar St', town: 'Perth' } }
Object.getOwnPropertyDescriptors(user)

// Check if Object can be added to, changed or property deleted
Object.isSealed(user)
Object.isFrozen(user)

// Add a property to an Object
user.occupation = 'Developer'

// Delete a property from an Object
delete user.occupation

// Computed Object Properties
// const key = window.prompt('Set property name')
// const obj = { [key]: 1 }
// obj

// 1.2 In this file using Quokka
// -----------------------------

// Get an aray of the properties
const properties = Object.keys(user)
console.log(properties)

// Get the number of properties in an object
const numProperties = Object.keys(user).length
console.log(numProperties)

// Filter out a property using 'filter' and return as an array
const filteredArray = Object.keys(user).filter(key => key !== 'age')
console.log(filteredArray)

// Filter out a property using 'filter' and return as an Object
let filteredObject = {}
Object.keys(user).filter(key => key !== 'age').map(key => filteredObject[key] = user[key])
console.log(filteredObject)

// Put it in a function
function filterObject(object, property) {
  let filteredObject = {}
  Object.keys(object).filter(k => k !== property).map(key => (filteredObject[key] = object[key]))
  return filteredObject
}
// call that like:
console.log(filterObject(user, 'name'))

// Convert an Object to an Array using 'map' or 'entries'
const arrayOne = Object.keys(user).map(key => [key, user[key]])
console.log(arrayOne)
// or
const arrayTwo = Object.entries(user)
console.log(arrayTwo)

// Iterate over an object
Object.entries(user).forEach(([key, value]) => console.log(key, value))

// Check if property is in Object
const propertyExists1 = user.hasOwnProperty('name')
const propertyExists2 = user.hasOwnProperty('constructor')
const propertyExists3 = user.hasOwnProperty('toString')
const propertyExists = user.address.hasOwnProperty('street')
console.log(propertyExists)

// Merge 2 or more objects using spread
const defaultUser = { name: '', email: '', subscribed: true }
const actualUser = { name: 'Stuart', email: 'a@b.com' }
const merged = { ...defaultUser, ...actualUser }  // reads as "copy the properties of each object and spread them out into our 'merged' object"
console.log(merged)


// 2. Arrays
// =========

// 2.1 Copying arrays
// ------------------

// Pass by reference - a new array ISN'T created. newFruit just points to the same array in memory as fruits. The array sin't being copied.
const fruits = ['apples', 'bananas']
const newFruits = fruits
newFruits.push('cherry')    // you are mutating the original array
console.log(fruits)
console.log(newFruits)

// Shallow copy - use slice() to actually copy the original array
const fruitsTwo = ['apples', 'bananas']
const newFruitsTwo = fruitsTwo.slice()
newFruitsTwo.push('cherry')             // you are mutating the new array
console.log(fruitsTwo)
console.log(newFruitsTwo)

// Us the ES6 spread operator - the most powerful way to shallow copy an array
const fruitsThree = ['apples', 'bananas']
const newFruitsThree = [...fruitsThree, 'cherry']
console.log(fruitsThree)
console.log(newFruitsThree)



// Get random element from array
const randomInteger = Math.round(Math.random() * fruitsThree.length)
console.log(fruits[randomInteger])



// 2.2 Deleting Elements from Arrays
// ---------------------------------

// Remove values from array
// splice - removes the elements and returns them in an array. Changes the original array.
const nums = [48, 29, 30, 12, 78]
const removed = nums.splice(1, 3) // start at the second position and remove 3 elements
console.log(removed)
console.log(nums)

// slice - Returns a new array. Doesn't change the original array.
const numsTwo = [48, 29, 30, 12, 78]
const removedTwo = numsTwo.slice(1, 3) // return the elements between the second (1) and fourth (3) positions - not including the fourth position.
console.log(removedTwo)
console.log(numsTwo)



// Remove falsy values from array
// Falsy values are values which, when converted to a boolean, alway evaluate to false
// 5 falsy values in JS: null, undefined, 0, '', NaN
// these are all truthy: {} [] '0'

const temperatures = [72, 65, 4, undefined, 80, 0, NaN, '', null]
const validTemperatures = temperatures.filter(t => t)
console.log(validTemperatures)

// create a function to remove items from an array based on a passed in condition
function removeElements(array, condition) {
  return array.filter(condition)
    .map(e => {
      array.splice(array.indexOf(e), 1)
      return e
    })
}

const ints = [4, 5, 6]
const newArray = removeElements(ints, e => e > 5)
console.log(ints)
console.log(newArray)



// Find an object in an array based on a property
const people = [{ name: 'John' }, { name: 'Mary' }, { name: 'Joe' }]
const person = people.find(p => p.name == 'Mary')
const index = people.findIndex(p => p.name == 'Mary')
console.log(person)
console.log(index)

// Return the unique values in an array
const x = [1, 2, 2, 3]
const y = [...new Set(x)]
console.log(y)


const arr1 = ['fred', 'doug', 'joe', 'joe']
const arr2 = ['fred', 'doug', 'amy']

// Find the shared values between two arrays
const shared = arr1.filter(e => arr2.includes(e))
console.log(shared)

// Find the (unique) difference between two arrays
const diff = [...new Set(arr1)].filter(e => !arr2.includes(e))
console.log(diff)






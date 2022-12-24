// NOTE --> 
// ANYTHING & EVERYTHING IN JS ARE OBJECTS
// These objects are created at run-time

// Printing in JS
// console.log('Hello... welcome to main.js')
// console.warn('This is a Warning!')
// console.error('This is a Error!')

// The window is loading & the content of the HTMl does not appear until OK pressed for the alert
// alert('This is an Alert!')

// Data Types -> 1. Primitive DT (PDTs), 2. Non-Primitive DT (Non-PDTs)

// 1. Primitive DT (PDTs) - 5
// i.) number
// number = 108976576755.7865345675678
// n1 = 100
// n2 = 200

// console.log(number)
// console.log(typeof(number))

// // ii.) string
// str1 = 'This is String - 1'
// str2 = "This is String - 2"
// str3 = `This is String - 3`

// myStr = `The sum of ${n1} and ${n2} is ${n1 + n2}`
// myStr2 = 'The sum of ' + n1 + ' and ' + n2 + ' is ' + (n1 +n2)

// console.log(str1)
// console.log(str2)
// console.log(str3)
// console.log(myStr)
// console.log(myStr2)

// console.log(typeof(str1))
// console.log(typeof(str2))
// console.log(typeof(str3))
// console.log(typeof(myStr))


// iii.) boolean
// isCool = false
// isSunny = true

// console.log(isCool, isSunny)
// console.log(typeof(isCool))


// iv.) null
// variableOne = null
// console.log(variableOne)
// console.log( typeof(variableOne) )

// // variableOne = 'A new value of variableOne'
// // console.log(variableOne)
// // console.log( typeof(variableOne) )

// // v.) undefined
// variableTwo = undefined
// console.log(variableTwo)
// console.log( typeof(variableTwo) )


// --> CONDITIONAL STATEMENTS + SCOPES
// Internal Typecasting -> When the JS converts a value internally for further operations
// int(input())

// variableOne = 15
// variableTwo = "this is a string"
// if(typeof(variableOne) == 'number' && typeof(variableTwo) == 'number') {
//     if( variableOne > variableTwo ) {
//         console.log(`${variableOne} is greater than ${variableTwo}`)
//     } else if(variableOne == variableTwo) {
//         console.log(`${variableOne} equals ${variableTwo}`)
//     } else {
//         console.log(`${variableTwo} is greater than ${variableOne}`)
//     }
// } else {
//     console.log('Enter the correct number values of a and b')
// }

// when you use '==' then type is not compared; only the values are compared
// when you use '===' then type is also compared; along with the values are compared
// varOne = true
// varTwo = true
// if(varOne === varTwo) {
//     console.log('They are same')
// } else {
//     console.log('They are not same')
// }

// SCOPES
// let -> helps you create variable, which cannot be accessed out the given block
// var -> helps you create varaible, which can be accssed out the given block
// const -> helps you create variable, which cannot be accessed out the given block; you cannot just declare the variable and not initise; you should not re-initialise a const varible

// let a
// var b 
// a = 50
// console.log(a)
// a = 100
// console.log(a)
// // const PI = 400

// numOne = 50
// numTwo = 25

// if(numOne >= numTwo) {
//     // display the sum
//     const PI = 100
//     var sum = numOne + numTwo
//     console.log(sum)
//     console.log(PI)
// } else {
//     // display the difference
//     let diff = numTwo - numOne
//     print(diff)
// }

// console.log(sum)
// console.log(PI)

// 2. Non-Primitive DT (PDTs) - 4

// 1. Arrays <--> List --> Collection of objects where each object is assigned with an index value 

// Two ways to create an Array
// i.) using Array constructor
// const myArray = new Array(100, 200, 150, 40, 12)
// console.log(myArray)
// console.log( myArray[0] )

// // ii.) using the sumbol '[ ]'
// const myArr2 = [10, "string", false, null, undefined]
// console.log(myArr2)

// const newArray = [ [10, 20, 30], [40, 50, 60], [70, 80, 90] ]
// console.log( newArray )
// console.log( newArray[0][1] )


// Attributes & Methods from Array Class

// const ages = [ 12, 15, 9, 10, 14, 19, 21, 9, 4, 5, 30 ]

// 1. property -> length
// console.log(`The length of the array is ${ages.length}`)

// Methods -->

// i.) push(elt) -> add at the enf of the array
// const newLength = ages.push(45)
// console.log(ages)
// console.log(`The new length of the array is ${newLength}`)

// ii.) splice(index, deleteCount)
// console.log(ages)
// const deletedElts = ages.splice(5)
// console.log(ages)
// console.log(`Elements deleted are - ${deletedElts}`);

// const deletedArr = ages.splice(3, 1)
// console.log(ages)
// console.log(`The elements deleted are - ${deletedArr}`)

// const deletedArr = ages.splice(3, 3)
// console.log(ages)
// console.log(`The elements deleted are - ${deletedArr}`)

// [ 12, 15, 9, 10, 14, 19, 21, 9, 4, 5, 30 ]
// [ 12, 15, 9, 100, 200, 300, 400, 500, 9, 4, 5, 30 ]
// const deletedArr = ages.splice(3, 4, 100, 200, 300, 400, 500)
// [ 12, 15, 9, 100, 200, 300, 400, 500, 9, 4, 5, 30 ]
// console.log(ages)
// console.log(`The elements deleted are - ${deletedArr}`)

// iii.) indexOf(elt) --> returns the index of the elt in the array
// const ages = [ 12, 15, 10, 14, 19, 21, 9, 4, 5, 30 ]
// const anotherAges = [65, 48, 91, 67, 89, 76, 83]
// // const indexOfElt = ages.indexOf(9)
// // console.log(indexOfElt)

// // iv.) contact --> combine two or more arrays together & return the combined array
// const newAgesArr = ages.concat(anotherAges)
// const anotherNewArr = anotherAges.concat(ages)

// console.log(newAgesArr)
// console.log(anotherNewArr)

// console.log(newAgesArr)
// console.log(ages)
// console.log(anotherAges)

// HOLD :--> HIGHER ORDER ARRAY METHODS


// 2. JS OBJECTS --> {  } --> Store you values in the form of keys and values pair
// SYntax -> const objectName = { key: value }

// const user = {
//     name: 'Harry Potter',
//     age: 24,
//     hobbies: ['Doing Magic', 'Getting in Trouble', 'Fighting demons'],
//     email: 'harry.potter@hogwards.com',
//     canVote: true,
//     address: {
//         street: 'Street 4',
//         city: 'London',
//         country: 'United Kingdom'
//     }
// }
// console.log(user)

// // Access properties from JS Object (objectName.key)
// console.log(`The email of the user is - ${user.email}`)

// // Access the city of the user
// console.log(`The city of the user is - ${user.address.city}`)

// // Access the 2nd hobby of the user
// console.log(`The second hobby of the user is -> ${user.hobbies[1]}`)

// // Methods of Objects

// console.log( Object.keys(user) )
// console.log( Object.values(user) )

// console.log(`The keys of address are - ${Object.keys(user.address)}`)



// Array of Objects (AoO) :- [ {}, {}, {}, {}, {} ]

// const users = [
//     {
//         name: 'User One',
//         age: 20,
//         hobbies: ['Dancing', 'Playing DJ'],
//         email: 'userone@gmail.com',
//         canVote: true,
//         address: {
//             street: 'Street 4',
//             city: 'London',
//             country: 'United Kingdom'
//         }
//     },
//     {
//         name: 'User Two',
//         age: 17,
//         hobbies: ['Signing', 'Playing in Concerts'],
//         email: 'userTwo@gmail.com',
//         canVote: false,
//         address: {
//             street: 'Street 1',
//             city: 'California',
//             country: 'USA'
//         }
//     },
//     {
//         name: 'User Three',
//         age: 21,
//         hobbies: ['Coding', 'Attending Hackathons'],
//         email: 'userThre@gmail.com',
//         canVote: true,
//         address: {
//             street: 'Street 5',
//             city: 'Cupertino',
//             country: 'USA'
//         }
//     }
// ]

// Access AoO ->
// console.log(users)
// console.log(users[1].address.city)
// console.log(users[2].hobbies[1])

// JSON --> JS Object Notation --> JSON is a lightweight data-interchange format · JSON is plain text written in JavaScript object notation

// Convert an AoO to JSON --> stringify
// const apiData = JSON.stringify(users)
// console.log(apiData)

// // Convert JSON into AoO --> parse()
// const myAoO = JSON.parse(apiData)
// console.log(myAoO)
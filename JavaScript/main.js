// NOTE --> 

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
variableOne = 10
variableTwo = "12"
if( variableOne > variableTwo ) {
    console.log(`${variableOne} is greater than ${variableTwo}`)
} else if(variableOne == variableTwo) {
    console.log(`${variableOne} equals ${variableTwo}`)
} else {
    console.log(`${variableTwo} is greater than ${variableOne}`)
}

// 2. Non-Primitive DT (PDTs) - 4

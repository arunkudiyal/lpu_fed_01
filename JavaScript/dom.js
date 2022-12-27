// DOM --> Document Object Model
// DOM helps a FE developer to access and modify any element from the HTML document using the access methods like - getElementById(), getElementsByClassName(), getElementsByTagName(), etc.

// console.dir( document )

// console.log( document.all[8] )

// Methods using which you can access any elements from the HTML

// Access elements based on ID -> Single element returns
const myHeadingVariable = document.getElementById('my-heading')
console.log(myHeadingVariable)

// Access elements based on className --> [ ] of elements returns
const myElts = document.getElementsByClassName('my-class')
console.log(myElts)

// Access elts based on tagName --> [ ] of elements returns
// para -> 2
// h1 -> 2
// hr -> 3
const paraElts = document.getElementsByTagName('p')
const hrElts = document.getElementsByTagName('hr')
const h1Elts = document.getElementsByTagName('h1')
console.log(paraElts)
console.log(hrElts)
console.log(h1Elts)
// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const robin = {firstName: 'Robin', lastName:'Perricone', 'favorite food':'Pizza', bestFriend:{firstName: 'Robert', lastName:'Fornof', 'favorite food':'Rat Soup'}}

// 2. console.log best friend's firstName
// and your favorite food
console.log(robin.bestFriend.firstName, robin['favorite food'])

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacLine1 = ['-','O','-']
const ticTacLine2 = ['-','X','O']
const ticTacLine3 = ['X','-','X']
const board = [
  ticTacLine1,
  ticTacLine2,
  ticTacLine3]


// 4. After the array is created, 'O' claims the top right square.
// Update that value.
board[0][2] = 'O'


// 5. Log the grid to the console.
console.log(`  ${ticTacLine1}
  ${ticTacLine2}
  ${ticTacLine3}`)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
let myEmail = 'robinp31@uw.edu rabbbitcarrot@gmail.com ratsoup@gmail.com notemail';
let emailRegex = /\w+@\w+\.\w+/g
console.log(myEmail.match(emailRegex))


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const dateResult = new Date(assignmentDate) 

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
//var date = new Date(this.valueOf());
//date.setDate(date.getDate() + days)
const days = 7
const dueDate = new Date(dateResult.setDate(dateResult.getDate() + days))
console.log(dueDate,'dueDate')

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

let dueDateTime = `<time datetime="${dueDate.getFullYear()}-${dueDate.getMonth()+1}-${dueDate.getDate()}">${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}</time>`
// 10. log this value using console.log

console.log(dueDateTime)
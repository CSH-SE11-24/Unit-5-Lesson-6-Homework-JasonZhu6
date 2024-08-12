console.log("Script running...")
// Task 1: Define a function called `calculateArea` that takes length and width as parameters and returns the area (length * width)
function calculateArea(length, width) {
  return length * width;
}

// Call the `calculateArea` function with any two values. Console log the result to check it.
let area = calculateArea(3, 2)
console.log(area)

// Task 2: Define a function called `checkPassing` that takes in `student` (object) as a parameter and returns whether the `grade` attribute is greater than or equal to 63.
function checkPassing(student) {
  if (student.grade >= 63) {
    return true
  } else {
    return false
  }
}

// Define a `student` object that has name (string), class (string), and grade (number) attributes.
let student = {
  name: "Who",
  class: "SE11",
  grade: 94,
}

// Call the `checkPassing` function with the `student` object. Console log the result to check it.
let studentResult = checkPassing(student)
console.log(studentResult)

// Task 3: Define a function called `printIndex` that takes in `array` and `index` as parameters and console logs the element at that index of the array.
// Pink & Blue: Define `printIndex` as an ARROW function
printIndex = (array, index) => {
  console.log(array[index])
}

// Define an array called `favoriteFoods` and put at least 3 elements in
let favoriteFoods = ["first", "second", "third"]

// Call the `printIndex` function with `favoriteFoods` and any index
printIndex(favoriteFoods, 0)


// Extra Credit: Define an arrow function called `calculateTotal` that takes in `array` (array of numbers) as a parameter and returns the total of all the numbers
calculateTotal = (array) => {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total = total + array[i]
  }

  return total
}

// Define an array called `numbers` and put at least 3 numbers in
let numbers = [1, 2, 3]

// Call the `calculateTotal` function with `numbers` and any index
let total = calculateTotal(numbers)
console.log(total)
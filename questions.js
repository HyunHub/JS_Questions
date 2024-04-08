/**
 * @file questions.js
 * @description This file contains programming exercises for Week 1 of the
 *              Mobile Application Development course. It includes a series of
 *              JavaScript challenges that focus on fundamental programming
 *              concepts such as variables, operators, data types, and control
 *              structures.
 *
 *              Students are expected to write their code solutions within this
 *              file in the designated sections for each exercise. The provided
 *              exercises are designed to enhance understanding of basic JavaScript
 *              syntax and problem-solving skills within the context of web and
 *              mobile app development.
 *
 * @author Larry Wen
 * @created [23/02/2024]
 *
 * INSTRUCTIONS:
 * - Follow the prompts for each exercise and write your code in the specified
 *   areas.
 * - Run the provided tests after completing the exercises to check your work.
 * - Do not modify the structure of the file or the provided code snippets.
 * - Seek assistance if you encounter difficulty understanding the exercises or
 *   implementing the solutions.
 */

/**
 * Exercise 1:
 * Write a function named `getCircleArea` that takes a single argument `r`,
 * which represents the radius of a circle. The function should return the
 * area of the circle with the given radius.
 *
 * Area of a circle formula: A = πr^2
 * Use Math.PI for π and ensure you use the correct exponentiation operation.
 *
 * @param {number} r - The radius of the circle.
 * @return {number} The area of the circle.
 */

function getCircleArea(r) {
  // Your implementation here
  return Math.PI * r ** 2;
}

/**
 * Exercise 2:
 * Write a function named `greeting` that takes two parameters. The first parameter
 * is `name`, a string representing the name of the person to greet. The second parameter
 * is `time`, a number representing the hour of the day in 24-hour format limited to
 * the range of [9, 12] for the morning and [13, 17] (1 PM to 5 PM) for the afternoon.
 *
 * The function should return "Good morning, [name]!" if the time is between 9 and 12,
 * inclusive, and "Good afternoon, [name]!" if the time is between 13 and 17, inclusive.
 *
 * @param {string} name - The name of the person to greet.
 * @param {number} time - The hour of the day in 24-hour format.
 * @return {string} The greeting message.
 */

function greeting(name, time) {
  if (9 <= time && time <= 12) {
    return "Good morning, " + name + "!";
  } else if (13 <= time && time <= 17) {
    return "Good afternoon, " + name + "!";
  }
}

/**
 * Exercise 3:
 * Write a function named `checkValue` that takes a single parameter `val`.
 * The function should check if the input `val` is truthy, falsy, or nullish (null or undefined).
 *
 * - If `val` is nullish (null or undefined), return "Your input is a nullish value."
 * - If `val` is falsy (but not nullish), return "Your input is a falsy value."
 * - If `val` is truthy, return "Your input is a truthy value."
 *
 *
 * @param {any} val - The value to check.
 * @return {string} A message indicating whether the value is truthy, falsy, or nullish.
 */

function checkValue(val) {
  if ([0, 0.0, false, "", NaN].includes(val)) {
    return "Your input is a falsy value.";
  } else if (val === null || val === undefined) {
    return "Your input is a nullish value.";
  } else {
    return "Your input is a truthy value.";
  }
}

/**
 * Exercise 4:
 * Write a function named `wordLengths` that takes a single parameter `sentence`.
 * The function should return an array containing the lengths of each word in the given sentence.
 * Assume the sentence contains only letters and spaces (no digits, punctuation, or special characters).
 *
 * Example: "Hello My World" should return [5, 2, 5].
 *
 * @param {string} sentence - A sentence consisting of words separated by spaces.
 * @return {number[]} An array of numbers representing the length of each word in the sentence.
 */

function wordLengths(sentence) {
  const s = sentence.split(" ").filter(Boolean);
  lengthsArray = s.map((e) => e.length);
  return lengthsArray;
}

/**
 * Exercise 5:
 * Write a function named `capitalizeSentence` that takes a single parameter `sentence`.
 * The function should return a new string where the first letter of each word in the given
 * sentence is capitalized. Assume the sentence contains only letters and spaces (no digits,
 * punctuation, or special characters).
 *
 * Example: "hello my world" should return "Hello My World".
 *
 * @param {string} sentence - A sentence consisting of words separated by spaces.
 * @return {string} A new string with each word's first letter capitalized.
 */

function capitalizeSentence(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
}

/**
 * Exercise 6:
 * Write a function named `rotateArray` that takes two parameters. The first parameter
 * is `array`, an array of integers without any repeated values. The second parameter is
 * `numRotations`, a number representing how many times the array should be rotated.
 * A single rotation moves the last element of the array to the front.
 *
 * Example: rotateArray([1, 2, 3, 4], 1) should return [4, 1, 2, 3].
 *
 * @param {number[]} array - An array of integers.
 * @param {number} numRotations - The number of times the array should be rotated.
 * @return {number[]} The array after being rotated the specified number of times.
 */

function rotateArray(array, numRotations) {
  for (let i = 0; i < numRotations; i++) {
    let last = array.pop();
    array.unshift(last);
  }

  return array;
}

/**
 * Exercise 7:
 * Write a function named `animalClassify` that takes two parameters. The first parameter
 * is `type`, a string representing the type of the animal. The second parameter is `weight`,
 * a number representing the weight of the animal in kilograms.
 *
 * The function should return an object with two properties: `type` and `size`.
 * The `size` property is determined by the weight of the animal:
 * - Less than 5kg is considered "small".
 * - 5kg to less than 100kg is considered "big".
 * - 100kg or more is considered "huge".
 *
 * Example: animalClassify("cat", 1) should return {type: "cat", size: "small"}.
 *
 * @param {string} type - The type of the animal.
 * @param {number} weight - The weight of the animal in kilograms.
 * @return {object} An object with the properties `type` and `size`.
 */

function animalClassify(type, weight) {
  let size = "";
  if (weight <= 5) {
    size = "small";
  } else if (weight > 5 && weight < 100) {
    size = "big";
  } else {
    size = "huge";
  }
  const animal = {
    type: type,
    size: size,
  };

  return animal;
}

/**
 * Exercise 8:
 * Write a function named `describePerson` that takes a single parameter `person`.
 * The `person` parameter is an object with the following attributes: `name`, `age`, `gender`
 * (with values "m" or "f"), and an optional attribute `hobby`.
 *
 * The function should return a string describing the person. If the person has a hobby,
 * the return string should be formatted as:
 * "[name] is a [age]-year-old [man|woman]. (He|She) likes [hobby]!"
 *
 * If the person does not have a hobby attribute, the return string should be:
 * "[name] is a [age]-year-old [man|woman]. (He|She) has no hobbies."
 *
 * Ensure that the description matches the gender specified in the `gender` attribute.
 *
 * Example:
 * Input: {name: "John", age: 30, gender: "m", hobby: "reading"}
 * Output: "John is a 30-year-old man. He likes reading!"
 *
 * @param {object} person - An object representing a person.
 * @return {string} A string description of the person.
 */

function describePerson(person) {
  // let sentence = "";
  // let gender = "";
  // let g = "";
  // let hobby = "";

  // if (person.gender === "f") {
  //   gender = "woman";
  //   g = "She";
  // } else {
  //   gender = "man";
  //   g = "He";
  // }

  // if (person.hobby) {
  //   hobby = " likes " + person.hobby + "!";
  // } else {
  //   hobby = " has no hobbies.";
  // }
  // sentence =
  //   sentence +
  //   person.name +
  //   " is a " +
  //   person.age +
  //   "-year-old " +
  //   gender +
  //   ". " +
  //   g +
  //   hobby;

  // return sentence;

  let hobbyDescription = person.hobby
    ? `likes ${person.hobby}!`
    : "has no hobbies.";

  return `${person.name} is a ${person.age}-year-old ${
    person.gender === "f" ? "woman" : "man"
  }. ${person.gender === "f" ? "She" : "He"} ${hobbyDescription}`;
}

/**
 * Exercise 9:
 * Write a function named `analyzeMarks` that takes a single parameter `marks`.
 * The `marks` parameter is an object where the keys represent subject names (e.g., "Math", "English")
 * and the values are their corresponding marks.
 *
 * The function should return an array containing three numbers:
 * - The lowest mark.
 * - The highest mark.
 * - The average mark, rounded to two decimal places.
 *
 * Example:
 * Input: { Math: 90, English: 85, Science: 92 }
 * Output: [85, 92, 89.00]
 *
 * @param {object} marks - An object representing subjects and their marks.
 * @return {number[]} An array with the lowest mark, highest mark, and average mark.
 */

function analyzeMarks(marks) {
  let min = 100;
  let max = 0;
  let count = 0;
  let total = 0;

  for (const subject in marks) {
    const mark = marks[subject];

    min = Math.min(min, mark);
    max = Math.max(max, mark);

    total += mark;
    count++;
  }

  if (count === 0) {
    // Handle the case when the object is empty
    return [0, 0, 0];
  }

  const avg = total / count;

  return [min, max, Number(avg.toFixed(2))];
}

/**
 * Exercise 10:
 * Write a function named `check` that takes two arguments: an array of integers `arr`,
 * and a single integer `target`. The function should return an array of two integers
 * that represent the indices of the two numbers in `arr` which add up to `target`.
 *
 * The function should assume that there is exactly one solution, and it should not
 * use the same element twice. The return value should be the pair of indices in ascending order.
 *
 * Example:
 * If `arr` is [11, 12, 13, 14], and `target` is 24, then the function should return [0, 2]
 * because `arr[0] + arr[2]` equals `24`.
 *
 * @param {number[]} arr - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} An array containing the pair of indices whose values add up to `target`.
 */

function check(arr, target) {
  let resultArr = [];
  let found = false;

  for (let i = 0; i < arr.length && !found; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (target - arr[i] - arr[j] === 0) {
        resultArr = [i, j];
        found = true;
        break;
      }
    }
  }

  return resultArr;
}

// Export the function for testing
module.exports = {
  getCircleArea,
  greeting,
  checkValue,
  wordLengths,
  capitalizeSentence,
  rotateArray,
  animalClassify,
  describePerson,
  analyzeMarks,
  check,
};

/**
 * @file questions.js
 * @description This file contains programming exercises for Week 2 of the
 *              Mobile Application Development course. It includes a series of
 *              JavaScript challenges that focus functions, closures etc.
 *
 *              Students are expected to write their code solutions within this
 *              file in the designated sections for each exercise. The provided
 *              exercises are designed to enhance understanding of basic JavaScript
 *              syntax and problem-solving skills within the context of web and
 *              mobile app development.
 *
 * @author Larry Wen
 * @created [26/02/2024]
 *
 * INSTRUCTIONS:
 * - Follow the prompts for each exercise and write your code in the specified
 *   areas.
 * - Run the provided tests after completing the exercises to check your work.
 * - Do not modify the structure of the file or the provided code snippets.
 * - Seek assistance if you encounter difficulty understanding the exercises or
 *   implementing the solutions.
 */

/**
 * Exercise 1: Account Generator with Closure
 *
 * Implement a function named `accountGenerator` that utilizes closures to manage account balances.
 * The function should accept two parameters:
 * - `accountName` (String): The name of the account.
 * - `initBalance` (Number): The initial balance of the account.
 *
 * The `accountGenerator` function should return a new function.
 * The new function should take one parameter:
 * - `amount` (Number): The amount to deposit into the account.
 *
 * Each call to the new function should return a string in the following format:
 * "You deposited [amount] to your [accountName] and the current balance is [newBalance]."
 *
 * Ensure that the new function correctly updates and retains the account's balance across multiple invocations.
 *
 * Example usage:
 * const myAccount = accountGenerator('Saving', 100);
 * console.log(myAccount(50)); // "You deposited 50 to your Saving Account and the current balance is 150."
 */

function accountGenerator(accountName, initBalance) {
  let balance = initBalance;

  return function (amount) {
    balance += amount;
    return `You deposited ${amount} to your ${accountName} Account and the current balance is ${balance}.`;
  };
}

/**
 * Exercise 2: Distributing Tips
 *
 * Write a function named `distributeTips` that helps Tom distribute his tips between food and drink.
 * The function should accept an arbitrary number of arguments, each representing the tip amounts
 * Tom received.
 *
 * Tom alternates the allocation of tips between food and drink, starting with food.
 * The function should return an object with two properties: `food` and `drink`, representing the
 * total tips allocated to each.
 *
 * Example:
 * distributeTips(1, 2, 3) should return { food: 4, drink: 2 }.
 * The first tip (1) goes to food, the second tip (2) goes to drink, and the third tip (3) goes back to food.
 *
 * @param {...args} tips - An arbitrary number of tip amounts Tom received.
 * @return {object} An object with the total tips for `food` and `drink`.
 */

function distributeTips(...args) {
  let food = 0;
  let drink = 0;
  for (i = 0; i < args.length; i++) {
    if (i % 2 == 0) {
      food += args[i];
    } else {
      drink += args[i];
    }
  }

  return { food, drink };
}

/**
 * Exercise 3: Customizable Greeting Generator with Closure
 *
 * Implement a function named `greetingGenerator` that uses closures and default parameters
 * to create personalized greeting functions. This function should accept one optional parameter:
 * - `defaultGreeting` (String): The default greeting to be used when no specific greeting is provided.
 *   This parameter should have a default value of "Hello".
 *
 * The `greetingGenerator` function should return a new function that creates the greeting message.
 * This returned function should accept two parameters:
 * - `name` (String): The name of the person to greet.
 * - `greeting` (String): An optional greeting phrase that overrides the `defaultGreeting` if provided.
 *
 * The inner function should use the `defaultGreeting` from the closure scope if no `greeting` is given.
 *
 * Example:
 * const casualGreet = greetingGenerator();
 * console.log(casualGreet('Alice')); // "Hello, Alice!"
 *
 * const formalGreet = greetingGenerator('Good day');
 * console.log(formalGreet('Bob', 'Salutations')); // "Salutations, Bob!"
 * console.log(formalGreet('Charlie')); // "Good day, Charlie!"
 *
 * @param {string} [defaultGreeting="Hello"] - The default greeting phrase.
 * @return {Function} A new function that takes a name and an optional greeting to create a greeting message.
 */

function greetingGenerator(defaultGreeting = "Hello") {
  return function (name, greeting) {
    greeting = greeting || defaultGreeting;
    return `${greeting}, ${name}!`;
  };
}

/**
 * Exercise 4: Merge Arrays and Extract Elements
 *
 * Write a function named `mergeAndExtract` that takes two arrays as arguments and performs the following tasks:
 * - Merges both arrays into one using the spread operator.
 * - Uses destructuring to extract the first two elements and the remaining elements of the merged array.
 * - Returns an object with three properties: `first`, `second`, and `remaining`. The `first` and `second` properties
 *   should hold the first two elements of the merged array respectively, while the `remaining` property should be an
 *   array holding the rest of the elements.
 *
 * Example:
 * If the input arrays are [1, 2] and [3, 4, 5, 6], the function should return:
 * { first: 1, second: 2, remaining: [3, 4, 5, 6] }
 *
 * @param {Array} array1 - The first array to merge.
 * @param {Array} array2 - The second array to merge.
 * @return {Object} An object with properties `first`, `second`, and `remaining`.
 */

function mergeAndExtract(array1, array2) {
  const [first, second, ...remaining] = [...array1, ...array2];

  const result = {
    first: first,
    second: second,
    remaining: remaining,
  };

  return result;
}

/**
 * Exercise 5: Alternating Harmonic Series Calculation
 *
 * Implement a function named `calculateAlternatingHarmonic` that computes the sum of the
 * first n terms of the alternating harmonic series. The series is defined as:
 * 1 - 1/2 + 1/3 - 1/4 + ... +/- 1/n
 *
 * The function should use recursion to calculate the series sum, with a strong emphasis on
 * utilizing tail recursion for optimization.
 *
 * Parameters:
 * - `n` (Number): A positive integer representing the number of terms in the series to sum.
 *
 * Returns:
 * - The sum of the first n terms of the alternating harmonic series as a Number.
 *
 * Example:
 * calculateAlternatingHarmonic(4) should return 0.5833333333333333,
 * as the calculation is 1 - 1/2 + 1/3 - 1/4.
 *
 * @param {number} n - The number of terms to include in the sum.
 * @param {number} accumulator - The accumulator for tail recursion, initial call should pass 0.
 * @param {number} index - The current index for tail recursion, initial call should pass 1.
 * @return {number} The sum of the alternating harmonic series up to n terms.
 */

function calculateAlternatingHarmonic(n, accumulator = 0, index = 1) {
  if (index > n) {
    return accumulator;
  }

  if (index % 2 === 0) {
    accumulator -= 1 / index;
  } else {
    accumulator += 1 / index;
  }

  return calculateAlternatingHarmonic(n, accumulator, index + 1);
}

// Export the function for testing
module.exports = {
  accountGenerator,
  distributeTips,
  greetingGenerator,
  mergeAndExtract,
  calculateAlternatingHarmonic,
};

/**
 * @file questions.js
 * @description This file contains programming exercises for Week 3 of the
 *              Mobile Application Development course. It includes a series of
 *              JavaScript challenges that focus array functions etc.
 *
 *              Students are expected to write their code solutions within this
 *              file in the designated sections for each exercise. The provided
 *              exercises are designed to enhance understanding of basic JavaScript
 *              syntax and problem-solving skills within the context of web and
 *              mobile app development.
 *
 * @author Larry Wen
 * @created [01/03/2024]
 *
 * INSTRUCTIONS:
 * - Follow the prompts for each exercise and write your code in the specified
 *   areas.
 * - Run the provided tests after completing the exercises to check your work.
 * - Do not modify the structure of the file or the provided code snippets.
 * - Seek assistance if you encounter difficulty understanding the exercises or
 *   implementing the solutions.
 */
/**
 * Exercise 1: Filters out negative numbers from an array.
 * @param {number[]} numbers - The array of numbers to filter.
 * @return {number[]} A new array containing only positive numbers.
 */
function filterNegativeNumbers(numbers) {
  // Your implementation here

  return numbers.filter((number) => number >= 0);
}

/**
 * Exercise 2: Doubling Numbers Divisible by Three
 *
 * Objective:
 * Practice using array methods to identify and transform elements within an array.
 * This exercise focuses on processing numbers in an array to find those divisible by three
 * and then doubling those numbers.
 *
 * Task Description:
 * Write a function named `doubleDivisibleByThree`. This function takes an array of numbers as input,
 * filters out all numbers that are divisible by three, and returns a new array with those numbers doubled.
 *
 * @param {number[]} numbers - An array of numbers to be processed.
 * @return {number[]} A new array containing the numbers divisible by three doubled.
 */
function doubleDivisibleByThree(numbers) {
  return numbers
    .filter((number) => number % 3 === 0)
    .map((number) => number * 2);
}

/**
 * Exercise 3: Selecting High-Performing Students with a Specific Hobby
 *
 * Objective:
 * Practice advanced array manipulation techniques involving filtering, mapping, and sorting.
 * This exercise focuses on processing an array of student objects based on GPA and hobbies,
 * then transforming the output.
 *
 * Task Description:
 * Write a function named `selectHighPerformingStudents`. This function takes an array of student objects as input.
 * Each student object has the following properties:
 * - id (integer): A unique identifier for the student.
 * - name (string): The student's name.
 * - email (string): The student's email.
 * - GPA (number): The student's GPA, ranging from 1 to 7.
 * - hobbies (array of strings): A list of the student's hobbies.
 *
 * The function should:
 * - Filter students who have a GPA greater than or equal to 5 and have 'coding' as one of their hobbies.
 * - Transform the filtered list to include only the student's name and email.
 * - Sort the resulting array alphabetically by the student's name.
 *
 * @param {Object[]} students - An array of student objects.
 * @return {Object[]} An array of objects containing the name and email of qualifying students, sorted by name.
 */
function selectHighPerformingStudents(students) {
  return students
    .filter((student) => student.GPA >= 5 && student.hobbies.includes("coding"))
    .map((student) => ({ name: student.name, email: student.email }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Exercise 4: Aggregating Student Data with `reduce()`
 *
 * Objective:
 * Enhance your skills in using the `reduce()` method for complex data aggregation from an array of objects.
 * This exercise involves calculating statistics from a dataset of student objects, focusing on total count,
 * average GPA, and details about students interested in coding.
 *
 * Task Description:
 * Write a function named `aggregateStudentData` that processes an array of student objects. Each object includes
 * the following properties: `id` (integer), `name` (string), `email` (string), `GPA` (number, from 1 to 7),
 * and `hobbies` (array of strings).
 *
 * The function should return an object with these properties:
 * - `studentNum`: Total number of students
 * - `studentAvgGPA`: Average GPA of all students, rounded to two decimal places
 * - `codingStudentNum`: Number of students who list 'coding' as a hobby
 * - `codingStudentGPA`: Average GPA of students who list 'coding' as a hobby, rounded to two decimal places
 *
 * Implement this function using the `reduce()` method to aggregate the data effectively.
 *
 * @param {Object[]} students - An array of student objects.
 * @return {Object} An object containing aggregated student data.
 */
function aggregateStudentData(students) {
  const studentNum = students.length;
  const studentAvgGPA =
    studentNum > 0
      ? students.reduce(
          (accumulator, currentValue) => accumulator + currentValue.GPA,
          0
        ) / studentNum
      : 0;
  const codingStudent = students.filter((student) =>
    student.hobbies.includes("coding")
  );
  const codingStudentNum = codingStudent.length;
  const codingStudentGPA =
    codingStudentNum > 0
      ? codingStudent.reduce(
          (accumulator, currentValue) => accumulator + currentValue.GPA,
          0
        ) / codingStudentNum
      : 0;

  return {
    studentNum,
    studentAvgGPA: Math.round(studentAvgGPA * 100) / 100,
    codingStudentNum,
    codingStudentGPA: Math.round(codingStudentGPA * 100) / 100,
  };
}

/**
 * Exercise 5: Swapping Between Sentence and CamelCase Forms
 *
 * Objective:
 * Enhance your string manipulation skills in JavaScript by converting between sentence form and camelCase form.
 * This exercise will challenge you to implement a function that can detect the form of a given string and convert it to the other form.
 *
 * Task Description:
 * Write a function named `swapForm` that processes a string input. The function should behave as follows:
 * - If the input string is in sentence form (i.e., contains spaces), convert it to camelCase. For example,
 *   "open a bank account" should be converted to "openABankAccount".
 * - If the input string is a single word, assumed to be in camelCase, convert it back to a sentence in all lower cases.
 *   For example, "openABankAccount" would be converted to "open a bank account".
 *
 * Note: You may assume that sentence inputs will be all lower case and camelCase inputs will start with a lowercase letter followed by mixed case.
 *
 * @param {string} input - A string in either sentence form or camelCase form.
 * @return {string} The converted string, either in camelCase or sentence form.
 */
function swapForm(input) {
  if (input.includes(" ")) {
    const words = input.split(" ");
    const camelCase = words.map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    );
    return camelCase.join("");
  } else {
    let sentence = "";
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      if (char === char.toUpperCase()) {
        sentence += " " + char.toLowerCase();
      } else {
        sentence += char;
      }
    }

    return sentence.trim();
  }
}

// Export the function for testing with Jest
module.exports = {
  filterNegativeNumbers,
  doubleDivisibleByThree,
  selectHighPerformingStudents,
  aggregateStudentData,
  swapForm,
};

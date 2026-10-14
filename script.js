// Print Numbers in Recursion

function printNumbers(Lrange, Urange) {
  if (Lrange > Urange) return;

  console.log("Assending", Lrange); // Seedhy numbers print hogy

  printNumbers(Lrange + 1, Urange);

  console.log("Decending", Lrange); // olty numbers orint hogy
}

printNumbers(1, 5);

// Add numbers doing for loop

function addNumbers(array) {
  let total = 0;

  for (let i of array) {
    total += i;
  }

  return total;
}

console.log("Total (loop)", addNumbers([1, 2, 3, 4, 5]));

// Add numbers doing for Recursion

function addNumbers2(array) {
  let total = 0;

  if (array.length === 0) return 0;

  total = array[0] + addNumbers2(array.slice(1));

  return total;
}

console.log("Total (Recursion)", addNumbers2([1, 2, 3, 4, 5]));

// Reverse String using loop

function reverseString(letter) {
  let result = "";

  for (let character of letter) {
    result = character + result;
  }

  return result;
}

console.log("Reverse String (loop)", reverseString("Hello"));

// Reverse String using Recursion

function reverseString2(letter) {
  if (letter.length <= 1) return letter;

  return reverseString2(letter.slice(1)) + letter[0];
}

console.log(
  "Reverse String (Recursion)",
  reverseString2("Hashir Dilmurad Zai"),
);

// Factorial using loop

function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

console.log("Factorial (loop)", factorial(10));

// Factorial using Recursion

function factoral2(number) {
  if (number === 0 || number === 1) return 1;

  return number * factoral2(number - 1);
}

console.log("Factorial (Recursion)", factoral2(10));

// Generate Parentheses using Recursion

const generateParenthesis = function (n) {
  let result = [];
  function backtrack(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }
  backtrack("", 0, 0);
  return result;
};

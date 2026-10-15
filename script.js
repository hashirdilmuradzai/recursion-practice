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

// Generate Parentheses using Recursion (LeetCode)

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

console.log("Generate Parentheses", generateParenthesis(5));

// Letter Combinations of a Phone Number (LeetCode)

const letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    for (let char of phoneMap[digits[index]]) {
      backtrack(index + 1, current + char);
    }
  }
  backtrack(0, "");
  return result;
};

// console.log("Letter Combinations of a Phone Number", letterCombinations(23));

// Combination Sum (LeetCode)

const combinationSum = function (candidates, target) {
  let result = [];

  function backtrack(start, current, total) {
    if (total === target) {
      result.push([...current]);
      return;
    }

    if (total > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);

      backtrack(i, current, total + candidates[i]);

      current.pop();
    }
  }

  backtrack(0, [], 0);

  return result;
};

console.log("Combination Sum", combinationSum([2, 4, 6, 7, 3, 4], 79));

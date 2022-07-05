function divideByThree(num) {
  return num / 3;
}

function averageOfTwo(num1, num2) {
  return (num1 + num2) / 2;
}

function averageOfFour(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

function doubler(nums) {
  return nums.map((num) => num * 2);
}

function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function wordWithinArray(word, arr) {
  return arr.includes(word);
}

function echo(str) {
  /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
  return `${str.toUpperCase()} ... ${str} ... ${str.toLowerCase()}`;
}

function fizzBuzz(max) {
  /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
  let arr = [];
  for (let i = 1; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    } else if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

function hello(name) {
  /* Takes in a string name and returns a string saying "Hello, " to that name. */
  return "Hello, " + name;
}

function goodbye(name) {
  /* Takes in a string name and returns a string saying "Bye, " to that name. */
  return "Bye, " + name;
}

function isFive(num) {
  /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
  if (num === 5) {
    return true;
  }
  return false;
}

function isOdd(num) {
  /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

function isSubString(searchString, subString) {
  /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
  let search = searchString.toLowerCase();
  let sub = subString.toLowerCase();
  return search.includes(sub);
}

function aCounter(word) {
  /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (char === "a" || char === "A") {
      count += 1;
    }
  }
  return count;
}

module.exports = {
  divideByThree,
  averageOfTwo,
  averageOfFour,
  doubler,
  combineArrays,
  wordWithinArray,
  echo,
  fizzBuzz,
  hello,
  goodbye,
  isFive,
  isOdd,
  isSubString,
  aCounter,
};

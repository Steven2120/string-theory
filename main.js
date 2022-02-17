/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let placeHolder = "";
  let x = "x";
  for (let i = 0; i < str.length; i++) {
    placeHolder += x;
  }
  return placeHolder;
}

function yellingChars(str) {
  let excl = "!";
  let solution = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    solution = solution + char + excl;
  }
  return solution;
}

function indexedChars(str) {
  let solution = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = i;

    solution += index + char;
  }
  return solution;
}

function numberedChars(str) {
  let solution = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = `(${i + 1})`;
    solution += index + char;
  }
  return solution;
}

function exclaim(str) {
  let solution = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "." || char === "?") {
      solution += "!";
    } else {
      solution += char;
    }
  }
  return solution;
}

function repeatIt(str, n) {
  let solution = "";

  for (let i = 0; i < n; i++) {
    solution += str;
  }
  return solution;
}

function truncate(str) {
  let solution = "";
  let ellipsis = "...";

  for (let i = 0; i < str.length; i++) {
    if (str.length < 18) return (solution = str);
    if (i === 15) {
      solution += ellipsis;
      break;
    } else {
      solution += str[i];
    }
  }
  return solution;
}

function ciEmailify(fullName) {
  let solution = "";
  loweredName = fullName.toLowerCase();

  for (let i = 0; i < loweredName.length; i++) {
    let char = loweredName[i];
    if (char === " ") {
      solution += ".";
    } else {
      solution += char;
    }
  }
  return `${solution}@codeimmersives.com`;
}

function reverse(str) {
  let solution = "";

  for (let i = str.length - 1; i >= 0; i--) {
    solution += str[i];
  }
  return solution;
}

function onlyVowels(str) {
  let result9 = "";
  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/i.test(str[i])) {
      result9 += str[i];
    }
  }
  return result9;
}

function crazyCase(str) {
  let solution = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let even = i % 2 === 0;
    let odd = i % 2 > 0;

    if (odd) {
      solution += char.toUpperCase();
    } else if (even) {
      solution += char.toLowerCase();
    }
  }
  return solution;
}

function titleCase(str) {
  let solution = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (i === 0) {
      solution += char.toUpperCase();
    } else if (str[i - 1] === " ") {
      solution += char.toUpperCase();
    } else {
      solution += char.toLowerCase();
    }
  }
  return solution;
}

function camelCase(str) {
  let solution = "";
  let newStr = str.toLowerCase();

  for (let i = 0; i < newStr.length; i++) {
    let char = newStr[i];
    if (newStr[i - 1] === " ") {
      solution += char.toUpperCase();
    } else if (char === " ") {
      solution += "";
    } else {
      solution += char;
    }
  }
  return solution;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let solution = "";
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === " ") {
      counter += 0;
      solution += char;
    } else if (counter % 2 > 0 || i === 0) {
      solution += char.toLowerCase();
      counter++;
    } else if (counter % 2 === 0) {
      solution += char.toUpperCase();
      counter++;
    }
  }
  return solution;
}
/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === "undefined") {
  xify = undefined;
}

if (typeof smilify === "undefined") {
  smilify = undefined;
}

if (typeof yellingChars === "undefined") {
  yellingChars = undefined;
}

if (typeof numberedChars === "undefined") {
  numberedChars = undefined;
}

if (typeof indexedChars === "undefined") {
  indexedChars = undefined;
}

if (typeof exclaim === "undefined") {
  exclaim = undefined;
}

if (typeof repeatIt === "undefined") {
  repeatIt = undefined;
}

if (typeof truncate === "undefined") {
  truncate = undefined;
}

if (typeof ciEmailify === "undefined") {
  ciEmailify = undefined;
}

if (typeof reverse === "undefined") {
  reverse = undefined;
}

if (typeof onlyVowels === "undefined") {
  onlyVowels = undefined;
}

if (typeof crazyCase === "undefined") {
  crazyCase = undefined;
}

if (typeof titleCase === "undefined") {
  titleCase = undefined;
}

if (typeof camelCase === "undefined") {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === "undefined") {
  crazyCase2ReturnOfCrazyCase = undefined;
}

module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
};

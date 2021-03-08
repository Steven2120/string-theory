/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += "x";
  }
  return result;
}

function yellingChars(str) {
  let result1 = "";
  for (let i = 0; i < str.length; i++) {
    result1 += str[i];
    result1 += "!";
  }
  return result1;
}

function indexedChars(str) {
  let result2 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[0]) {
    result2 += 0;
    result2 += str[i];
  } else {
    result2 += i;
    result2 += str[i];
    }
  }
  return result2;
}

function numberedChars(str) {
  let result3 = "";
  for (let i = 0; i < str.length; i++) {
    result3 += `(${i + 1})` + str[i];
  }
  return result3;
}

function exclaim(str) {
  let result4 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?" || str[i] === ".") {
      result4 += "!";
    } else {
      result4 += str[i];
    }
  }
  return result4;
}

function repeatIt(str, n) {
  let result5 = "";
  for (let i = 0; i < n; i++) {
    result5 += str;
  }
  return result5;
}

function truncate(str) {
  let result6 = "";
  for (let i = 0; i < str.length; i++) {
    if (str.length < 18) {
      return str;
    }
    if (i < 15) {
      result6 += str[i];
    }
  }
  return result6 + "...";
}

function ciEmailify(fullName) {
  let result7 = "";
  for (let i = 0; i < fullName.length; i++) {
    if (fullName[i] === " ") {
      result7 += ".";
    } else {
      result7 += fullName[i];
    }
  }
  return result7.toLowerCase() + "@codeimmersives.com";
}

function reverse(str) {
  let result8 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result8 += str[i];
  }
  return result8;
}

function onlyVowels(str) {
  let result9 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
      result9 += str[i];
    }
  }
  return result9;
}

function crazyCase(str) {
  let result10 = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result10 += str[i].toLowerCase();
    } else if (i % 2 !== 0) {
      result10 += str[i].toUpperCase();
    }
  }
  return result10;
}

function titleCase(str) {
  let result11 = str[0].toUpperCase();
  for (let i = 1; i <= str.length - 1; i++) {
    let currChar, prevChar = str[i - 1];
    if (prevChar && prevChar == " ") {
      currChar = str[i].toUpperCase();
    } else {
      currChar = str[i];
    }
    result11 += currChar;
  }
  return result11;
}

function camelCase(str) {
  str.toLowerCase()
  let result12 = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      result12 += str[i].toLowerCase();
    }
    else if (str[i] !== " ") {
      result12 += str[i];
    } 
  }
  return result12;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let result13 = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result13 += str[i].toLowerCase();
    } else if (i % 2 !== 0) {
      result13 += str[i].toUpperCase();
    }
  }
  return result13;
}







 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
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
}

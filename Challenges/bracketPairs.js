// Given a string of brackets, check if each bracket has a pair.
// Ex. '()()' returns true
// Ex. '())' returns false

var hasPair = (str) => {
    if (str.length === 0) {
      return true;
    }
    else if (str.length === 1) {
      return false;
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        str = str.slice(0,i) + str.slice(i+1);
        break;
      }
    }
    for (let j = 0; j < str.length; j++) {
      if (str[j] === ')') {
        str = str.slice(0,j) + str.slice(j + 1)
        break;
      }
    }
    return hasPair(str);
  }
  
  console.log(hasPair('()())'));
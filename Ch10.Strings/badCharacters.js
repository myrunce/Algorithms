// Given two strings, the second string contains characters that must be
// removed from the first. Return string formed by removing any instances
// of those characters from the first string.

var badCharacters = (str1, str2) => {
    let toRemove = str2.split('');
    let newStr = str1;
    let remove = (str, char) => {
      for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
          newStr = str.slice(0,i) + str.slice(i+1);
          remove(newStr, char);
        }
      }
    }
    for (let j = 0; j < toRemove.length; j++) {
      remove(newStr, toRemove[j]);
    }
    return newStr;
  }
  
  console.log(badCharacters('hello', 'lo'));
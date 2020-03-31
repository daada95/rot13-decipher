function rot13(str) {
// first we create a regex to match only uppercase letters and create an empty array to have our deciphered letters there
 let regex = /[A-Z]/;
 let deciphered = [];

// then we iterate through our input string, testing it with regex
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str.charAt(i))) {
// if true - we check if character code minus 13 is higher or equal to 65, if it's true - we proceed accordingly
      if (str.charCodeAt(i) - 13 >= 65) {
      let charCode = str.charCodeAt(i) - 13;
      deciphered.push(String.fromCharCode(charCode));
      }
// if not true - we proceed in another way to get target character code right
      else if (str.charCodeAt(i) - 13 < 65) {
      let charCode = 90 - (13 - (str.charCodeAt(i) - 64));
      deciphered.push(String.fromCharCode(charCode));
      }
// if character is not a letter - we just push it without any conversion (special signs, numbers, etc.)
    } else {
      deciphered.push(str.charAt(i));
    }
  }
// finally, we join and return our deciphered message
return deciphered.join("");
}

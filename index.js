function isPalindrome(word) {
  // Write your algorithm here

  for(let i=0; i < (word.length)/2; i++){ 
    if(word[i] === word[word.length-i-1]){ 
      return true; 
    } else 
      return false; 
  }
}




/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  the function should loop through the letter in the word and if 
  the first letter matches the last letter, then move on to the second
  letter and the second to last letter for the lengeth of the work

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

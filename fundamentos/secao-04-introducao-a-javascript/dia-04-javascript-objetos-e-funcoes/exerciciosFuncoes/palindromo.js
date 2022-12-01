function verificaPalindrome(word) {

  let splitWord = word.split("");
  let reverseWord = splitWord.reverse();
  let newWord = reverseWord.join("");

  return newWord === word
}

console.log(verificaPalindrome("arara"))
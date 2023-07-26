function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, "");
  const len = cleanedStr.length;

  for (let i = 0; i < len / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function checkPalindrome() {
  const inputText = document.getElementById("inputText").value;
  const resultElement = document.getElementById("result");

  if (inputText.trim().length === 0) {
    resultElement.textContent = "Please enter a word or phrase.";
    return;
  }

  if (isPalindrome(inputText)) {
    resultElement.textContent = `"${inputText}" is a palindrome.`;
  } else {
    resultElement.textContent = `"${inputText}" is not a palindrome.`;
  }
}

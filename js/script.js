let displayBtn = document.querySelector("#displayBtn");
let clearText = document.querySelector("#clear-text");

clearText.addEventListener("click", () => {
  document.querySelector("#vowel").value = "";
});
let counter;
function vowelCounter(str) {
  counter = 0;
  let storeVowels = "";
  const charArr = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char = 0; char < charArr.length; char++) {
    if (vowels.includes(charArr[char])) {
      counter++;
      storeVowels += charArr[char];
    }
  }
  vowelsCount.innerHTML = counter;
  displayVowels.innerHTML = storeVowels;
}
displayBtn.addEventListener("click", (e) => {
  let input = document.querySelector("#vowel").value;
  let vowelsCount = document.querySelector("#vowelsCount");
  let displayVowels = document.querySelector("#displayVowels");
  vowelCounter(input);
});

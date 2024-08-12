// Frist method

let names = "deepak singh";
let reverseString = (str) => {
  return str.split(" ").reverse().join("");
};

console.log(reverseString(names));

//second method

let secondStr = "Ravi singh";

const secondReverse = (str) => {
  let secondString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    secondString += str[i];
  }
  return secondString;
};

console.log(secondReverse(secondStr));

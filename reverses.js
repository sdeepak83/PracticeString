// frist Method

let names = "deepak singh";

let reversefunc = (str) => {
  return str.split("").reverse().join("").replaceAll(" ", "");
};
console.log(reversefunc(names));

// Second  Method

let sReverseFunc = (str) => {
  let secondStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    secondStr += str[i].replaceAll(" ", "");
  }
  return secondStr;
};
console.log(sReverseFunc(names));

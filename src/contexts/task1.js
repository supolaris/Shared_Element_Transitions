const OrignalArray = [1, 2, 3, 3, 4, 5, 5];
const ResultArray = [];

for (let i = 0; i < OrignalArray.length; i++) {
  if (OrignalArray[i] == OrignalArray[i + 1]) {
    ResultArray.push(OrignalArray[i]);
  }
}

console.log(ResultArray);

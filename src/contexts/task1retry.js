const OrignalArray = [
  1, 2, 3, 5, 6, 3, 4, 5, 5, 99, 55, 66, 44, 99, 22, 77, 43, 56, 85, 95, 66, 44,
];
const ResultArray = [];

for (let i = 0; i < OrignalArray.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < ResultArray.length; j++) {
    if (OrignalArray[i] === ResultArray[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate !== true) {
    for (let k = i + 1; k < OrignalArray.length; k++) {
      if (OrignalArray[i] === OrignalArray[k]) {
        ResultArray.push(OrignalArray[i]);
        break;
      }
    }
  }
}

console.log(ResultArray);

//ex1
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}

//ex2
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

//ex3
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

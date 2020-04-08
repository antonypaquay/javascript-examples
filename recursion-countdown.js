/* COUNTDOWN USING RECURSION */

//ex1
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

//ex2
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

//ex3
function countdown(n) {
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

//ex4
function countdown(n) {
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}

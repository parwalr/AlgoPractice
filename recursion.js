raise = (base, exp) => {
  if (exp === 0) {
    return 1;
  } else {
    return base * raise(base, exp - 1);
  }
};

console.log(raise(2, 6));

factorial = n => {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(4));

bunnyears = n => {
  if (n === 0) {
    return 0;
  } else {
    return 2 + bunnyears(n - 1);
  }
};

console.log(bunnyears(3));

fib = n => {
  if (n < 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log(fib(3));

bunnyears2 = n => {
  if (n === 0) {
    return 0;
  } else {
    if (n % 2 === 0) {
      return 3 + bunnyears2(n - 1);
    } else {
      return 2 + bunnyears2(n - 1);
    }
  }
};

console.log(bunnyears2(4));

triangle = rows => {
  if (rows < 2) {
    return rows;
  } else {
    return rows + triangle(rows - 1);
  }
};
console.log(triangle(3));

sumDigits = n => {
  if (n < 10) {
    return n;
  } else {
    return (n % 10) + sumDigits(n / 10);
  }
};
console.log(sumDigits(49));

countX = str => {
  if (str.length === 0) {
    return 0;
  } else if (str.charAt(0) == "x") {
    return 1 + countX(str.substring(1));
  } else {
    return countX(str.substring(1));
  }
};
console.log(countX("xxhixx"));
console.log(countX("xhixhix"));
console.log(countX("hi"));

countHi = str => {
  if (str.length === 0) {
    return 0;
  } else if (str.charAt(0) == "h" && str.charAt(1) == "i") {
    return 1 + countHi(str.substring(2));
  } else {
    return countHi(str.substring(1));
  }
};
console.log(countHi("xxhixx"));
console.log(countHi("xhixhix"));
console.log(countHi("hi"));

changeXY = str => {
  if (str.length === 0) {
    return str;
  } else if (str.charAt(0) === "x") {
    return "y" + changeXY(str.substring(1));
  } else {
    return str.charAt(0) + changeXY(str.substring(1));
  }
};
console.log(changeXY("codex"));

changePi = str => {
  if (str.length === 0) {
    return str;
  } else if (str.charAt(0) === "p" && str.charAt(1) === "i") {
    return "3.14" + changePi(str.substring(2));
  } else {
    return str.charAt(0) + changePi(str.substring(1));
  }
};
console.log(changePi("xpix"));
console.log(changePi("pipi"));
console.log(changePi("pip"));

noX = str => {
  if (str.length === 0) {
    return str;
  } else if (str.charAt(0) === "x") {
    return noX(str.substring(1));
  } else {
    return str.charAt(0) + noX(str.substring(1));
  }
};
console.log(noX("xaxb"));
console.log(noX("abc"));
console.log(noX("xx"));

array6 = (arr, n) => {
  if (n === arr.length) {
    return false;
  } else if (arr[n] == 6) {
    return true;
  } else {
    return array6(arr, n + 1);
  }
};
console.log(array6([1, 6, 4], 0));
console.log(array6([1, 4], 0));
console.log(array6([6], 0));

array11 = (arr, n) => {
  if (n === arr.length) {
    return 0;
  } else if (arr[n] === 11) {
    return 1 + array11(arr, n + 1);
  } else {
    return array11(arr, n + 1);
  }
};
console.log(array11([1, 2, 11], 0));
console.log(array11([11, 11], 0));
console.log(array11([1, 2, 3, 4], 0));

array220 = (arr, n) => {
  if (n === arr.length) {
    return false;
  } else if (arr[n] * 10 === arr[n + 1]) {
    return true;
  } else {
    return array220(arr, n + 1);
  }
};
console.log(array220([1, 2, 20], 0));
console.log(array220([3, 30], 0));
console.log(array220([3], 0));

allStar = str => {
  if (str.length < 2) {
    return str;
  } else {
    return str.charAt(0) + "*" + allStar(str.substring(1));
  }
};
console.log(allStar("hello"));

pairStar = str => {
  if (str.length < 2) {
    return str;
  } else if (str.charAt(0) === str.charAt(1)) {
    return str.charAt(0) + "*" + pairStar(str.substring(1));
  } else {
    return str.charAt(0) + pairStar(str.substring(1));
  }
};
console.log(pairStar("hello"));

endX = str => {
  if (str.length === 0) {
    return str;
  }
  if (str.charAt(0) === "x") {
    return endX(str.substring(1)) + "x";
  } else {
    return str.charAt(0) + endX(str.substring(1));
  }
};
console.log(endX("xxre"));
console.log(endX("xxhixx"));
console.log(endX("xhixhix"));

countPairs = str => {
  if (str.length < 3) {
    return 0;
  }
  if (str.charAt(0) === str.charAt(2)) {
    return 1 + countPairs(str.substring(1));
  } else {
    return countPairs(str.substring(1));
  }
};
console.log(countPairs("axa"));
console.log(countPairs("axax"));
console.log(countPairs("axbx"));

countAbc = str => {
  if (str.length < 3) {
    return 0;
  }
  if (str.substring(0, 3) === "abc") {
    return 1 + countAbc(str.substring(3));
  }
  if (str.substring(0, 3) === "aba") {
    return 1 + countAbc(str.substring(2));
  }
  return countAbc(str.substring(1));
};
console.log(countAbc("abaxxaba"));

count11 = str => {
  if (str.length < 2) {
    return 0;
  }
  if (str.charAt(0) === "1" && str.charAt(1) === "1") {
    return 1 + count11(str.substring(2));
  }
  return count11(str.substring(1));
};
console.log(count11("11abc11"));
console.log(count11("abc11x11x11"));
console.log(count11("111"));

stringClean = str => {
  if (str.length < 2) {
    return str;
  }
  if (str.charAt(0) === str.charAt(1)) {
    return stringClean(str.substring(1));
  }
  return str.charAt(0) + stringClean(str.substring(1));
};
console.log(stringClean("yyzzza"));

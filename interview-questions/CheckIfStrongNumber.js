const checkStrongNumber = (n) => {
  const s = String(n);

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const number = Number(s[i]);

    // calculate factorial
    const factorialSum = factorial(number);
    sum = sum + factorialSum;
  }

  // check strong number
  if (sum === n) {
    console.log("strong number");
  } else {
    console.log("not strong number");
  }
};

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
};

checkStrongNumber(145);

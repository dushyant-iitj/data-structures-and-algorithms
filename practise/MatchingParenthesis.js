const a = "{[]{}([{}]}]";

const checkCorrect = (s) => {
  const arr = new Array();

  // check s length, if 0 true, if 1 false
  if (s.length === 0) return true;
  if (s.length === 1) return false;

  // push first element
  arr.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (
      (arr[arr.length - 1] === "(" && s[i] === ")") ||
      (arr[arr.length - 1] === "[" && s[i] === "]") ||
      (arr[arr.length - 1] === "{" && s[i] === "}")
    ) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
    console.log(arr);
  }

  return arr.length === 0;
};

console.log(checkCorrect(a));

/*
Pattern - 22: The Number Pattern

Problem Statement: Given an integer N, print the following pattern : 

Example N = 4

4444444
4333334
4322234
4321234
4322234
4333334
4444444

*/

const theNumberPattern = (n: number) => {
  // x axis loop
  let x = n;
  let xFlip = false;

  while (x <= n) {
    // y axis loop
    let y = n;
    let yFlip = false;

    while (y <= n) {
      const num = Math.max(x, y);
      process.stdout.write(`${num}`);

      if (y === 1) {
        yFlip = true;
      }
      if (yFlip) {
        y++;
      } else {
        y--;
      }
    }

    process.stdout.write("\n");

    if (x === 1) {
      xFlip = true;
    }
    if (xFlip) {
      x++;
    } else {
      x--;
    }
  }
};

//##################################
//##################################

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
theNumberPattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
theNumberPattern(a);
a = 8;
process.stdout.write(`For ${a}:` + "\n");
theNumberPattern(a);

export {};

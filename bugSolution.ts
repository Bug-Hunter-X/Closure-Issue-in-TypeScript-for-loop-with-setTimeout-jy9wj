function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers1(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Use a closure to capture i in each iteration
    (function(j) {
        setTimeout(() => {
          console.log(j);
        }, 0);
      })(i);
  }
}

printNumbers1(5); // This now prints 1, 2, 3, 4, 5 correctly.
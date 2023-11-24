for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

console.log("\n");

let n = 10;
let mid = 5;

for (let i = 1; i <= mid; i++) {
  for (let j = 1; j <= n; j++) {
    if (j > mid - i && j < mid + i) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}

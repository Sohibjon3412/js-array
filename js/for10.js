let a = 3.0;
let n = 5;
let num = 1;

for (let i = 1; i <= n; i++) {
  num += a ** i;
}
console.log(num.toFixed(1))
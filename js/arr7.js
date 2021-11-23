let arr = [1,2,3,4,5];
let reversList = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversList.push(arr[i]);
}
console.log(reversList);
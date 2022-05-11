"use strict";

Array.prototype.removeDuplicatesAsync = function () {
  let array = this;
  new Promise(function (resolve, reject) {
    resolve([...new Set(array)]);
  }).then(console.log);
};
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]

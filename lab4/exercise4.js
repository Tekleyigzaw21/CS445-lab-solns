const fibonacci = (function () {
  const mem = new Map();
  function fib(n) {
    let value;
    if (mem.has(n)) {
      value = mem.get(n);
    } else {
      if (n <= 1) {
        value = n;
      } else {
        value = fib(n - 1) + fib(n - 2);
      }
      mem.set(n, value);
    }
    return value;
  }
  return fib;
})();

function fibonacci2(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.time("Memoized Version");
console.log(fibonacci(1000));
console.timeEnd("Memoized Version");

console.time("Not Memoized Version");
console.log(fibonacci2(1000));
console.timeEnd("Not Memoized Version");

// Program to find n combination r
function fact(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function combination(n, r) {
  var max = fact(n) / (fact(n - r) * fact(r));

  return max;
}

console.log(combination(13, 4));

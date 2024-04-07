// match(/(\d)\1*/g)
// (\d): This part captures a single digit (\d) and stores it in a capturing group. The parentheses () create a capturing group.
// \1*: This part matches zero or more occurrences of the captured digit stored in the first capturing group (\1 refers to the first capturing group).
// /g: This flag makes the regular expression global, so it finds all matches in the string
var countAndSayOther = function (n) {
  let current = "1";
  for (let i = 1; i < n; i++) {
    current = current
      .match(/(\d)\1*/g)
      .map((g) => g.length + g[0])
      .join("");
  }
  return current;
};
var countAndSay = function (n) {
  if (n === 1) return "1";
  let cns = "1";
  for (let i = 2; i <= n; i++) {
    let newcns = "";
    let k = 0;
    while (k < cns.length) {
      let p = k + 1;
      while (cns[k] === cns[p]) {
        p++;
      }
      let count = p - k;
      newcns += `${count}${cns[k]}`;
      k = p;
    }
    cns = newcns;
  }
  return cns;
};

console.log(countAndSay(1));
console.log(countAndSay(4));

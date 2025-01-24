const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const answer = input
  .match(/(<.*?>|[^<>]+)/g)
  .map((str) => {
    if (str[0] !== "<")
      return str
        .split(" ")
        .map((s) => s.split("").reverse().join(""))
        .join(" ");
    else return str;
  })
  .join("");

console.log(answer);
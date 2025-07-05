var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

var array = JSON.parse(input[0]);

console.log(array.sort((a, b) => a - b));

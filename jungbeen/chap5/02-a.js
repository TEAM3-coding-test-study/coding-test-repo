var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

var arr = JSON.parse(input[0]);

arr = [...new Set(arr)].sort((a, b) => b - a);

console.log(arr);

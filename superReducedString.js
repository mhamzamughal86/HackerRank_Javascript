// https://www.hackerrank.com/challenges/reduced-string/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function superReducedString(str) {
  let index=0;
  let stack = ''+str[index];

  for (let x=1; x<str.length; ++x){
    if(str[x]==stack[index]){
      stack = (stack.length>1)? stack.substring(0,index):'';
      --index;
    }
    else{
      ++index;
      stack+=str[x];
    }
  }
  return stack.length? stack : 'Empty String';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}

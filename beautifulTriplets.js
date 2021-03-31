'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
  let count = 0;
  let arr_length = arr.length;
  for (let i = 0; i < arr_length; ++i) {
    for (let j = i + 1; j < arr_length; ++j) {
      if (arr[j] - arr[i] > d) {
        break;
      } else {
        for (let k = j + 1; k < arr_length; ++k) {
          if (arr[k] - arr[j] > d) {
            break;
          } else if (arr[j] - arr[i] == arr[k] - arr[j]) {
            if (arr[j] - arr[i] == d) {
              count++;
            }
          }
        }
      }
    }
  }
  return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = beautifulTriplets(d, arr);

    ws.write(result + "\n");

    ws.end();
}

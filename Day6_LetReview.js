//  https://www.hackerrank.com/challenges/30-review-loop/problem
function processData(input) {
    inputs = input.split('\n').slice(1);
    //Enter your code here
    let evenStr = "";
    let oddStr = "";
    for (item of inputs) {

        for (let x in item) {
            parseInt(x) % 2 == 0 ? (evenStr += item[x]) : (oddStr += item[x]);
        }
        console.log(`${evenStr} ${oddStr}`);
        evenStr="";
        oddStr="";
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

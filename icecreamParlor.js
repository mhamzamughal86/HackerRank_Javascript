function whatFlavors(costs, money) {
  let obj = {};
  for (let index = 0; index < costs.length; ++index) {
    let cost = costs[index];
    if (money > cost) {
      if (obj[cost]) {
        let index1 = obj[cost];
        let index2 = index + 1;
        if (index1 > index2) {
          console.log(`${index2} ${index1}`);
        } else {
          console.log(`${index1} ${index2}`);
        }
        break;
      } else {
        obj[money - cost] = index + 1;
      }
    }
  }
}

let arr = [2, 1, 3, 5, 6];
let money = 5;
whatFlavors(arr, money);


// ================ Second Solution ======== //
/*
  if (costs[index] < money) {
  let remainingMoney = Math.abs(money - costs[index]);
  let nextId = costs.indexOf(remainingMoney);
  if (nextId >= 0 && nextId != index) {
    if (index > nextId) {
      ids.push(++nextId);
      ids.push(++index);
    } else {
      ids.push(++index);
      ids.push(++nextId);
    }
    break;
  }
}
*/

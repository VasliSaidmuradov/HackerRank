// Electronics Shop

// https://www.hackerrank.com/challenges/electronics-shop/problem


// #1
function getMoneySpent(keyboards, drives, b) {
  keyboards.sort((a, b) => a - b)
  drives.sort((a, b) => a - b)
  let maxCost = -1
  let k = keyboards.length - 1
  while (k >= 0) {
    if (keyboards[k] >= b) {
      k--
      continue;
    }
    let d = drives.length - 1
    let currCost
    while (d >= 0) {
      currCost = keyboards[k] + drives[d]
      if (currCost > b) {
        d--
        continue;
      }
      if (currCost <= b) {
        maxCost = Math.max(maxCost, currCost)
        break;
      }
      d--
    }
    k--
  }
  return maxCost
}
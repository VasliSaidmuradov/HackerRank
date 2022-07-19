// Migratory Birds

// https://www.hackerrank.com/challenges/migratory-birds/problem

// #1
function migratoryBirds(arr) {
  // Write your code here
  const hashMap = {}
  const res = [0, 0]

  for (let el of arr) {
    hashMap[el] = (hashMap[el] || 0) + 1
  }

  for (const [val, count] of Object.entries(hashMap)) {
    if (count > res[1] || (count === res[1] && val < res[0])) {
      res[0] = +val
      res[1] = count
    }
  }

  return res[0]
}
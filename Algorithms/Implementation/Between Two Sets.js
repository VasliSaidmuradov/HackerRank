// Between Two Sets
// https://www.hackerrank.com/challenges/between-two-sets/problem

// #1
function getTotalX(a, b) {
  const start = a[a.length - 1]
  const end = b[0]
  let i = start
  let count = 0

  while (i <= end) {
    let aPass = true
    let bPass = true
    for (let num of a) {
      if (i % num !== 0) {
        aPass = false
        break
      }
    }
    for (let num of b) {
      if (num % i !== 0) {
        bPass = false
        break
      }
    }

    if (aPass && bPass) {
      count++
    }

    i++
  }

  return count
}

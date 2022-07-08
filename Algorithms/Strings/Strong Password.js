// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
  const MIN_LENGTH = 6
  let nums = 0
  let lower = 0
  let upper = 0
  let special = 0

  for (let ch of password) {
    if (!Number.isNaN(parseInt(ch))) {
      nums++
    } else if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
      upper++
    } else if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
      lower++
    } else {
      special++
    }
  }
  
  let totalChars = nums + upper + lower + special
  let count = 0
  
  if (nums < 1) count++
  if (upper < 1) count++
  if (lower < 1) count++
  if (special < 1) count++
  return totalChars + count >= MIN_LENGTH ? count : MIN_LENGTH - totalChars
}


// #2
function minimumNumber(n, password) {
  const MIN_LENGTH = 6    
  let nums = 0
  let lower = 0
  let upper = 0
  let special = 0

  for (let ch of password) {
    if (!Number.isNaN(parseInt(ch))) {
      nums = 1
    } else if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
      upper = 1
    } else if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
      lower = 1
    } else {
      special = 1
    }
  }

  let require = 4 - (nums + upper + lower + special)

  return require + n < MIN_LENGTH ? MIN_LENGTH - n : require
}
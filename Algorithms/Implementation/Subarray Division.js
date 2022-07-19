// Subarray Division

// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  // Write your code here
  let days = 0
  let count = 0
  for (let i = 0; i < m; i++) {
    days += s[i]
  }

  let l = 0
  let r = m

  while (r <= s.length) {
    if (days === d) {
      count++
    }
    days = days - s[l] + s[r]
    l++
    r++
  }

  return count
}
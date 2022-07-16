// Funny String
// https://www.hackerrank.com/challenges/funny-string/problem

// #1
function funnyString(s) {
  // Write your code here
  const sc = []

  for (let ch of s) {
    sc.push(ch.charCodeAt())
  }

  let l = 0
  let r = sc.length - 1

  while (l < sc.length - 1) {
    const diffL = Math.abs(sc[l] - sc[l+1])
    const diffR = Math.abs(sc[r] - sc[r-1])
    if (diffL !== diffR) {
      return 'Not Funny'
    }
    l++
    r--
  }

  return 'Funny'
}
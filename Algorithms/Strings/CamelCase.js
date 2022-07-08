// https://www.hackerrank.com/challenges/camelcase/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign

// #1
function camelcase(s) {
  let count = 1

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) 
      count++
  } 

  return count
}
// #2
function camelcase(s) {
  let count = 1

  for (let i = 0; i < s.length; i++) {
    if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90)
      count++
  } 

  return count
}
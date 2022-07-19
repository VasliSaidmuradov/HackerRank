// Breaking the Records

// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

// #1
function breakingRecords(scores) {
  let min = scores[0]
  let max = min
  let countMin = 0
  let countMax = 0

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      min = scores[i]
      countMin++
    }
    if (scores[i] > max) {
      max = scores[i]
      countMax++
    }
  }

  return [countMax, countMin]
}
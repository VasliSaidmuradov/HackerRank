// Birthday Cake Candles
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

// #1
function birthdayCakeCandles(candles) {
  // Write your code here
  let count = 1
  let tallest = candles[0]

  for (let i = 1; i < candles.length; i++) {
    if (tallest < candles[i]) {
      tallest = candles[i]
      count = 1
    } else if (tallest === candles[i]) {
      count++
    }
  }

  return count
}

// #2
function birthdayCakeCandles(candles) {
  // Write your code here
  let count = 0
  let tallest = 0

  tallest = Math.max(...candles)

  for (let candle of candles) {
    if (candle === tallest)
      count++
  }

  return count
}
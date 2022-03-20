// Apple and Orange

// #1
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0
  let orangeCount = 0

  for (let apple of apples) {
    const appleCord = a + apple
    appleCount += appleCord >= s && appleCord <= t ? 1 : 0
  }
  for (let orange of oranges) {
    const orangeCord = b + orange
    orangeCount += orangeCord >= s && orangeCord <= t ? 1 : 0
  }

  console.log(appleCount)
  console.log(orangeCount)
  return [appleCount, orangeCount]
}
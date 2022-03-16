// 2D Array - DS

// #1
function hourglassSum(arr) {
  let i = 0
  let sum = 0
  let res = []
  while (i <= arr.length - 3) {
    let j = 0

    while (j <= arr.length - 3) {
      sum += arr[i][j+0]
      sum += arr[i][j+1]
      sum += arr[i][j+2]
      sum += arr[i+1][j+1]
      sum += arr[i+2][j+0]
      sum += arr[i+2][j+1]
      sum += arr[i+2][j+2]

      res.push(sum)
      sum = 0
      j++
    }
    i++
  }

  return Math.max(...res)
}
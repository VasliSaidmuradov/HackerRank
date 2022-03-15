// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, ar) {
  // Write your code here
  const obj = {}
  let total = 0

  for (let i = 0; i < ar.length; i++) {
    obj[ar[i]] = (obj[ar[i]] || 0) + 1
  }

  for (const prop in obj) {
    total += Math.floor(obj[prop] / 2)
  }

  return total
}
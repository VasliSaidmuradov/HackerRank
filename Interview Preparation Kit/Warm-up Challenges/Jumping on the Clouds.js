// Jumping on the Clouds

// #1
function jumpingOnClouds(c) {
  // Write your code here
  let i = 0
  let jumps = 0
  
  while (c[i] !== 0) {
    i++
  }

  while (i < c.length - 1) {
    if (c[i + 2] === 1) {
      i++
    } else {
      i += 2
    }

    jumps++
  }

  return jumps
}

// #2 - recursion
function jumpingOnClouds(c) {
  // Write your code here
  if (c.length == 1) return 0
  if (c.length == 2) return c[1] === 1 ? 0 : 1
  if (c[2] === 1) {
    return 1 + jumpingOnClouds(c.slice(1))
  }

  if (c[2] === 0) {
    return 1 + jumpingOnClouds(c.slice(2))
  }
}
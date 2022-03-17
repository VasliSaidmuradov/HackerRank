// Arrays: Left Rotation

// #1
function rotLeft1 (a, d) {
  if (d === a.length) return a
  
  let i = 0
  while (i < d) {
    a.push(a.shift())
    i++
  }

  return a
}

// #2
function rotLeft2 (a, d) {
  return [...a.slice(d), ...a.slice(0, d)]
}
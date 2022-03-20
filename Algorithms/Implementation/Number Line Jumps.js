// Number Line Jumps

// #1
function kangaroo(x1, v1, x2, v2) {
  // Write your code here    
  return (x2 - x1) * (v2 - v1) < 0 && (x2 - x1) % (v2 - v1) === 0 ? 'YES' : 'NO'
}
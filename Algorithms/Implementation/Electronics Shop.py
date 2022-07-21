# Electronics Shop

def getMoneySpent(keyboards, drives, b):
  maxCost = -1
  K = sorted(keyboards, reverse = True)
  D = sorted(drives, reverse = True)
    
  for i in range(len(K)):
    currMax = K[i]

    if currMax >= b:
      continue
            
    for j in range(len(D)):
      currMax += D[j]
            
      if currMax > b:
        currMax -= D[j]
        continue
            
      maxCost = max(maxCost, currMax)
      break
    
  return maxCost
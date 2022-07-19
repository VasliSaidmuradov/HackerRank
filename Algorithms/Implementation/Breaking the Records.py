# Breaking the Records

# https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

def breakingRecords(scores):
  # Write your code here
  minVal, maxVal = scores[0], scores[0]
  minCount, maxCount = 0, 0

  for i in range(1, len(scores)):
    if scores[i] < minVal:
      minCount += 1
      minVal = scores[i]
    if scores[i] > maxVal:
      maxCount += 1
      maxVal = scores[i]

  return [maxCount, minCount]

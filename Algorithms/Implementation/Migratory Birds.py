# Migratory Birds

# 1
def migratoryBirds(arr):
  # Write your code here
  res = [0] * 2
  hashMap = {}

  for i in arr:
    hashMap[i] = hashMap[i] + 1 if i in hashMap else 1

  for item in hashMap.items():
    val, count = item[0], item[1]

    if count > res[1] or count == res[1] and val < res[0]:
      res[0] = val
      res[1] = count

  return res[0]
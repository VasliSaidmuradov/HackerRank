// Time Conversion

// #1
const TIME = {
  PM: {
    '12': '12',
    '01': '13',
    '02': '14',
    '03': '15',
    '04': '16',
    '05': '17',
    '06': '18',
    '07': '19',
    '08': '20',
    '09': '21',
    '10': '22',
    '11': '23',
  },
  AM: {
    '12': '00',
    '01': '01',
    '02': '02',
    '03': '03',
    '04': '04',
    '05': '05',
    '06': '06',
    '07': '07',
    '08': '08',
    '09': '09',
    '10': '10',
    '11': '11',
  }    
}

function timeConversion(s) {
  // Write your code here
  const t = s.slice(-2)
  const f = s.slice(0,2)
  return s.replace(/^\d\d/, TIME[t][f]).slice(0,-2)
}


// #2
function timeConversion(s) {
  // Write your code here
  let AMPM = s.slice(-2)
  let timeArr = s.slice(0, -2).split(':')
   
  if (AMPM === "AM" && timeArr[0] === '12') {
      timeArr[0] = '00'
  } else if (AMPM === "PM") {
      timeArr[0] = (timeArr[0] % 12) + 12
  }
  
  return timeArr.join(':')
}
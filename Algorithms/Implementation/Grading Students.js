// Grading Students

function gradingStudents(grades) {
  // Write your code here
  return grades.map(grade => {
    let finalGrade = grade
    const remainder = grade % 5
    if (remainder >= 3 && grade > 37) {
      finalGrade = grade + 5 - remainder
    }
    return finalGrade
  })
}
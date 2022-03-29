// Day of the Programmer

function dayOfProgrammer(year) {
    // Write your code here
    if (year == 1918)
        return "26.09.1918"
    if (year % 4 === 0 && (year < 1918 || year % 400 === 0 || year % 100))
        return "12.09." + year

    return "13.09." + year
}
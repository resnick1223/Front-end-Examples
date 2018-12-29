function calculateGpa(grade) {
    var gpa = 'X';
    if (grade >= 90 && grade <= 100) {
        gpa = 'A+';
    } else if (grade >= 85 && grade < 90) {
        gpa = 'A';
    } else if (grade >= 80 && grade < 85) {
        gpa = 'A-';
    } else if (grade >= 77 && grade < 80) {
        gpa = 'B+';
    } else if (grade >= 73 && grade < 77) {
        gpa = 'B';
    } else if (grade >= 70 && grade < 73) {
        gpa = 'B-';
    } else if (grade >= 67 && grade < 70) {
        gpa = 'C+';
    } else if (grade >= 63 && grade < 67) {
        gpa = 'C';
    } else if (grade >= 60 && grade < 63) {
        gpa = 'C-';
    } else if (grade > 0 && grade < 60) {
        gpa = 'F';
    } else {
        gpa = 'X';
    }

    return gpa;
}

module.exports = calculateGpa;
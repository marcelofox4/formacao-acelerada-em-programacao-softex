function calculateAverage(studentsGrade) {

    let sumGrades = 0;
    for (let i = 0; i < studentsGrade.length; i++) {
        sumGrades += studentsGrade[i];
    }

    let gradeAverage = sumGrades / studentsGrade.length;
    return gradeAverage;
}

let studentsGrade = [7, 10];
let studentAverage = calculateAverage(studentsGrade);

let howMuchNeeded = 21 - studentsGrade[0] - studentsGrade[1];

console.log(`\nA média está em: ${studentAverage}\nÉ preciso, pelo menos: ${howMuchNeeded},\npara a APROVAÇÃO!`);
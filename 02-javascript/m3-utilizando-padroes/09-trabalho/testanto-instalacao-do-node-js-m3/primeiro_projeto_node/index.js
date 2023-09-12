function calculateAverage(studentsGrade) {

    let sumGrades = 0;
    for (let i = 0; i < studentsGrade.length; i++) {
        sumGrades += studentsGrade[i];
    }

    let gradeAverage = sumGrades / studentsGrade.length;
    return gradeAverage;
}

let studentsGrade = [7, 6, 8];
let studentAverage = calculateAverage(studentsGrade);

isApproved = (studentAverage >= 7) ? true : false;
if (isApproved) {
    console.log(`A média do Aluno foi: ${studentAverage}. Foi APROVADO!`);
} else {
    console.log(`A média do Aluno foi: ${studentAverage}. Foi REPROVADO!`);
}
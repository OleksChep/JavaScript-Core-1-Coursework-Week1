var numberOfStudents = 15;
var numberOfMentors = 8;
var preciseAge = 30.612437;
varroughAge = Math.round(preciseAge); // 30
console.log(varroughAge);

//from G ex + new solution

var stud = "Number of students: ";
console.log(stud + numberOfStudents);
var ment = "Number of mentors: ";
console.log(ment + numberOfMentors);
var total = "Total number of students and mentors: ";
var sum = numberOfMentors + numberOfStudents;
console.log(total + sum);
var percentageStudents = 100*numberOfStudents/sum
var percentageMentors = 100*numberOfMentors/sum
var roundStudents = Math.round(percentageStudents);
var roundMentors = Math.round(percentageMentors);

console.log("Percentage mentors: " + roundMentors + " %.");
console.log("Percentage students: " + roundStudents + " %.");
//     Result 
//     31
//    Number of students: 15
//    Number of mentors: 8
//    Total number of students and mentors: 23
//    Percentage mentors: 35 %.
//    Percentage students: 65 %.
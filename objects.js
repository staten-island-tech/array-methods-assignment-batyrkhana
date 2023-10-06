let students = [
    {
    firstName: 'Jane',
    lastName: 'LaDooka',
    graduated: false,
    DOB: 2008,
    }
]

students.forEach((student)=>console.log(student.firstName))
const graduates = students.filter((student)=>student.graduated === true);
console.log(graduates)
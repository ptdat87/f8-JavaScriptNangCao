firstName = "Global";
lastName = "AAA ";

const teacher = {
    firstName: "Teacher",
    lastName: "BBB",

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

const student = {
    firstName: "Student",
    lastName: "CCC",
};

//Case 1
console.log(teacher.getFullName());

//Case 2
const getTeacherName = teacher.getFullName;
console.log(getTeacherName());

//Case 3
const getTeacherNameWithBind1 = teacher.getFullName.bind(teacher);
console.log(getTeacherNameWithBind1());

//Case 3
const getTeacherNameWithBind2 = teacher.getFullName.bind(student);
console.log(getTeacherNameWithBind2());

var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location, yearsOfExperience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience) {
            this.yearsOfExperience = yearsOfExperience;
        }
    }
    return Teacher;
}());
var teacher = new Teacher('Mortada', 'Mash3l', true, 'Alex', 15);
teacher.contract = true;
console.log(teacher.firstName);
console.log(teacher.lastName);
console.log(teacher.fullTimeEmployee);
console.log(teacher.location);
console.log(teacher.yearsOfExperience);
console.log(teacher.contract);

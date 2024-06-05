class Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [extraAttribute: string]: any;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience) {
            this.yearsOfExperience = yearsOfExperience;
        }
    }
}
let teacher = new Teacher('Mortada', 'Mash3l', true, 'Alex', 15);
teacher.contract = true;

console.log(teacher.firstName);
console.log(teacher.lastName);
console.log(teacher.fullTimeEmployee);
console.log(teacher.location);
console.log(teacher.yearsOfExperience);
console.log(teacher.contract);


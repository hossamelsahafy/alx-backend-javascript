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

class Directors extends Teacher {
    numberOfReports: number;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number, yearsOfExperience?: number) {
        super(firstName, lastName, fullTimeEmployee, location, yearsOfExperience);
        this.numberOfReports = numberOfReports;
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

let director1 = new Directors('John', 'Doe', true, 'London', 17);
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

let myPrintTeacher: printTeacherFunction = printTeacher;

console.log(myPrintTeacher("Mortada", "Mash3l"));

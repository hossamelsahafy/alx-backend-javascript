var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Directors = /** @class */ (function (_super) {
    __extends(Directors, _super);
    function Directors(firstName, lastName, fullTimeEmployee, location, numberOfReports, yearsOfExperience) {
        var _this = _super.call(this, firstName, lastName, fullTimeEmployee, location, yearsOfExperience) || this;
        _this.numberOfReports = numberOfReports;
        return _this;
    }
    return Directors;
}(Teacher));
var teacher = new Teacher('Mortada', 'Mash3l', true, 'Alex', 15);
teacher.contract = true;
console.log(teacher.firstName);
console.log(teacher.lastName);
console.log(teacher.fullTimeEmployee);
console.log(teacher.location);
console.log(teacher.yearsOfExperience);
console.log(teacher.contract);
var director1 = new Directors('John', 'Doe', true, 'London', 17);
console.log(director1);

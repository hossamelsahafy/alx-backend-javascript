interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  let student1: Student = {
    firstName: 'Hossam',
    lastName: 'Meow',
    age: 22,
    location: 'Cairo'
  };
  
  let student2: Student = {
    firstName: 'Khalid',
    lastName: 'Hassan',
    age: 22,
    location: 'Alexandria'
  };

let studentsList: Student[] = [student1, student2];
  
let table = document.createElement('table');
table.className = 'students-table';
let thead = document.createElement('thead');
let headerRow = document.createElement('tr');

let firstNameHeader = document.createElement('th');
let lastNameHeader = document.createElement('th');
let ageHeader = document.createElement('th');
let locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
lastNameHeader.textContent = 'Last Name';
ageHeader.textContent = 'Age';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(lastNameHeader);
headerRow.appendChild(ageHeader);
headerRow.appendChild(locationHeader);

thead.appendChild(headerRow);
table.appendChild(thead);

let tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  let row = document.createElement('tr');
  
  let firstNameCell = document.createElement('td');
  let lastNameCell = document.createElement('td');
  let ageCell = document.createElement('td');
  let locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  lastNameCell.textContent = student.lastName;
  ageCell.textContent = student.age.toString();
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(ageCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

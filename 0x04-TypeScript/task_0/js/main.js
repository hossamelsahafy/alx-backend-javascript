var student1 = {
    firstName: 'Hossam',
    lastName: 'Meow',
    age: 22,
    location: 'Cairo'
};
var student2 = {
    firstName: 'Khalid',
    lastName: 'Hassan',
    age: 22,
    location: 'Alexandria'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
table.className = 'students-table';
var thead = document.createElement('thead');
var headerRow = document.createElement('tr');
var firstNameHeader = document.createElement('th');
var lastNameHeader = document.createElement('th');
var ageHeader = document.createElement('th');
var locationHeader = document.createElement('th');
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
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var lastNameCell = document.createElement('td');
    var ageCell = document.createElement('td');
    var locationCell = document.createElement('td');
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

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  console.log(createEmployee(200) instanceof Teacher ? 'Teacher' : 'Director');
  console.log(createEmployee(1000) instanceof Teacher ? 'Teacher' : 'Director');
  console.log(createEmployee('$500') instanceof Teacher ? 'Teacher' : 'Director');


  function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
  }
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  let director = createEmployee(1000);
  let teacher = createEmployee(200);
  
  console.log(isDirector(director) ? 'Director' : 'Teacher');
  console.log(isDirector(teacher) ? 'Director' : 'Teacher');
  
  console.log(executeWork(director));
  console.log(executeWork(teacher));

  type Subjects = 'Math' | 'History';

  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
      return 'Teaching Math';
    } else if (todayClass === 'History') {
      return 'Teaching History';
    }
  }

  console.log(teachClass('Math'));
  console.log(teachClass('History'));

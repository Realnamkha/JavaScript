// Base class
class Person {
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

// Professor class extends Person
class Professor extends Person {
  constructor(name, teaches) {
    super(name); // Call Person's constructor
    this.teaches = teaches;
  }

  grade(paper) {
    console.log(`${this.name} graded the paper titled "${paper}".`);
  }

  introduceSelf() {
    console.log(`Hi, I'm Professor ${this.name}, and I teach ${this.teaches}.`);
  }
}

// Student class extends Person
class Student extends Person {
  constructor(name, year) {
    super(name); // Call Person's constructor
    this.year = year;
  }

  introduceSelf() {
    console.log(`Hi, I'm ${this.name}, and I'm in year ${this.year}.`);
  }
}

// Example usage
const prof = new Professor("Namkha", "Computer Science");
prof.introduceSelf();  
prof.grade("AI Paper");
const student = new Student("Tenzin", 2);
student.introduceSelf();

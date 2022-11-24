//Referencing parent class
const Employee = require("./Employee");

// Extending Intern class to parent class
class Intern extends Employee {
    constructor(id, name, email, school) {
      super(id, name, email);
      this.school = school;
    }
    getSchool = () => this.school;
    getRole = () => "Intern";
  }
module.exports = Intern;
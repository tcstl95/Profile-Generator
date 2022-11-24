//Referencing Parent class
const Employee = require("./Employee");
//Extending Manager class to parent class
class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
      super(id, name, email);
      this.officeNumber = officeNumber;
    }
    getRole = () => "Manager";
    getOffNum = () => this.officeNumber;
  }

module.exports = Manager;
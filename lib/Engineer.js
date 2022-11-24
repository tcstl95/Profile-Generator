//Referencing parent class
const Employee = require("./Employee");
;

// Extending Engineer class to parent class
class Engineer extends Employee {
 
    constructor(id, name, email, github) {
      super(id, name, email);
      this.github = github;
    }
    getGithub = () => this.github;
    getRole = () => "Engineer";
  }



    


module.exports = Engineer;
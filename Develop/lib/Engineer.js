const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.


class Engineer {

    constructor(name, email, id, github){
        super(name, email, id);
        this.github = github;
    }

    getHithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;
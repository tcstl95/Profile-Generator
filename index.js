const inquirer = require("inquirer");
const fs = require("fs");
const team = [];


const roleChoice = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose from the following roles.",
        choices: ["Engineer", "Intern", "Manager", "Back"],
      },
      
    ])
    
    .then((rolechosen) => {
      switch (rolechosen.choice) {
        case "Engineer":
          engineerChoice();
          break;
        case "Intern":
          internChoice();
          break;
        case "Manager":
          managerChoice();
        case "Back":
          break;
        default:
          break;
      }
    });
    
};
roleChoice();

const engineerChoice = () => {
 
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID number?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is your Email?",
      },
      {
        type: "input",
        name: "Github",
        message: "What is your Github?",
      },
    ])
    .then((answers) => {
      const htmlPageContent = engineerHTML(answers);
  
      fs.writeFile('engineer.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    })


};
     
const internChoice = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID number?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is your Email?",
    },
    {
      type: "input",
      name: "School",
      message: "What School did you go to?",
    },
  ])
  .then((data) => {
    const htmlPageContent = internHTML(data);

    fs.writeFile('intern.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  
});
}


const managerChoice = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID number?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is your Email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number?",
    },
  ])
  .then((data) => {
    const htmlPageContent = managerHTML(data);

    fs.writeFile('manager.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );

});
  
  }

const engineerHTML = ({ name, id, Email,Github, }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel = "stylesheet" type= "text/css" href= "./css/engineer.css"/>
  </head>
  <body>
  <h1> Engineer </h1>
  <section>
  <h2>Name: ${name}</h2>
  <h2>ID: ${id}</h2>
  <h2>Email: ${Email}</h2>
  <h2> Github: ${Github}</h2>
  </section>
  `;

  const internHTML = ({ name, id, Email,School, }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel = "stylesheet" type= "text/css" href= "./css/intern.css"/>
  </head>
  <body>
  <h1> Intern </h1>
  <section>
  <h2>Name: ${name}</h2>
  <h2>ID: ${id}</h2>
  <h2>Email: ${Email}</h2>
  <h2> School: ${School}</h2>
  </section>
  `;

  const managerHTML = ({ name, id, Email,officeNumber, }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel = "stylesheet" type= "text/css" href= "./css/manager.css"/>
  </head>
  <body>
  <h1> Manager</h1>
  <section>
  <h2>Name: ${name}</h2>
  <h2>ID: ${id}</h2>
  <h2>Email: ${Email}</h2>
  <h2> Office Number: ${officeNumber}</h2>
  </section>
  `;

 
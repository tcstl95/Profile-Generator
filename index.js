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
        name: "ID",
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
    .then((engineerAnswers) => {
      team.push(
        new Engineer(
          engineerAnswers.ID,
          engineerAnswers.name,
          engineerAnswers.Email,
          engineerAnswers.Github
        )
);
console.log(Engineer);
      const engineerInit  = () => {
        engineerChoice()
        .then((answers) => {
            const htmlContent = generateHTML(answers);
            fs.writeFile('index.html', htmlContent, (err)=>
            err ? console.log(err): console.log('HTML has been created! That was a baller move!')
            );
        });
        }
        engineerInit();

      roleChoice();
      
    });
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
      name: "ID",
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
  ]);
};

const managerChoice = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "ID",
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
  ]);
};
const generateHTML = ({ name, ID, Email, School, Github, officeNumber }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  </head>
  <body>
  <header> My Team</header>
  <section>
  <h1>Name: ${name}</h1>
  <h2>ID: ${ID}</h2>
  <h2>Email: ${Email}</h2>
  <h2> School: ${School}</h2>
  <h2> Github: ${Github}</h2>
  <h2> Office Number: ${officeNumber}</h2>
  </section>
  `;



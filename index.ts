#! /usr/bin/env node
// SHABANG comment
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your Second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform action!",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Division", "Multiplication"],
  },
]);

console.log(answer);

//conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else {
  console.log("please select valid operator");
}

console.log("THE END");

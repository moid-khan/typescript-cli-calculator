#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
const welcome = async () => {
    let title = chalkAnimation.karaoke("Start your calculation");
    await sleep();
    title.stop();
};
// welcome();
// operators
var Operators;
(function (Operators) {
    Operators["ADDITION"] = "Addition";
    Operators["SUBTRACTION"] = "Subtraction";
    Operators["DIVISION"] = "Division";
    Operators["MULTIPLICATION"] = "Multiplication";
})(Operators || (Operators = {}));
const calculator = async () => {
    inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operation",
            message: "Which operation do you want to perform?\n",
            choices: [
                Operators.ADDITION,
                Operators.SUBTRACTION,
                Operators.MULTIPLICATION,
                Operators.DIVISION,
            ],
        },
        {
            type: "number",
            name: "numberOne",
            message: "Enter first number: ",
        },
        {
            type: "number",
            name: "numberTwo",
            message: "Enter second number: ",
        },
    ])
        .then((answers) => {
        const { numberOne, numberTwo } = answers;
        switch (answers.operation) {
            case Operators.ADDITION:
                const sum = numberOne + numberTwo;
                console.log(chalk.bgGreenBright(`${Operators.ADDITION} of ${numberOne} and ${numberTwo} is ${sum}`));
                break;
            case Operators.SUBTRACTION:
                const sub = numberOne - numberTwo;
                console.log(`${Operators.SUBTRACTION} of ${numberOne} and ${numberTwo} is ${sub}`);
                break;
            case Operators.MULTIPLICATION:
                const mul = numberOne * numberTwo;
                console.log(`${Operators.MULTIPLICATION} of ${numberOne} and ${numberTwo} is ${mul}`);
                break;
            case Operators.DIVISION:
                const div = numberOne / numberTwo;
                console.log(`${Operators.DIVISION} of ${numberOne} and ${numberTwo} is ${div}`);
                break;
            default:
                console.log("Invalid operation");
                break;
        }
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log("An error occurred ", error.isTtyError);
        }
        else {
            // Something else went wrong
            console.log("An error occurred...");
        }
    });
};
calculator();

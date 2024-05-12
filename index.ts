import inquirer from "inquirer";
import chalk from "chalk";

let todos = [];
let condition = true;

while (condition) {
    const todoQuestion = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What needs to be done?"
        },
        {
            type: "confirm",
            name: "nextQuestion",
            message: "Do you want to continue the next question",
            default: true,
        }
    ]);

    todos.push(todoQuestion.todo);
    console.log(chalk.green("Added: ") + chalk.bold.yellow(todoQuestion.todo)); // Adding color
    console.log(chalk.blue("Current Todos:")); // Adding color for the list
    todos.forEach((todo, index) => {
        console.log(chalk.blue(`${index + 1}. ${todo}`)); // Adding color for the list items
    });
    condition = todoQuestion.nextQuestion;
}

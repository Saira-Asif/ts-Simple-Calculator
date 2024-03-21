import inquirer from "inquirer";
const Answer = await inquirer.prompt([
    {
        name: "FirstNumber",
        type: "number",
        message: "Enter First no:",
    },
    {
        name: "SecondNumber",
        type: "number",
        message: "Enter Second no:",
    },
    {
        name: "Operators",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Select one of the Operators to perform Operation:",
    },
]);
if (Answer.Operators === "Addition") {
    console.log(Answer.FirstNumber + Answer.SecondNumber);
}
else if (Answer.Operators === "Subtraction") {
    console.log(Answer.FirstNumber - Answer.SecondNumber);
}
else if (Answer.Operators === "Multiplication") {
    console.log(Answer.FirstNumber * Answer.SecondNumber);
}
else if (Answer.Operators === "Division") {
    console.log(Answer.FirstNumber / Answer.SecondNumber);
}
else {
    console.log("Please select valid Operator");
}

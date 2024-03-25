
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "price of first item of book", type: "number", name: "firstItem" },
    { message: "price of second item of book", type: "number", name: "secondItem" },
    { message: "price of third item of book", type: "number", name: "thirdItem" },
    {
        message: "select one of the following operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    }
]);
// conditional statement:
if (answer.operators === "addition") {
    console.log(answer.firstItem + answer.secondItem + answer.thirdItem);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstItem - answer.secondItem + answer.thirdItem);
}
else if (answer.operator === "multipliction") {
    console.log(answer.firstItem * answer.secondItem + answer.thirdItem);
}
else if (answer.operator === "division") {
    console.log(answer.firstItem / answer.secondItem + answer.thirdItem);
}
else {
    console.log("please select a valid operator");
}


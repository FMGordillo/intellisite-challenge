import chalk from "chalk";
import clear from "clear";
import inquirer from "inquirer";
import figlet from "figlet";

clear();

// Title
console.log(
  chalk.yellow(figlet.textSync("Intellisite", { horizontalLayout: "full" }))
);

async function init() {
  try {
    const results = await inquirer.prompt([
      {
        type: "list",
        name: "dbChoice",
        choices: [
          { name: "Get item", value: "getItem" },
          { name: "Update item", value: "updateItem" },
        ],
      },
    ]);
    console.log(results);
  } catch (error) {
    console.error("init error", error);
  }
}

init();

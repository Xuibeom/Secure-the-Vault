/*
Secure the Vault Guidelines:
Use the JavaScript console or the script block within an HTML page to create three variables.
Each variable will be the result of each calculation (three in total). The combination of the lock is 10 - 40 - 39.
You must use three different arithmetic operators that will generate each individual number, then display the combination on the HTML page, or in an alert popup.

1. Before anything else, write the pseudocode of your steps and how you will solve this exercise.
2. Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
3. Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator.
   Each one must equal one of the three codes in the combination.
4. Add comments throughout the code to explain each step in the process.
5. Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.
*/

// Step one: Declare the message as a variable

let message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

// Step two: Set each combination number as a variable as the sum of a corresponding calculation using a const keyword

const num1 = 5 + 5;
const num2 = num1 * 4;
const num3 = num2 - 1;

// Step 3: Set up the alert for the webpage and use string literals to connect the elements together

alert(`${message} ${num1} - ${num2} - ${num3}`);

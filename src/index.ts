import { cursorTo, clearScreenDown } from "readline";

/**
 * Clears the console by logging a blank line to overwrite the current output,
 * then moves the cursor to the top-left corner (0, 0) using `cursorTo`, and
 * finally clears the entire screen down using `clearScreenDown`.
 *
 * This function is designed for use in environments where direct access to the
 * terminal buffer is available. In node.js, this can be achieved by importing
 * the readline module.
 */
const clearConsole = (): void => {
  const blank = "\n".repeat(process.stdout.rows);
  console.log(blank);
  cursorTo(process.stdout, 0, 0);
  clearScreenDown(process.stdout);
};

/**
 * Clears the current line on the terminal and moves the cursor to the beginning of the line.
 */
const clearLine = (): void => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
};

export { clearConsole, clearLine };

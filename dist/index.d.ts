// Generated by dts-bundle-generator v9.5.1

/**
 * Clears the console by logging a blank line to overwrite the current output,
 * then moves the cursor to the top-left corner (0, 0) using `cursorTo`, and
 * finally clears the entire screen down using `clearScreenDown`.
 *
 * This function is designed for use in environments where direct access to the
 * terminal buffer is available. In node.js, this can be achieved by importing
 * the readline module.
 */
export declare const clearConsole: () => void;
/**
 * Clears the current line on the terminal and moves the cursor to the beginning of the line.
 */
export declare const clearLine: () => void;

export {};

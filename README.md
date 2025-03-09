# clear-console

A small collection of functions for clearing the console in a Bun / Node CLI project.

## Installation

```
npm i -S @mhafemann/clear-console
```

### Functions

| Name             | Description                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `clearConsole()` | Clears the entire console. <br> Can be used in a Bun / Node CLI project to clear the terminal before displaying output. |
| `clearLine()`    | Clears a single line of text from the console.                                                                          |

Example Usage
```ts
import { clearConsole, clearLine } from '@mhafemann/clear-console';

// Clear the entire console while preserving scrollback.
clearConsole();

// Clear the line and reset the cursor.
clearLine();
```
// @bun
import{cursorTo as p,clearScreenDown as q}from"readline";var y=()=>{let j=`
`.repeat(process.stdout.rows);console.log(j),p(process.stdout,0,0),q(process.stdout)},z=()=>{process.stdout.clearLine(0),process.stdout.cursorTo(0)};export{z as clearLine,y as clearConsole};

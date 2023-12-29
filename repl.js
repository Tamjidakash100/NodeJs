const repl = require("repl");

const local = repl.start("$");

local.on("exit", ()=>{
    console.log("Exiting!");
    process.exit();
});
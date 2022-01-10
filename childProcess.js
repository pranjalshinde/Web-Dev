let cp = require("child_process");
try{
    cp.execFile("calc");
}
catch(error){
    console.log("Error");
}

// console.log(out);
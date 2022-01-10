#!/usr/bin/env node

let fs = require("fs");
let inputArr = process.argv.slice(2);

let options = [];
let files = [];
let isInv = false;
if(inputArr.length == 0){
    console.log("Kindly enter filePath");
    return;
}
//separating files and options
for(let i = 0; i < inputArr.length; i++){
    let argument = inputArr[i];
    if(argument.charAt(0) == '-'){
        if(argument == '-n' || argument == '-b'){
            if(isInv == true){
                console.log("Invalid options");
                return;
            }
            isInv = true;
        }
        options.push(argument);
    }
    else{
        files.push(argument);
    }
}

//printing files content

for(let i = 0; i < files.length; i++){
    let num = 1;
    let areOp = false;
    let filePath = files[i];
    if(fs.existsSync(filePath) == false){
        console.log("File doesn't exist");
        return;
    }
    let content = fs.readFileSync(filePath).toString();
    
    let conArr = content.split("\n");
    //If options exists
    for(let op in options){
        areOp = true;
        switch(options[op]){
            case "-s":
                for(let j = 0; j < conArr.length; j++){
                    if((conArr[j] == "") || (conArr[j].charAt(0) >= 0 && conArr[j].charAt(0) <= 9 && conArr[j].length == 3)){
                         conArr.splice(j,1);
                         j--;
                    }
                }
                break;
            case "-n":
                for(let j = 0; j < conArr.length; j++){
                    conArr[j] = num+". "+conArr[j];
                    num++;
                }
               
                break;
            case "-b":
                for(let j = 0; j < conArr.length; j++){
                    if(conArr[j] != ''){
                        conArr[j] = num+". "+conArr[j];
                        num++;
                    }
                }
                break;
            default:
                console.log("No such option available");
                return;
        }
       
    }
    if(areOp){
        for(let j = 0; j < conArr.length; j++){
            console.log(conArr[j]);
        }
    }
    else{
        console.log(content);//if no options
    }    
    console.log();
}




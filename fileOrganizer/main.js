#!/usr/bin/env node

let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
const { organizeKey } = require("./commands/organize");
let organizeObj = require("./commands/organize");
let treeObj = require("./commands/tree");

let command = inputArr[0];

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    imgs: ['png', 'jpg','jpeg','webp'],
    codes: ['js','py','c','java','cpp']
}

switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;

    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;

    case "help":
        helpObj.helpKey();
        break;

    default:
        console.log("Please enter valid command");
        break;
}






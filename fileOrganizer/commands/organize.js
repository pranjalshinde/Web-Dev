let fs = require("fs");
let path = require("path");
//organize function
function organizeCom(dirPath){
    let destPath;
    if(dirPath == undefined){
        destPath = process.cwd();
        return;
    }
    else{
        
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            destPath = path.join(dirPath, "organized_files");
            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath);
            }
        }
        else{
            console.log("Kindly enter correct dirPath");
            return;
        }
        organizeHelper(dirPath, destPath); //copy files to organized folder
    }
}

function organizeHelper(src, dest){
    let childName = fs.readdirSync(src);
    for(let i = 0; i < childName.length; i++){
        let childAdress = path.join(src, childName[i]);
        let isFile = fs.lstatSync(childAdress).isFile();
        if(isFile){
            let category = getCategory(childName[i]);
            // console.log(childName[i],"belongs to -> ",category);
            let categoryPath = path.join(dest, category);
            sendFiles(childAdress, categoryPath);
        }
    }
}

function sendFiles(src, dest){
    let isCreated = fs.existsSync(dest);
    if(isCreated == false){
        fs.mkdirSync(dest);
    }
    let fileName = path.basename(src);
    let destPath = path.join(dest, fileName);
    fs.copyFileSync(src, destPath);
    fs.unlinkSync(src);
}

function getCategory(fileName){
    let ext = path.extname(fileName);
    ext = ext.slice(1);
    for(let type in types){
        let currArr = types[type];
        for(let i = 0; i < currArr.length; i++){
            if(ext == currArr[i]){
                return type;
            }
        }
    }
    return 'others';
}

module.exports = {
    organizeKey: organizeCom
}
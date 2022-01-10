//help function
function helpCom(){
    console.log(`
        Commands listed:
            node fileName tree "path";
            node fileName organize "path;
            node fileName help;
    `)
}

module.exports = {
    helpKey: helpCom
}
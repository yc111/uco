const fs = require('fs');
const path = require('path');

let dir = path.resolve(__dirname);
let destPath = path.resolve(__dirname, '../', 'assets/linklist.json');

fs.readdir(dir, ((err, data) => {
    if(err) {
        throw new Error(err);
    }
    let list = [];
     data.forEach( item => {
         let stats = fs.lstatSync(path.resolve(__dirname, item));
         if(stats.isDirectory()) {
            list.push({text: item})
        }
    })
    fs.writeFile(destPath, JSON.stringify(list));
    console.log(`${destPath} \r\n success! \r\n `);
}))
const fs = require('fs');
const path = require('path');

let dir = path.resolve(__dirname);

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
    fs.writeFile(path.resolve(__dirname, '../', 'assets/linklist.json'), JSON.stringify(list));
}))
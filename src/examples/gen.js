const {lstatSync} = require('fs');
const fs = require('fs').promises;
const path = require('path');

let dir = path.resolve(__dirname);

fs.readdir(dir).then( data => {
    let list = [];
     data.forEach( item => {
         let stats = lstatSync(path.resolve(__dirname, item));
         if(stats.isDirectory()) {
            list.push({text: item})
        }
    })
    fs.writeFile(path.resolve(__dirname, '../', 'assets/linklist.json'), JSON.stringify(list));
}).catch(e => {
    throw new Error(e);
})
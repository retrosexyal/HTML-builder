const fs = require('fs');
const path = require('path');
const process = require('process');
fs.open(path.join(__dirname , 'text.txt'), 'w', (err) => {
    if(err) throw err;
    console.log('Введите текст для записи в файл, exit для выхода');
});
process.stdin.on('data', data=>{
    if (data.toString().trim() === 'exit') {
        console.log('Прощайте');
        process.exit()};  
    fs.appendFile(path.join(__dirname , 'text.txt'), data.toString(), (err)=>{
        if(err) throw err;
    });
});
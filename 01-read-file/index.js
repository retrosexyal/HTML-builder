const fs = require('fs');
const path = require('path');
const textFile = path.join(__dirname , 'text.txt');
const stream = new fs.ReadStream(textFile);
stream.on('error', (err)=>{
    console.log(err);
})

stream.on('readable', ()=>{
    const data = stream.read();
    console.log(data.toString());
    stream.destroy();
});


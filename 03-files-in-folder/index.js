console.log('################')
const fs = require('fs');
const path = require('path');
const pathToFolder = path.join(__dirname, '/secret-folder');
fs.readdir(pathToFolder,{ withFileTypes: true }, (err, files)=>{
    if (err)
    console.log(err);
  else {
    files.forEach(file => {    
      if (file.isFile()){      
        fs.stat(path.join(pathToFolder, file.name), (error, stats)=>{
          if (error) {
            console.log(error);
          } else {
            const fileExt = path.extname(file.name).split('.')[1];
            const fileName = file.name.split('.')[0];
            const fileSize = stats.size;
            console.log(`${fileName} - ${fileExt} - ${fileSize}b`);
          }
        });
        
      }
    });
    };
});
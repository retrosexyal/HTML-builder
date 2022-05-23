const fs = require('fs');
const path = require('path');
const pathToFolder = path.join(__dirname, '/styles');
fs.open(path.join(__dirname , '/project-dist/bundle.css'), 'w', (err) => {
  if(err) throw err;
});
fs.readdir(pathToFolder,{ withFileTypes: true }, (err, files)=>{
    if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (path.extname(file.name) == '.css'){      
        fs.readFile(path.join(pathToFolder, file.name), 'utf-8', (err, data)=>{
          if (err){
            console.log(err);
            return;
          } else{
            fs.appendFile(path.join(__dirname , '/project-dist/bundle.css'), data, (err)=>{
              if(err) throw err;
          });
          };
        });      
      };
    });
    };
});
const fs = require('fs');

// fs.writeFile('myFile.txt','Code is  new testing',()=>{
//     console.log('File Created')
// })

// fs.appendFile('MyCode.txt','Code testing with node',function(){
//     console.log('File appended')
// })

// fs.readFile('MyCode.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// fs.rename('MyCode.txt','MyCode2.txt',(err)=>{
//     if(err) throw err
//     console.log('File Renamed')
// })

fs.unlink('myFile.txt',() => {
    console.log('File Deleted')
})
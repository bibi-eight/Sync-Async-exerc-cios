const fs = require('fs');

const archives = ['aquivo1.txt', 'arquivo2.txt', 'arquivo3.txt', 'arquivo4.txt', 'arquivo5.txt',]
const data = ['Livros', 'Músicas', 'Filmes', 'Séries', 'Animes']

for(var i = 0; i< archives.length; i++)
{
    fs.writeFile(archives[i], data[i], (err)=>{
        if(err){
            console.log(err);
        }
    })
    fs.readFile(`./${archives[i]}`, 'utf-8', (err, data)=>{
        console.log(data);
    });
}
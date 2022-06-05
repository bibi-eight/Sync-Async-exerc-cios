const fs = require('fs');

const archives = ['aquivo1.txt', 'arquivo2.txt', 'arquivo3.txt', 'arquivo4.txt', 'arquivo5.txt',]
const data = ['Livros', 'Músicas', 'Filmes', 'Séries', 'Animes']

for(var i = 0; i< archives.length; i++)
{
    fs.writeFileSync(archives[i], data[i]);
    const file = fs.readFileSync(`./${archives[i]}`, {encoding: 'utf-8'});
    console.log(file);
}
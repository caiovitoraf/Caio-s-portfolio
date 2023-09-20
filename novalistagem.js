const fs = require('fs');
const path = require('path');

const pastaDeArquivos = 'C:/Users/caiov/caio-s-portfolio/Portfólio - fotografia'; 

fs.readdir(pastaDeArquivos, (err, arquivos) => {
  if (err) {
    console.error('Erro ao ler a pasta de arquivos:', err);
    return;
  }

  arquivos.forEach((arquivo) => {
    const nomeDoArquivo = arquivo;
    const extensao = path.extname(arquivo);
    const tag = `<img src="Portfólio - fotografia/${nomeDoArquivo}" alt="missing art" class="zoomable" />`;
    console.log(tag);
  });
});

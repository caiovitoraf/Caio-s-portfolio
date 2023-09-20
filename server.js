const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, './')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'cher.html'));
});

// Rota para listar os nomes de arquivos da pasta 'pics'
app.get('/getFiles', (req, res) => {
    const picsDir = path.join(__dirname, 'pics');

    const files_to_ignore = [
        'IMG_9090 (1).jpg',
        'IMG_6239(1).jpg',
        'novo ME.jpg',
        'IMG_8100.jpg'
    ]

    fs.readdir(picsDir, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao listar arquivos.');
        } else {
            // Filtrar os arquivos para ignorar os especificados em 'files_to_ignore'
            const filteredFiles = files.filter(file => !files_to_ignore.includes(file));
            res.json(filteredFiles);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
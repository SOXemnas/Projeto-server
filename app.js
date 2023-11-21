const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('meu primeiro servidor');
})

const porta = 3000

app.listen(porta, () => {
    console.log(`Servidor on no endereço http://localhost:${porta}`);
})
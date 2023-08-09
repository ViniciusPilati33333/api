const { request, response } = require('express');

const express = require('express'); // importei o express

const routes = require("./routes")


const app = express(); //inicializei o express
app.use(express.json());

app.use(routes)



const PORT = 3333; // definindo numero da porta que a api vai ficar esperando requisições e devolver as respostas

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // fique escutando(listen) e quando a aplicação iniciar execute a função do console.log
require("express-async-errors")

const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");
const cors = require("cors");

//const { request, response } = require('express');
const express = require('express'); // importei o express
const routes = require("./routes")
migrationsRun();

const app = express(); //inicializei o express
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));


app.use(routes)

app.use(( error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error", 
            message: error.message
        });

    };

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server error"
    });

});


const PORT = 3333; // definindo numero da porta que a api vai ficar esperando requisições e devolver as respostas

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // fique escutando(listen) e quando a aplicação iniciar execute a função do console.log
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://mongoadmin:mongoadmin@cluster0-shard-00-00-8yykh.mongodb.net:27017,cluster0-shard-00-01-8yykh.mongodb.net:27017,cluster0-shard-00-02-8yykh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para adição, delete)
//req.body = Acessar o corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3000);
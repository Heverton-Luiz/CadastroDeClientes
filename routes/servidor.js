const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const http = require('http');
const { error } = require('console');
const app = express();
const path = require('path');
//const dbs = require('mysql')

// Define a pasta "public" como o diretório de arquivos estáticos
app.use(express.static('public'));

//configurando o servidor SQL | configuração do servidor sql
const db = mysql.createConnection({
   user: 'root',
   password: 'Gamer0690!',
   database: 'loja'
});

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
/*
dbs.Promise = global.Promise;
async () => {
   await dbs.connect("Mysql://127.0.0.1:27017/", {
      useNewUrlParser: true 
   }).then(() => {
      console.log("Deu certo")
   }).catch((err) => {
      console.log("Conexão Bem-sucedida com sucesso!!!"+err)
   })
}*/

/*
app.post('/cadastro_clientes', (req, res) => {
   const a = { name, quantity, value, parts, description, plate, vehicleType } = req.body

   let sql = `INSERT INTO Clientes (nome, quantidade, valor , peças, descricao, placa, tipo_veiculo)
   VALUES(
      nome
   )`
   }
)
*/

const host = 'localhost'
const Port = 8000;
const requestListener = function (req, res) {
   res.writeHead(200);
      res.end("Conectadinho! !");
}; //Botando o servidor pra rodar na port 8000;
const server = http.createServer(requestListener);
server.listen(Port, host, () => { //Função callback
   console.log(`Servidor RODANDO MUITO no emdereço http://${host}:${Port}`) //Função callback
});
/* ARQUIVO PRINCIPAL JAVASCRIPT 
Obs: Onde se passa todas as funcionaldades do projeto
*/
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./backend/routes/servidor');
const path = require('path');

// Define a pasta "public" como o diretório de arquivos estáticos
app.use(express.static('public'));

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/cadastro_clientes', (req, res) => {
   const a = { nome, quantity, value, parts, description, plate, vehicleType } = req.body

   const sql = `INSERT INTO Clientes (nome, quantidade, valor , peças, descricao, placa, tipo_veiculo)
   VALUES(
      nome: 
   )`
   }
)

function submitForm() {
   var form = document.getElementById('customerForm');
   var table = document.getElementById('customerTable');
   var list = document.getElementById('customerList');

   var newRow = list.insertRow(list.rows.length);

   for (var i = 0; i < form.length - 1; i++) {
      var cell = newRow.insertCell(i);
      cell.innerHTML = form.elements[i].value;
   }

   form.reset();
}

app.use('/routes', routes);


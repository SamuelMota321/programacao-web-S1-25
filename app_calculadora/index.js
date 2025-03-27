const express = require('express');
const app = express();
const porta = 3000;

const calculadora = require('./calculadora');

app.get('/somar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.somar(a, b);
  res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.subtrair(a, b);
  res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.multiplicar(a, b);
  res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.dividir(a, b);
  res.send(`Resultado da divisão: ${resultado}`);
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta "http://localhost:${porta}/"`);
});

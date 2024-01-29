const express = require('express');
const app = express();

const estatisticasPorEstado = require('../services/estatistica');
const alertasRecentes = require('../services/alertas');
const dadosGerais = require('../data/data_simulado');

// Rota para dados gerais
app.get('/dados-gerais', (req, res) => {
  res.json(dadosGerais);
});

// Rota para alertas recentes
app.get('/alertas-recentes', (req, res) => {
  res.json(alertasRecentes);
});

// Rota para estatísticas por estado
app.get('/estatisticas-por-estado', (req, res) => {
  res.json(estatisticasPorEstado);
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
const express = require('express');
const Calculadora = require('../controllers/Calculadora')

const routes = express.Router();

routes.get('/somar', Calculadora.somar);
routes.get('/subtrair', Calculadora.subtrair);
routes.get('/dividir', Calculadora.dividir);
routes.get('/multiplicar', Calculadora.multiplicar);
routes.get('/raizquadrada', Calculadora.raizquadrada);
routes.get('/potencia', Calculadora.potencia);
routes.get('/mediaaritmetica', Calculadora.mediaaritmetica);
routes.get('/mediaharmonica', Calculadora.mediaharmonica);
routes.get('/moda', Calculadora.moda);

module.exports = routes;
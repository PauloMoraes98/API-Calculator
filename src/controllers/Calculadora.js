const { sqrt, pow } = require('mathjs')

module.exports = {
    somar(req, res) {
        const {
            value1,
            value2
        } = req.body;

        const operacao = value1 + value2
        
        return res.json(operacao);
    },

    subtrair(req, res) {
        const {
            value1,
            value2
        } = req.body;

        const operacao = value1 - value2
        
        return res.json(operacao);
    },

    dividir(req, res) {
        const {
            value1,
            value2
        } = req.body;

        const operacao = value1 / value2
        
        return res.json(operacao);
    },

    multiplicar(req, res) {
        const {
            value1,
            value2
        } = req.body;

        const operacao = value1 * value2
        
        return res.json(operacao);
    },

    raizquadrada(req, res) {
        const {
            value1
        } = req.body;

        const operacao = sqrt(value1);
        
        return res.json(operacao);
    },

    potencia(req, res) {
        const {
            value1,
            value2
        } = req.body;

        const operacao = pow(value1, value2)
        
        return res.json(operacao);
    },

    mediaaritmetica(req, res) {
        const {
            value1,
            value2,
            value3
        } = req.body;

        const operacao = (value1 + value2 + value3)/3
        
        return res.json(operacao);
    },

    mediaharmonica(req, res) {
        const {
            value1,
            value2,
            value3
        } = req.body;

        const operacao = (3/((1/value1) + (1/value2) + (1/value3)))
        
        return res.json(operacao);
    },

    moda(req, res) {
        const {
            value1,
            value2,
            value3
        } = req.body;

        var vet = [value1, value2, value3];

        var repeated = [];

        var operacao = vet.filter(function(elemento, i) {
            if (vet.indexOf(elemento) !== i){
                repeated.push(elemento)
            }
            return vet.indexOf(elemento) !== i;
        });

        console.log(operacao)
        return res.json(operacao);
    },
};
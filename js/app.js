/*Começo do código*/
/*Leitura de entradas*/
const readLine = require('readLine-sync');
/*Valor padrão*/
const COMISSAO = 0.15;
const SALARIO_MINIMO = 1045;

var flag = 1; /*Flag para a estrutura de repetição no cadastro*/
var vendedores = [];
var nome;
var salarioFixo;
var totalVendas;
var salarioTotal;

/*Pega e valida os dados de cadastro de um novo vendedor, ou seja, aqui criamos um vendedor*/
function criarVendedor() {
    nome = null;
    salarioFixo = null;
    totalVendas = null;
    salarioTotal = null;

    while (nome == null || nome.trim().length == 0) {
        nome = readLine.question("Informe o nome do vendedor (não pode ser vazio): ");
    }

    /*isNaN seria para evitar entradas que não sejam númericas, NaN significa → Not-A-Number*/
    while (salarioFixo == null || salarioFixo < SALARIO_MINIMO || isNaN(salarioFixo)) {
        salarioFixo = Number(readLine.question("Salário fixo do vendedor (não pode ser vazio nem menor que um salário mínimo): "));
    }

    while (totalVendas == null || totalVendas < 0 || isNaN(totalVendas)) {
        totalVendas = Number(readLine.question("Total de vendas efetuadas (não pode ser vazio): "));
    }

    /*Convertemos para double, pois pelas variáveis não terem sido tipadas estavam sendo tratadas como String, ou seja, ao invés de somar tínhamos concatenação de literais*/
    salarioTotal = parseFloat((salarioFixo + parseFloat(totalVendas * COMISSAO)).toFixed(2));
    /*o toFixed nos permite escolher quantas casas queremos após a vírgula*/
}

while (flag == 1) {
    criarVendedor();
    vendedores.push({
        nome,
        salarioFixo,
        totalVendas,
        salarioTotal
    });
    flag = readLine.question("Deseja continuar a cadastrar vendedores?\n Digite '1' para SIM e qualquer outra tecla para NÃO: ");
}

console.table(vendedores);
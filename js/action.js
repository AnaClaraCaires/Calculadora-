let tela = document.getElementById("i_tela");

function add_numero(numero){
    tela.value += numero;
}

function add_operador(operador){
    tela.value += ' '+operador+' ';
}
function add_pontos(){
    if(!tela.value.includes('.')){
        tela.value += '.';
    }
}
function limpar_tela(){
    tela.value = '';
}
function apagar(){
    tela.value = tela.value.slice(0, -1);
}

function calcular(){
    //if e else com tratamento de excessões
    try{
        //remover espacos
        let expressao = tela.value.replace(/ /g, '');
        // eval resolve a conta
        //'eval' = aceita funcoes javaScript, podendo abrir brechas
        let resultado = eval(expressao);
        tela.value=resultado;
    }catch(e){
        tela.value = 'Erro';
    }
}
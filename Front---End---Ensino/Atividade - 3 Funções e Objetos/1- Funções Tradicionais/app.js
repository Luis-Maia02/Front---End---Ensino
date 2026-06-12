function saudacao (nome){
    console.log(`Olá, ${nome} Bem-vindo ao sistema.`);

}
function ehpositivo (numero){
    if (numero < 0){
        return false;
    }else return true;

}
function calcularArea(largura, altura){
    let resultado = largura * altura;
    return resultado;
}

saudacao("bloobblum");
console.log (ehpositivo (10));
console.log (ehpositivo (-10));
console.log (calcularArea (5,5));


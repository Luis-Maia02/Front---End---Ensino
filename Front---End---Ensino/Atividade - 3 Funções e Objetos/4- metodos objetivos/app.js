const calculadora = {
    historico: [],
    somar: function(a, b) {
        const resultado = a + b;
        this.historico.push(resultado);
        return resultado;
    },
    subtrair: function(a, b) {
        const resultado = a - b;
        this.historico.push(resultado);
        return resultado;
    },
    verHistorico: function(){
        console.log("---- Historico ----");
        for(let i = 0; i < this.historico.length; i++){
            console.log(`[${i+1}`, this.historico);
        }
    },
};
console.log(calculadora.somar(2, 2));
console.log(calculadora.subtrair (4, 4));
console.log(calculadora.verHistorico());
function criarPersonagem(nome, classe, nivel){
    return {
        nome: nome,
        classe: classe,
        nivel: nivel,
        hp: nivel * 10,

        apresentar() {
            console.log(`${this.nome} é um ${this.classe} nível ${this.nivel} com ${this.hp} HP`);
        }
    };
}
const Personagem1 = criarPersonagem("BloobBlum", "Guerreiro", 9);
const Personagem2 = criarPersonagem("Blooba", "Mago", 12);

Personagem1.apresentar();
Personagem2.apresentar();
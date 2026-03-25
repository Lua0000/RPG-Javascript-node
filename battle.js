const prompt = require('prompt-sync')();

class Personagem {
    constructor(nome, hp, atk, def) {
        this.nome = nome;
        this.hp = hp;
        this.hpMax = hp;
        this.atk = atk;
        this.def = def;
        this.inventario = [
            { nome: 'Pocao de Cura', tipo: 'cura', valor: 30, qtd: 2 },
            { nome: 'Pergaminho de Forca', tipo: 'buff_atk', valor: 10, qtd: 1 }
        ];
    }

    atacar(alvo) {
        let variacao = Math.floor(Math.random() * 5);
        let dano = Math.max(1, (this.atk + variacao) - alvo.def);
        alvo.hp -= dano;
        console.log(`\n[ATAQUE] ${this.nome} atingiu ${alvo.nome} causando ${dano} de dano.`);
    }

    usarItem(index) {
        let item = this.inventario[index];
        if (!item || item.qtd <= 0) {
            console.log(`\n[AVISO] Item invalido ou esgotado.`);
            return false;
        }

        item.qtd--;
        if (item.tipo === 'cura') {
            this.hp = Math.min(this.hpMax, this.hp + item.valor);
            console.log(`\n[ITEM] ${this.nome} usou ${item.nome} e recuperou ${item.valor} HP.`);
        } else if (item.tipo === 'buff_atk') {
            this.atk += item.valor;
            console.log(`\n[BUFF] ${this.nome} usou ${item.nome}. Ataque aumentado em ${item.valor}.`);
        }
        return true;
    }
}

function iniciarBatalha() {
    const jogador = new Personagem("Heroi", 100, 25, 10);
    const inimigo = new Personagem("Inimigo", 220, 20, 8);

    console.log("--- Inicio do Combate ---");

    while (jogador.hp > 0 && inimigo.hp > 0) {
        console.log(`\nStatus: ${jogador.nome} (${jogador.hp} HP) | ${inimigo.nome} (${inimigo.hp} HP)`);
        console.log("1. Atacar");
        console.log("2. Inventario");

        let acao = prompt("Escolha sua acao: ");

        if (acao === '1') {
            jogador.atacar(inimigo);
        } else if (acao === '2') {
            console.log("\nInventario:");
            jogador.inventario.forEach((item, i) => {
                console.log(`[${i}] ${item.nome} (Qtd: ${item.qtd})`);
            });
            let escolha = prompt("Selecione o item (ou 'S' para voltar): ");
            
            if (escolha.toUpperCase() !== 'S') {
                let sucesso = jogador.usarItem(parseInt(escolha));
                if (!sucesso) continue;
            } else {
                continue;
            }
        } else {
            console.log("\nAcao invalida.");
            continue;
        }

        if (inimigo.hp > 0) {
            inimigo.atacar(jogador);
        }
    }

    console.log("\n--- Fim de Jogo ---");
    if (jogador.hp > 0) {
        console.log(`Vitoria! ${jogador.nome} venceu o combate.`);
    } else {
        console.log(`Derrota. ${jogador.nome} foi abatido.`);
    }
}

iniciarBatalha();
## Simulador de Batalha RPG em JavaScript
Este projeto é um motor de combate por turnos desenvolvido para rodar em ambiente de terminal utilizando Node.js. O sistema simula uma luta entre um herói e um inimigo com atributos de RPG clássico e elementos visuais em texto.

Funcionalidades do Sistema
O simulador foi estruturado para oferecer uma experiência interativa com as seguintes características:

Atributos de Personagem: Gerenciamento de Pontos de Vida (HP), Poder de Ataque e Defesa.

Sistema de Inventário: Possibilidade de usar itens de cura ou itens de melhoria de status (buffs) durante o combate.

Lógica de Combate: O dano é calculado com base no ataque do emissor contra a defesa do receptor, incluindo uma variação aleatória para evitar resultados previsíveis.

Animação em Terminal: O código utiliza limpeza de buffer e atrasos controlados (delay) para simular o movimento dos personagens durante a ação de ataque.

## Pré-requisitos
Para executar este simulador, você precisa ter instalado:
1. Node.js: O ambiente de execução para JavaScript fora do navegador.
2. Biblioteca Prompt-Sync: Necessária para capturar as entradas do usuário no terminal.

## Estrutura do Código
O projeto está dividido em três pilares principais:

Classe Personagem: Define a estrutura de dados e os métodos (atacar e usar item) que os combatentes utilizam.

Sistema de Renderização: Funções responsáveis por desenhar os personagens em arte ASCII e gerenciar os espaços em branco para criar a ilusão de movimento.

Laço de Repetição (Game Loop): Uma estrutura while que mantém o jogo ativo enquanto ambos os personagens possuírem pontos de vida acima de zero.

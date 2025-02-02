# MontyHall
Código que simula o paradoxo de Monty Hall

## O que é o paradoxo?
O paradoxo consiste em um jogador que está participando de um programa onde pode ganhar um prêmio, nesse jogo o prêmio está atrás de uma de 3 portas, o jogador deve escolher uma porta e caso acerte a porta premiada ele ganhe o prêmio.
Porém, após escolher uma das portas, o apresentador irá abrir uma porta na qual não está o prêmio e não é a porta que você escolheu, oferecendo a possibilidade de você trocar de porta após a revelação de uma delas.
Ao contrário da crença comum, a chance não passa a ser 50%, e sim 66% caso você troque de porta.

## Por qual razão a chance não é 50%?
No cenário final, sempre temos 2 portas, uma com o prêmio e uma sem o prêmio, a razão pela chance de vitória não ser 50% se deve ao fato de que a chance de você ganhar trocando de porta é a mesma da chance de você ter errado a porta na sua primeira escolha.
A melhor maneira de entender o problema é elevando ele ao extremo, com 100 portas.
A chance de você acertar a porta correta é de 1% (1/100), porém, após o apresentador abrir as outras portas, ele obrigatoriamente vai deixar a porta com o prêmio caso você tenha escolhido a porta errada no início, nesse caso trocando de porta você vai ganhar desde que não tenha acertado a porta no começo do jogo.
Portanto, a chance no exemplo levado ao extremo é de 99% de ganhar se você trocar de porta, no exemplo comum é 66% (Chance de você ter errado ao escolher no início)

# Resumo
A chance de ganhar trocando a porta vai ser a chance de você ter errado no começo, devido a isso as chances não são 50%.

# Como o código funciona?
Esse código simula a execução do jogos diversas vezes, ao final da simulação ele informa a quantidade de vezes que o jogador ganhou a trocar de porta.

O código possui duas variáveis importantes, `GAMES` e `PORTS`, a primeira variável indica quantos jogos vão ser jogados, a segunda indica a quantidade de portas no jogo

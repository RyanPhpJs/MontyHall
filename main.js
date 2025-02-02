const GAMES = 1000; // Quantidade de jogos, mude esse numero para aumentar a quantidade de partidas simuladas
const PORTS = 3; // Quantidade de portas no jogo

function rand(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Status = {
  Win: 0,
  Loses: 0
}
/*
Para fins explicativos, a porta com o premio é aleatoria, porem o jogador sempre escolhe a poera 1 e muda para a porta restante
*/
function simulateGame(){
  const ports = Array(PORTS).fill(false);
  /*
  Aqui definimos uma porta aleatoria pra ser a com o premio, indices em programacao iniciam em 0, portando se tem 5 portas, os indices seriam 0, 1, 2, 3 e 4. 
  Devido a isso geramos um numero aleatorio entre 0 e a quantidade de portas - 1
  */
  const correctPort = rand(0, PORTS - 1);
  ports[correctPort] = true;
  
  /*
  Aqui simulamos a eliminacao de portas, para deixar apenas 2. como o jogador sempre escolhe a primeira porta, removemos todas as portas que nao sejam a primeira e a correta.
  Apenas filtrando a array causa um comportamento inesperado quando o jogador acerta a porta de primeira, seria como o apresentador abrisse todas as portas e deixasse apenas a que o jogador escolheu, devido a isso adicionamos uma porta falsa sempre que ocorrer esse comportamento.
  */
  const portsUpdated = ports.filter((v,i) => v === true || i === 0);
  if(portsUpdated.length === 1) portsUpdated.push(false);

  /*
  Devido a sempre sobrar duas portas, o jogador ganha se a porta restante (que nao seja a dele) for a porta com premio, entao verificamos isso
  */
  return portsUpdated[1] === true;
}

/**
 * Agora executamos o jogo repetidas vezes
 */
console.log("Executando as simulações");
for(let i=0; i<GAMES; i++){
  if(simulateGame()){
    Status.Win++
  } else {
    Status.Loses++
  }
}
console.log(`O jogador jogou ${GAMES} partidas`);
console.log(`Dessas partidas, ${Status.Win} foram vencidas (${((Status.Win/GAMES)*100).toFixed(1)}%)`)
console.log(`Dessas partidas, ${Status.Loses} foram peridas (${((Status.Loses/GAMES)*100).toFixed(1)}%)`)

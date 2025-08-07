function executarPush() {
  const frutas = ["🍎", "🍌"];
  frutas.push("🍇"); //Adiciona um elemento no final
  const resultado = frutas;
  document.getElementById("resultado-push").textContent = resultado;
}

function executarPop() {
  const array = ["🍎", "🍌", "🍇"];
  array.pop(); //Remove o último elemento
  const resultado = array;
  document.getElementById("resultado-pop").textContent = resultado;
}

function executarShift() {
  const array = ["🍎", "🍌", "🍇"];
  array.shift(); //Remove o primeiro elemento
  const resultado = array;
  document.getElementById("resultado-shift").textContent = resultado;
}

function executarUnshift() {
  const array = ["🍌", "🍇"];
  array.unshift("🍓"); //Adiciona um novo elemento no começo
  const resultado = array;
  document.getElementById("resultado-unshift").textContent = resultado;
}

function executarIncludes() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array.includes("🥝"); //Verifica se tem ou não um elemento
  document.getElementById("resultado-includes").textContent = resultado;
}

function executarReverse() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array.reverse(); //Inverter a ordem dos itens
  document.getElementById("resultado-reverse").textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  //ARROW FUNCTION
  //const resultado = array.sort(
  //function(a, b){
  //return a - b; // ex: a - b = 3 - 1, se o resultado for positivo (como é o caso), o b continua na frente, se o resultado for negativo como (a - b = 2 - 11), o b volta para o final da lista
  //}
  //);
  const resultado = array.sort((a, b) => b - a);
  document.getElementById("resultado-sort").textContent = resultado;
  const resultado2 = array2.sort().reverse();
  document.getElementById("resultado-sort2").textContent = resultado2;
}

function executarSlice() {
  const array = ["🍎", "🍌", "🍇", "🍓"];
  const resultado = array;
  document.getElementById("resultado-slice").textContent = resultado;
}

function executarSplice() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array;
  document.getElementById("resultado-splice").textContent = resultado;
}

function executarIndexOf() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array;
  document.getElementById("resultado-indexof").textContent = resultado;
}

function executarJoin() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array;
  document.getElementById("resultado-join").textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array.forEach(function (pegaItem) {
    console.log(pegaItem);
  });
  document.getElementById("resultado-foreach").textContent = resultado;
}

function executarMap() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array.map(function (pegaItem, index) {
    return `O item ${index} é ✅ ${pegaItem}`;
  });
  document.getElementById("resultado-map").textContent = resultado;
}

function executarMapHTML() {
  const dispositivos = ["🎮", "🕹️", "💻"];
  const resultado = dispositivos.map(pegaItem => `
    <h1> Produto em Promoção!</h1>
    <p> ${pegaItem}</p>
    `);
  document.getElementById("resultado-map-html").innerHTML =
    resultado.join("<br>");
}

function executarFilter() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array.filter(pegaItem => pegaItem === "🍎");
  document.getElementById("resultado-filter").textContent = resultado;
}

function executarFind() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array.find(pegaItem => pegaItem === "🍇");
  document.getElementById("resultado-find").textContent = resultado;
}

function executarFindIndex() {
  const array = ["🍎", "🍌", "🍇"];
  const resultado = array.findIndex(pegaItem => pegaItem === "🍇");
  document.getElementById("resultado-findIndex").textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((totalAcumulado, valorAtual) => {
    return totalAcumulado + valorAtual
  }, 0);
  document.getElementById("resultado-reduce").textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = "Resultado da operação every";
  document.getElementById("resultado-every").textContent = resultado;
}

function executarSome() {
  const array = ["🍎", "🍌", "🥝"];
  const resultado = "Resultado da operação some";
  document.getElementById("resultado-some").textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ["Zelda", "Mario", "Elden Ring", "Fortnite", "Minecraft"];
  const resultado = "Resultado da operação encadeada";
  document.getElementById("resultado-encadeamento").textContent =
    resultado.join(", ") || "Nenhum jogo encontrado";
}

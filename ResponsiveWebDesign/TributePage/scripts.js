array = [
  'Cerco de Alithia (221 a.C.)',
  'Cerco de Helmantice (220 a.C.)',
  'Cerco de Arbucala (220 a.C.)',
  'Cerco de Sagunto (219 a.C.)',
  'Batalha do Ródano (218 a.C.)',
  'Batalha de Ticino (218 a.C.)',
  'Batalha do Trébia (218 a.C.)',
  'Batalha do Lago Trasimeno (217 a.C)',
  'Batalha do Campo Falerno (217 a.C.)',
  'Batalha de Gerônio (217 a.C.)',
  'Batalha de Canas (216 a.C.)',
  'Primeira batalha de Nola (216 a.C.)',
  'Segunda batalha de Nola (215 a.C.)',
  'Terceira batalha de Nola (214 a.C.)',
  'Batalha de Taranto (212 a.C.)',
  'Primeira Batalha de Cápua (212 a.C.)',
  'Batalha do Silaro (212 a.C)',
  'Primeira Batalha de Herdônia (212 a.C.)',
  'Segunda Batalha de Cápua (211 a.C.)',
  'Segunda Batalha de Herdônia (210 a.C.)',
  'Batalha de Numistro (210 a.C.)',
  'Batalha de Canúsio (209 a.C.)',
  'Batalha de Grumento (207 a.C.)',
  'Batalha de Crotona (204 a.C.)',
  'Batalha de Zama (202 a.C.)',
  'Batalha do Eurimedonte (190 a.C.)',
  'Batalha do Mar de Marmara (184 a.C.)',
  ]
const createBattles = (array) => {
  const listOfBattles = document.getElementById('battles');
  array.forEach((element) => {
    const singleBattle = document.createElement('li');
    singleBattle.innerText = element;
    listOfBattles.appendChild(singleBattle);
  })
}

createBattles(array)

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [L, ...datas] = fs.readFileSync(filePath).toString().split('\n');

function solution([n, m], datas) {
  const pokemonMap = new Map();
  const pokemonDatas = datas.splice(0, n);

  for (
    let pokemonId = 0, pokemonCount = pokemonDatas.length;
    pokemonId < pokemonCount;
    pokemonId++
  ) {
    const currentPokemon = pokemonDatas[pokemonId];
    pokemonMap.set(pokemonId + 1, currentPokemon);
    pokemonMap.set(currentPokemon, pokemonId + 1);
  }

  const problems = datas;
  const answer = [];

  for (
    let problemIndex = 0, problemCount = problems.length;
    problemIndex < problemCount;
    problemIndex++
  ) {
    const currentProblem = problems[problemIndex];
    const numberProblem = Number(currentProblem);
    const isNumberic = !Number.isNaN(numberProblem);

    answer.push(pokemonMap.get(isNumberic ? numberProblem : currentProblem));
  }

  console.log(answer.join('\n'));
}

solution(
  L.split(' ').map(Number),
  datas.map((data) => data.trim())
);

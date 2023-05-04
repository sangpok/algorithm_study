const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, budgets, M] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n, budgets, m) {
  // console.log(n, budgets, m);

  let maxBudget = Number.MIN_SAFE_INTEGER;

  const budgetSum = budgets.reduce((a, b) => {
    if (maxBudget < b) {
      maxBudget = b;
    }

    return a + b;
  });

  if (budgetSum <= m) {
    console.log(maxBudget);
    return;
  }

  let [low, high] = [0, maxBudget];

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    let mutatedBudgetSum = 0;

    for (let budgetIndex = budgets.length; budgetIndex--; ) {
      const currentBudget = budgets[budgetIndex];

      mutatedBudgetSum += currentBudget > mid ? mid : currentBudget;
    }

    if (mutatedBudgetSum > m) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  console.log(high);
}

solution(Number(N), budgets.split(' ').map(Number), Number(M));

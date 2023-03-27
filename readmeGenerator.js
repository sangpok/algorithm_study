const fs = require('fs');

const solvedProblemDatas = [
  [
    '2023.03.20',
    [
      ['s4', '10773', '제로'],
      ['s5', '11651', '좌표 정렬하기 2'],
      ['s2', '18111', '마인크래프트'],
    ],
  ],
  [
    '2023.03.19',
    [
      ['s4', '2839', '설탕 배달'],
      ['s4', '4949', '균형잡힌 세상'],
      ['s5', '7568', '덩치'],
    ],
  ],
  [
    '2023.03.18',
    [
      ['s3', '1966', '프린터 큐'],
      ['s3', '2108', '통계학'],
      ['s2', '2805', '나무 자르기'],
    ],
  ],
  [
    '2023.03.16',
    [
      ['s2', '1654', '랜선 자르기'],
      ['s2', '1874', '스택 수열'],
      ['s3', '1929', '소수 구하기'],
    ],
  ],
  [
    '2023.03.15',
    [
      ['s4', '1436', '영화감독 숌'],
      ['b2', '15829', 'Hashing'],
    ],
  ],
  [
    '2023.03.14',
    [
      ['b3', '2292', '벌집'],
      ['s4', '2775', '부녀회장이 될테야'],
      ['b2', '2869', '달팽이는 올라가고 싶다'],
    ],
  ],
  [
    '2023.03.13',
    [
      ['b3', '1085', '직사각형에서 탈출'],
      ['s4', '11866', '요세푸스 문제 0'],
      ['b2', '2231', '분해합'],
    ],
  ],
  [
    '2023.03.12',
    [
      ['s4', '10828', '스택'],
      ['s4', '10845', '큐'],
      ['s4', '10866', '덱'],
      ['s5', '11650', '좌표 정렬하기'],
    ],
  ],
  [
    '2023.03.11',
    [
      ['s4', '2164', '카드2'],
      ['s5', '2751', '수 정렬하기 2'],
      ['s4', '9012', '괄호'],
    ],
  ],
  [
    '2023.03.10',
    [
      ['s4', '10814', '나이순 정렬'],
      ['s4', '10816', '숫자 카드 2'],
      ['s4', '1978', '소수 찾기'],
    ],
  ],
  [
    '2023.03.09',
    [
      ['s4', '1018', '체스판 다시 칠하기'],
      ['s5', '1181', '단어 정렬'],
      ['s4', '1920', '수 찾기'],
    ],
  ],
  [
    '2023.03.08',
    [
      ['b1', '1259', '팰린드롬수'],
      ['b1', '2609', '최대공약수와 최소공배수'],
      ['b2', '2798', '블랙잭'],
      ['b3', '4153', '직각삼각형'],
      ['b3', '10250', 'ACM 호텔'],
      ['b1', '11050', '이항 계수 1'],
    ],
  ],
  [
    '2023.03.06',
    [
      ['새싹', '10951', 'A+B - 4'],
      ['새싹', '11654', '아스키 코드'],
      ['b4', '11720', '숫자의 합'],
      ['b2', '1152', '단어의 개수'],
      ['b1', '1157', '단어 공부'],
      ['b1', '1546', '평균'],
      ['새싹', '2475', '검증수'],
      ['b2', '2577', '숫자의 개수'],
      ['새싹', '2741', 'N 찍기'],
      ['b4', '2742', '기찍 N'],
      ['b2', '2908', '상수'],
      ['b2', '3052', '나머지'],
      ['새싹', '10809', '알파벳 찾기'],
      ['새싹', '10871', 'X보다 작은 수'],
    ],
  ],
  [
    '2023.03.05',
    [
      ['b3', '2562', '최대값'],
      ['b2', '2675', '문자열 반복'],
      ['b2', '2920', '음계'],
      ['b2', '8958', 'OX퀴즈'],
      ['b3', '10818', '최소, 최대'],
    ],
  ],
];

const tierToId = (tier) => {
  if (tier === '새싹') {
    return 'sprout';
  }

  const tierMap = {
    b: 0,
    s: 5,
    g: 10,
    p: 15,
    d: 20,
    r: 25,
  };

  const [tierChar, tierLevel] = tier;
  const tierId = tierMap[tierChar] + (6 - Number(tierLevel));

  return tierId;
};
// https://github.com/sangpok/algorithm_study/blob/main/2869/solution.js
// https://www.acmicpc.net/status?from_mine=1&problem_id=1181&user_id=sangpok
const problemTemplate = (date, tier, id, title) => `    <tr>
      <td align="center">
        ${date}
      </td>
      <td align="center">
        <img src="https://static.solved.ac/tier_small/${tierToId(
          tier
        )}.svg" height="19px" width="19px" />
      </td>
      <td>
        <a href="https://www.acmicpc.net/status?from_mine=1&problem_id=${id}&user_id=sangpok">${id}</a>
      </td>
      <td>
        <a href="https://github.com/sangpok/algorithm_study/blob/main/${id}/solution.js">${title}</a>
      </td>
    </tr>`;

const codeTemplate = (problemDOM) => `<table align="center">
  <thead>
    <th colspan="4">
      현재까지 푼 문제들
    </th>
    <tr>
      <th>푼 날짜</th>
      <th>등급</th>
      <th align="left">번호</th>
      <th align="left">문제 제목</th>
    </tr>
  </thead>
  <tbody>
${problemDOM}
  </tbody>
</table>`;

const defaultReadme = `# algorithm_study

<div align="center">
  <p>
    <a href="https://solved.ac/class">solved.ac</a>의 Class 문제를 공부합니다.
  </p>
  <img src="https://static.solved.ac/class/c2s.svg" height="128px" width="128px" style="pointer-events: none"/>
  <h3>현재 <span style="font-weight: 800; color: lightblue;">Class2++</span></h3>
</div>

<br>

`;

const generateDOM = (problems) => {
  const text =
    defaultReadme +
    codeTemplate(
      problems
        .map(([date, problem]) =>
          problem
            .map(([tier, id, title], index) => {
              return problemTemplate(!index ? date : '-', tier, id, title);
            })
            .join('')
        )
        .join('')
    );

  fs.writeFileSync('README.md', '\ufeff' + text, { encoding: 'utf8' });
};

generateDOM(solvedProblemDatas);

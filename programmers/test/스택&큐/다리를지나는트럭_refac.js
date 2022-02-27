function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const bridge = [ ];
  let bridgeWeight = 0;


  return time;
}

const testCase = [
  [2, 10, [7, 4, 5, 6], 8],
  [100, 100, [10], 101],
  [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 110],
];

const inputCase = testCase.map(el => solution(el[0], el[1], el[2]));

// Run Code
console.log(
  testCase.map((el,idx) => inputCase[idx] === el[el.length - 1]),
  `\r\n 테스트 케이스 길이 : ${testCase.length} ${testCase.map((el,idx) => `\n기대값 : ${el[el.length-1]}\n실제값 : ${inputCase[idx]}`)}`
);


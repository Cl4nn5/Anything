function solution(bridge_length, weight, truck_weights) {
  let time = 0;

  const bridge = [];
  let bridgeWeight = 0;
  // ! FIFO : bridge
  // 1. 대기 트럭이 다리에 탄다. : 1초
  // 2. 트럭의 이동 행위란 => [truck_weights.shift, bridge.push, bridge.shift,  time{탑승:1, 이동시간:다리길이}]

  while (truck_weights.length > 0 ) {
    time++; // 다리에 대기트럭 입차
    if (bridge.length === bridge_length) {
      bridgeWeight -= bridge.shift(); // 트럭 하차
    }

    if (bridgeWeight + truck_weights[0] > weight) {
      bridgeWeight -= bridge.shift(); // 트럭 하차
      continue;
    }
    let truckWeight = truck_weights.shift();
    bridge.push(truckWeight); // 다리에 트럭 입차
    bridgeWeight += truckWeight;
  };

  return time + bridge_length;
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


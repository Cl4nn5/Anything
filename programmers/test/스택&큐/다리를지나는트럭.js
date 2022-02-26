function solution(bridge_length, weight, truck_weights) {
  let time = 0;

  const watingTruck = Array.from(truck_weights);
  const truckOnBridge = [];
  const truckAfterCross = [];
  // ! 트럭의 무개와 개수
  // 1. 대기 트럭이 다리에 탄다. : 1초
  // 2. 트럭의 이동시간 : 다리 길이

  do {
    let tempTruck = truck_weights.shift()
    truckOnBridge.push(tempTruck);
    
    time++;
  } while (truckOnBridge.length !== 0) {
    console.log(truckOnBridge.length);
    let weightOnBridge = truckOnBridge.reduce((sum, cur) => sum + cur, 0);
    if (weightOnBridge <= weight) {
      truckOnBridge.push(truck_weights.shift());
      time += bridge_length;
    } else {
      truckOnBridge.shift();
    }
  };
  

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


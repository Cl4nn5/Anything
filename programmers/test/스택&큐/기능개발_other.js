function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for(let i = 0, j = 0; i< days.length; i++){
      if(days[i] <= maxDay) {
          answer[j] += 1;
      } else {
          maxDay = days[i];
          answer[++j] = 1;
    }
    
    console.log(maxDay, days);
  }

  return answer;
}

console.log(
  `결과 값 :`, solution([93, 30, 55],[1, 30, 5],[2, 1])
)


// const testCase = [
//   [2, 10, [7, 4, 5, 6], 8],
//   [100, 100, [10], 101],
//   [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 110],
// ];

// const inputCase = testCase.map(el => solution(el[0], el[1], el[2]));

// // Run Code
// console.log(
//   testCase.map((el,idx) => inputCase[idx] === el[el.length - 1]),
//   `\r\n 테스트 케이스 길이 : ${testCase.length} ${testCase.map((el,idx) => `\n기대값 : ${el[el.length-1]}\n실제값 : ${inputCase[idx]}`)}`
// );

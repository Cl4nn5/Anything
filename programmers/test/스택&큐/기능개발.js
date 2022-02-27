function solution(progresses, speeds) {
  var answer = [];
  let working = [];
  
  let getClearCnt = (clearCnt = 0) => {
      if(progresses[0] >= 100){
          progresses.shift();
          speeds.shift();
          clearCnt++;
          return getClearCnt(clearCnt);
      }else if(clearCnt > 0){
          return clearCnt;
      }
  }
  
  while(progresses.length > 0){
      progresses = progresses.map((el,idx) => el+speeds[idx] <= 100 ? el+speeds[idx] : 100 );
      
      let tempCnt = getClearCnt();
      
      !!tempCnt === true ? answer.push(tempCnt) : false;
  }
  
  
  return answer;
}


const testCase = [
  [[93, 30, 55],[1, 30, 5],[2, 1]],
  [[95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1],[1, 3, 2]]
];

const inputCase = testCase.map(el => solution(el[0], el[1]));

// Run Code
console.log(
  testCase.map((el, idx) => {
    if (typeof el[el.length - 1] === "string" || typeof el[el.length - 1] === "number") {
      return inputCase[idx].join() === el[el.length - 1].join()
    } else if (Array.isArray(el[el.length - 1])) {
      return inputCase[idx].join() === el[el.length - 1].join()
    }
  }),
  `\r\n 테스트 케이스 길이 : ${testCase.length} ${testCase.map((el,idx) => `\n기대값 : ${el[el.length-1]}\n실제값 : ${inputCase[idx]}`)}`
);


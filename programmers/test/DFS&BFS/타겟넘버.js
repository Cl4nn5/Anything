function solution(numbers, target) {
  let answer = 0;
  
  // 왼쪽은 배열의 n번째 인자
  dfs(0,0);
  
  return answer;
  
  // setting
  function dfs(lv, sum){
      
      if(lv === numbers.length){
          if(sum === target){
              answer++;
          }
          // 멈춰!
          return 0;
      }
      
      dfs(lv+1, sum + numbers[lv])
      dfs(lv+1, sum - numbers[lv])
      
  };
}


const testCase = [
  [[1, 1, 1, 1, 1], 3,	5],
  [[4, 1, 2, 1], 4,	2],
]

const inputCase = testCase.map(el => solution(el[0], el[1]));

// Run Code
console.log(
  testCase.map((el, idx) => {
    if (typeof el[el.length - 1] === "string" || typeof el[el.length - 1] === "number") {
      return inputCase[idx] === el[el.length - 1]
    } else if (Array.isArray(el[el.length - 1])) {
      return inputCase[idx].join() === el[el.length - 1].join()
    }
  }),
  `\r\n 테스트 케이스 길이 : ${testCase.length} ${testCase.map((el,idx) => `\n기대값 : ${el[el.length-1]}\n실제값 : ${inputCase[idx]}`)}`
);

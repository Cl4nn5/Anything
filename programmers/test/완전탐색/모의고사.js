// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]

function solution(answers) {
  var answer = [];

  const GIVERS = [
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5],
  ]

  const answerCntArr = GIVERS.map(giver => answers.filter((as, idx) => as === giver[idx % giver.length]).length)

  
  let temp = answerCntArr.map((el, idx) => (el === Math.max(...answerCntArr)) ? answer.push(idx+1) : 0 );
  // console.log(answerCntArr);
  console.log(temp);

  return answer;
}

const testCase = [
  [[1,2,3,4,5], [1]],
  [[1,3,2,4,2], [1,2,3]],
]

// Run Code
console.log(
  testCase.map(el => solution(el[0]).join() === el[1].join()), `\r\n 테스트 케이스 길이 : ${testCase.length}`
)

function solution(brown, yellow) {

  //  가로 길이가 세로길이보다 이상이어야한다.
  //  [가로, 세로]
  var answer = [];

  let totalCnt = brown + yellow;
  const caseArr = [];

  for (let col = 3; col <= totalCnt; col++) {
    let row = totalCnt / col;

    if (row < 3) {
      continue;
    }
    
    if (col >= row && (row-2) * (col-2) === yellow) {
      answer.push(col)
      answer.push(row)
    }
  }

  return answer;
}


const testCase = [
  [10,  2,  [4, 3]],
  [8,   1,  [3, 3]],
  [24,  24, [8, 6]],
]

// Run Code
console.log(
  testCase.map(el => solution(el[0], el[1]).join() === el[el.length - 1].join())
    , `\r\n 테스트 케이스 길이 : ${testCase.length}`
)
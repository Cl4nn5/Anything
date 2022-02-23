function solution(numbers) {
  var answer = 0;

  // 1. numbers의 모든 경우의 수 만들기
  // 2. 소수 검증
  // 3. 중복제거
  // ! 일단 패스

  for (let i = 0; i < [...numbers].length; i++) {
    let fixed = '' + [...numbers][i];
    console.log(fixed)
  }



  return 1;
}

const testCase = [
  ["17", 1],
  ["011", 2],
]

// Run Code
console.log(
  testCase.map(el => solution(el[0]) === el[1]), `\r\n 테스트 케이스 길이 : ${testCase.length}`
)


// let num = 17;
// for (let i = 2; i < num; i++) {
//  console.log( num % i || false)
// }

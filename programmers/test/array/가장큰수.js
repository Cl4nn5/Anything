/* 
  TODO  가장 큰 수
  0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수

  ! 허리가 아파서 집중 안된다..

  ? Sample
  numbers = [6,10,2]
  return : 6210
*/

function solution(numbers) {
  var answer = '';

  // answer = numbers
  //   .map((a) => String(a))
  //   .sort((a, b) => (b + a) - (a + b))
  //   .join('');
  
  // * 리팩토링
  answer = numbers
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .join('');

  return Number(answer) === 0 ? "0" : answer;
}

const numbers = [6,10,2]
const numbers2 = [0,0,0]

console.log(
  solution(numbers)
)

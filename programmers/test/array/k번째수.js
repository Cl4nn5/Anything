/*
  TODO 
  i 에서 j 까지 자른 뒤 k 번째 수

  ? 매개변수 설명
  [i,j,k]를 원소로 하는 commands가 매개변수로 주어진다.
*/

const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
// TODO return [5,6,3]

function solution(array, commands) {
  var answer = [];
  const _array = array;

  return answer = commands.map(e => {
    const [i, j, k] = e;
    return _array.slice(i-1, j).sort((a, b) => a - b)[k-1]
  });
}
// return
console.log(
  solution(array, commands)
)
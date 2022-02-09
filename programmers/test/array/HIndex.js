/* 
  @param  citations [3, 0, 6, 1, 5]
  @param  return  3
*/

function solution(citations) {
  var answer = 0;

  let _citations = citations;
  let [i, h] = [citations.length, 0]

  let temp = _citations
    .sort((a,b) => b-a)
    .filter(el => {
      // console.log(el,h++)
      return el >= h;
    });
  // console.log(temp);

  return temp.length;
}

let citations = [3, 0, 6, 1, 5]

console.log(
  solution(citations)
)
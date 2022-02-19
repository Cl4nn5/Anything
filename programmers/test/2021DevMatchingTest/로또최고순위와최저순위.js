function solution(lottos, win_nums) {
    // 원본 보호
    let _lottos = Array.from(lottos);
    let _win_nums = Array.from(win_nums);
    
    // answer
    let [maxRank, minRank] = [0,0];

    // logic
    // 고정 랭킹
    let retCnt = _lottos
        //.filter(el => el !== 0)
        //.filter( el => _win_nums.some(e => e === el))
        .filter( el => _win_nums.includes(el))
        .length;
    // 변동 랭킹
    let zeroCnt = _lottos
        .filter(el => el === 0)
        .length;
    
    let getRanking = function(answerCnt){
        return answerCnt === 0 ? 6 : (7 - answerCnt)
    }
    
    maxRank = getRanking(retCnt + zeroCnt);
    minRank = getRanking(retCnt);
    
    
    return [maxRank,minRank];
}

const testCase = [
  [[44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19], [3, 5]],
  [[0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25], [1, 6]],
  [[45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35], [1, 1]]
]

// Run Code
console.log(
  testCase.map(el => solution(el[0], el[1]).join() === el[2].join()), `\r\n 테스트 케이스 길이 : ${testCase.length}`
)

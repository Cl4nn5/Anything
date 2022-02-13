class People{
  constructor(fName = '', lName = '', age) {
    this.fName = fName
    this.lName = lName
    this.age = age
    this[age] = '0'
  }
  introduce() {
    return `${this.fName}${this.lName}님의 나이는 ${this.age}입니다.`
  }
}

class Friend extends People{
  constructor(fName,lName, age, isBestFriend = false) {
    super(fName,lName, age)
    this.isBF = isBestFriend
  }

  // Override at js? 마치 @Override
  introduce(year = 0, isBf = this.isBf) {
    return `${isBf === true ? '나의 소중한 벗 ' + this.fName : ''}${this.lName}야 ${year ? year + '년 만이네 ' : ''}반가워`
  }
}


//  @param  파라메터 입력 구간
let isBF = true;
let kim = new People('김','홍제','34')
let fr1 = new Friend('김','철우','34', isBF)

kim.gender = (() => 'man')


// * 여기서부터 실행구간
console.log(kim)
console.log(fr1, '\n')

console.log(kim.introduce())
console.log(kim.gender())
// console.log(fr1.gender())  //  ERR
console.log(fr1.introduce(), fr1.isBF)
console.log(fr1.introduce(5, true))
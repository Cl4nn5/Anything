type MyType = string | number

let 이름: string[] = ["kim", null];
let 이름obj: { name?: MyType } = { name: "kim" };

export function 함수(x :number) :number {
  return x*2
}

함수(2)

type Member = [number, boolean];
let kim: Member = [123, true];

type Member2 = {
  [key: string]: string
}

let lee: Member2 = {
  name: 'hi',
  age : '123'
}

class User {
  name :string;
  constructor(name :string) {
    this.name = name;
  }
}

function add(num1 :number, num2: number){
  return num1 + num2
}

// add();
// add(1);
add(1,2);
// add(3,4,5);
// add("hello","world");

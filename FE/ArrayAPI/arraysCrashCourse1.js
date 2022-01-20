const a = ["A", "B", "C", "D"]

a.push("E")
a.push(...[1, 2])

const b = [
  ["A", "B"],
  [1,2]
]

b[0] = 1

console.log(a)
console.log(b)

a.reduce()
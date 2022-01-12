let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// forEach
// names.forEach((element, i) => {
//   console.log(element.toUpperCase(), 'forEach : ' + i)
// });

// map
let data1 = names.map((e, i) => {
  return e.toUpperCase();
})
let data2 = names.map((e, i) => {
  let initial = '';
  e.split(' ').forEach((nameItem) => (initial += nameItem[0]));
  
  return initial
})

// filter : true인 값만 뽑음
let data3 = names.filter(e => {
  let splitName = e.split("");
  return splitName.some( (letter,i) => letter == splitName[i+1])
})
// console.log('data1 :', data1);
// console.log('data2 :', data2);
console.log('data3 :', data3);

// some

// every

// find

// findIndex

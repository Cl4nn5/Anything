const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// 1.ES5  for
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// 1.ES6  foreach
// companies.forEach(company => console.log(company.name))

// 2.ES5  filter
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 20) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// 2.ES6  filter
// let canDrink = ages.filter(age => age >= 20);
// console.log(canDrink);

// const retailCompanies = companies.filter(company => {
//   if (company.category === 'Retail') { return true;}
// })

// const retailCompanies = companies.filter(company => company.category === "Retail");
// console.log(retailCompanies)

// const getEightCompanies = companies.filter(com => com.start >= 1980 && com.start < 1990)
// console.log(getEightCompanies)

// const lastedTenYears = companies.filter(com => com.end - com.start >= 10)
// console.log(lastedTenYears);

// 3.ES5  map
// const companyNames = companies.map(function (company) {
//   return company.name;
// })
// console.log(companyNames)

//  3.ES6 map
// const testMap = companies.map(com => `${com.name} [${com.start} ~ ${com.end}]`);
// console.log(testMap)

//  double map
// const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log(ageMap);

//  4.ES5 sort
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//  4.ES6 sort
// const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1))

// console.log(sortedCompanies);

// Sort ages
// const sortAges = ages.sort();
// console.log(sortAges)

// ? low overhead  : company start year sort
// const sortArr = companies.map((com, i) => {
//   return { idx: i, year: com.start }
// })
// console.log(sortArr)

//  5.ES5 reduce
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// let ageSum = ages.reduce((total, age) => total + age, 0);

// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0)

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)

// console.log(ageSum);

// console.log(totalYears);

// combine methods
// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .reduce((a, b) => a + b, 0);
//   ;

// console.log(combined)

const sortArr = ages.sort((a, b) => {
  console.log(a, b)
  return a - b;
});

console.log(ages);
console.log(sortArr);


const fruits = 'apple, melon, banana, cherry';

console.log(fruits.split(','));


let str = 'hi';
let str2 = new String('hi');
console.log(str, str2)

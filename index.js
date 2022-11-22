console.log('Hello')

const numbers = [10, 4, 100, -5, 54, 2]
const numberCub = numbers.map((item) => {
  return item ** 3
})
console.log(numberCub)

//1 Через цикл for
let sum2 = 0
for (let i = 0; i < numberCub.length; i++) {
  sum2 += numberCub[i]
}
console.log('Через цикл for', sum2)

//2 Через цикл for...of
let sum21 = 0
for (const item of numberCub) {
  sum21 += item
}
console.log('Через цикл for...of', sum21)

//3 Через метод forEach()
let sum31 = 0
const sum3 = numberCub.forEach((item) => {
  sum31 += item
})
console.log('Через метод forEach()', sum31)

//4 Через метод reduce()
const sum4 = numberCub.reduce((acc, item) => {
  return (acc += item)
}, 0)
console.log('Через метод reduce()', sum4) // 1158411

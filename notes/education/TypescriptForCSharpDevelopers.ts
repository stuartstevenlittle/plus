// class
class HelloWorld {
  sayHello() {
    console.log("Hello There")
  }
}

let helloWorld = new HelloWorld()
helloWorld.sayHello()


// function
function stringDemo(whatToSay: string) {
  console.log(whatToSay)
}
stringDemo('Hi')

// enums
function enumDemo() {
  enum temp { cold, hot }
  let currentTemp = temp.cold
  switch (currentTemp) {
    case temp.cold:
      console.log('its cold!')
      break
    default:
      console.log('its hot!')
      break
  }
}
enumDemo()

// optional parameters
function getTotal(num1: number, num2: number, num3?: number): number {
  let total = num1 + num2
  if (num3) total += num3
  return total
}
console.log(getTotal(4, 5))

// default parameters - cleaner
function getTotalTwo(num1: number, num2: number, num3: number = 0): number {
  return num1 + num2 + num3
}
console.log(getTotalTwo(4, 5))

// rest parameters - when you don't know how many parameters are coming in
function getTotalThree(...numbers: number[]): number {
  let total = 0
  numbers.forEach(number => total += number)
  return total
}
console.log(getTotalThree(4, 5, 12, 8, 4, 7))


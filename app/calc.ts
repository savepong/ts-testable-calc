export enum Operation {
  Add = '+',
  Substract = '-',
  Multiply = '*',
  Divide = '/'
 }
export function calc(firstNumber: number, secondNumber: number, operation: Operation): number {
  let result: number = 0
  switch (operation) {
    case '+': result = firstNumber + secondNumber; break
    case '-': result = firstNumber - secondNumber; break
    case '*': result = firstNumber * secondNumber; break
    case '/': result = firstNumber / secondNumber; break
  }

  return result
}
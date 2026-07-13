// 2 cach viet function
function sayHello(): void {
  console.log("Hello");
}

// chay function
sayHello();

// cach 2: arrow function
const sayHello2 = (): void => {
  console.log("Hello");
};

sayHello2();

function sumNumbers(a: number, b: number): number {
  return a + b;
}

const result = sumNumbers(5, 3);
console.log(result);

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

// default parameter
function multiplyNumbers(a: number, b: number = 5): number {
  return a * b;
}
multiplyNumbers(4, 6);
// khi khong truyen du tham so, lay tham so mac dinh, ko gay ra loi
multiplyNumbers(5);

// optional parameter
function divideNumbers(a: number, b?: number): number {
  // check 2 truong hop
  // truong hop 1: b co gia tri
  if (b !== undefined) {
    return a / b;
  } else {
    return a;
  }
  // truong hop 2: b khong co gia tri
}

divideNumbers(5, 5);
divideNumbers(5);

// rest parameter: ... ; function
// dung khi minh khong biet so luong tham so truyen vao
function sumAllNumbers(...names: string[]): void {
  console.log(names);
}
sumAllNumbers("hoadv");
sumAllNumbers("hoadv", "hoadv21");

// speard Operator: array / object: chia tach array / object thanh tung phan tu;

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
// gop 2 array thanh 1 array moi [1,2,3,4,5,6]
// cach 1: concat: arr1.concat(arr2) // [1,2,3,4,5,6]
// cach 2: spread operator: ...
const arr3: number[] = [...arr1, ...arr2];
console.log(arr3);

const student1 = { name: "hoadv", age: 30 };
const student2 = { hasPet: true };
const student3 = { ...student1, ...student2 }; // { name: "hoadv", age: 30, hasPet: true }
console.log(student3);

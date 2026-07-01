console.log("typescript");

// 1. Core Types: number, string, boolean
let myName: string = "hoadv"; // chuoi ky tu
const age: number = 36;
const isMarried: boolean = true;

let isActive: boolean = true;
let isLoading: boolean = false;

console.log(myName);

// 2. Type Inference suy dien ra kieu du lieu
let count = 10;
// count = "20"; // error

// 3. Core Types: object
let product: {
  id: number;
  title: string;
  price: number;
  isActive: boolean;
} = {
  id: 1,
  title: "Iphone 14",
  price: 2000,
  isActive: true,
};

// 4. Core Types: array number[] or Array<number>
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let scores: Array<number> = [90, 85, 88]; // number[]

// 6. Special Types: any
let randomValue: any = 10; // Gan any cho chay code
randomValue = "Hello";

// 7. Type: Union ( | )
let multiType: number | string | boolean;
multiType = 20;
multiType = "Twenty";
multiType = true;
// multiType = []; // error

// 8 Literal Type
let status: "active" | "inactive" | "pending";
// status = "success"; // error
status = "active";

// 8. Null và Undefined
const data: {
  id: number;
  title: string;
  description: string | null;
  timeLearn?: number | undefined;
} = {
  id: 1,
  title: "Learn TypeScript",
  description: null,
  // timeLearn: undefined,
};
data.timeLearn; // undefined
data.description; // null

// 9. Unknown và Any

let input: unknown = "hello";
// input.toLowerCase(); // error
// hay gap try catch axios => catch (error: unknown) { as AxiosError} : message

// 10. Type Assertions
(input as string).toLowerCase(); // casting
(<string>input).toLowerCase(); // casting

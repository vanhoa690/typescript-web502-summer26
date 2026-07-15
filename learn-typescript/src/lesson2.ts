let age: number = 30;
let height = 1.75;
// height = "1.80";
let myName: string = "hoadv";
let hasPet: boolean = true;

console.log(
  "My name is " +
    myName +
    ", I am " +
    age +
    " years old, my height is " +
    height +
    " meters, and I " +
    (hasPet ? "have" : "do not have") +
    " a pet.",
);

// object
let student: { name: string; age: number; hasPet: boolean } = {
  name: "hoadv",
  age: 30,
  hasPet: true,
};

let numbers: number[] = [1, 2, 3];
let strings: string[] = ["a", "b", "c"];
let students: { name: string; age: number; hasPet: boolean }[] = [
  { name: "hoadv", age: 30, hasPet: true },
  { name: "john", age: 25, hasPet: false },
];

let a: any = 10;
a = "hello";
a.toFixed(2);

let c: unknown = 10;
c = "hello";
if (typeof c === "number") {
  c.toFixed(2);
}

let b: number | string | boolean = 10; // unio type
let status: "success" | "error" | "loading"; // 1 trong 3 gia tri

let value: number | undefined | null = null;

value = undefined;
if (value != undefined || value != null) {
  console.log("value: " + value);
}

// Unknown

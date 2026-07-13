# Hướng dẫn về Hàm trong TypeScript

Hướng dẫn này bao gồm các khái niệm chính về hàm trong TypeScript, bao gồm hàm mũi tên (arrow function), kiểu trả về, kiểu hàm, tham số, và cấu hình trình biên dịch TypeScript.

## 1.2 Hàm trả về giá trị (Function Return)

Hàm trong TypeScript có thể khai báo kiểu trả về rõ ràng bằng cách sử dụng dấu hai chấm (`:`) theo sau là kiểu dữ liệu sau danh sách tham số. Điều này đảm bảo an toàn kiểu cho giá trị trả về.

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
```

Nếu hàm không trả về giá trị, nó ngầm định trả về `undefined` trừ khi được chỉ định khác (ví dụ: `void`).

## 1.3 Hàm như kiểu dữ liệu (Function as Types)

Bạn có thể định nghĩa kiểu của hàm bằng cách sử dụng type alias hoặc interface, chỉ định kiểu tham số và kiểu trả về. Điều này hữu ích cho các hàm callback hoặc chữ ký hàm.

```typescript
type MathOperation = (x: number, y: number) => number;

const subtract: MathOperation = (a, b) => a - b;

interface Logger {
  (message: string): void;
}

const log: Logger = (msg) => console.log(msg);
```

## 1.4 Hàm với tham số (Function with Parameters)

TypeScript cho phép bạn định nghĩa kiểu tham số một cách rõ ràng để đảm bảo an toàn kiểu.

```typescript
function greet(name: string, greeting: string): string {
  return `${greeting}, ${name}!`;
}
```

### 1.4.1 Tham số mặc định (Default Parameter)

Tham số mặc định cho phép gán giá trị mặc định nếu tham số không được cung cấp.

```typescript
function greetUser(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greetUser("John")); // Kết quả: Hello, John!
console.log(greetUser("Jane", "Hi")); // Kết quả: Hi, Jane!
```

### 1.4.2 Tham số tùy chọn (Optional Parameter)

Tham số tùy chọn được đánh dấu bằng dấu `?` và có thể bị bỏ qua khi gọi hàm.

```typescript
function describePerson(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old.`;
  }
  return `${name} has no age specified.`;
}

console.log(describePerson("John")); // Kết quả: John has no age specified.
console.log(describePerson("Jane", 25)); // Kết quả: Jane is 25 years old.
```

### 1.4.3 Toán tử Rest (Rest Parameter)

Toán tử reset (`...`) cho phép truyền một mảng các giá trị vào hàm như các tham số riêng lẻ.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Kết quả: 6
console.log(sum(4, 5, 6, 7)); // Kết quả: 22
```

### 1.4.4 Spread (Spread Operator)

Dùng để tách mảng / object thành các phần tử riêng lẻ

```typescript
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5]
```

## 1.5 Hàm và Void (Function & Void)

Kiểu `void` được sử dụng cho các hàm không trả về giá trị hoặc trả về `undefined`.

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

## 1.6 Never và Void (Never & Void)

Kiểu `never` biểu thị một hàm không bao giờ hoàn thành (ví dụ: ném lỗi hoặc chạy vòng lặp vô hạn). `Void` khác với `never` vì `void` cho phép trả về `undefined`.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

## Thực hành Lab 3:

## 1: Hàm tính điểm trung bình (Return type + Arrow Function)

### Yêu cầu

- Viết hàm `averageScore`
- Nhận vào **nhiều điểm số** (`number`)
- Trả về **điểm trung bình** (`number`)
- Sử dụng **arrow function** và **rest parameter**

### Ví dụ

```ts
averageScore(8, 9, 10); // 9
averageScore(5, 6, 7, 8); // 6.5
```

### Gợi ý

```ts
(...scores: number[]) => number;
```

---

### 2: Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type)

### Yêu cầu

- Định nghĩa kiểu cho hàm kiểm tra số
- Hàm nhận vào **1 số** (`number`)
- Trả về `"even"` hoặc `"odd"`

### Ví dụ

```ts
checkNumber(4); // "even"
checkNumber(7); // "odd"
```

### Gợi ý

```ts
type CheckNumber = (n: number) => string;
```

---

### 3: Hàm tạo thông tin người dùng (Default + Optional Parameter)

### Yêu cầu

- Viết hàm `createUser`
- Tham số:
  - `name`: `string` (bắt buộc)
  - `age`: `number` (tùy chọn)
  - `role`: `string` (mặc định `"user"`)
- Trả về chuỗi mô tả người dùng

### Ví dụ

```ts
createUser("Hòa");
// "Name: Hòa, Role: user"

createUser("Nam", 25, "admin");
// "Name: Nam, Age: 25, Role: admin"
```

---

### 4: Hàm xử lý danh sách sản phẩm (Spread + Rest)

### Yêu cầu

- Viết hàm `mergeProducts`
- Nhận vào **2 mảng sản phẩm**
- Trả về **mảng mới đã gộp**
- Viết thêm hàm `printProducts` để in danh sách ra console

### Ví dụ

```ts
const a = ["iPhone", "Samsung"];
const b = ["Xiaomi", "Oppo"];

mergeProducts(a, b);
// ["iPhone", "Samsung", "Xiaomi", "Oppo"]
```

### Gợi ý

- Dùng **spread**

```ts
[...arr1, ...arr2];
```

- Dùng **rest**

```ts
(...products: string[])
```

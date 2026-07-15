// 1. Class - OOP (java, angular)
class Student {
  // property
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  // method: ko tu khoa function
  sayHello() {
    console.log(this.name);
  }
}

const s1 = new Student("hoadv");

console.log(s1.name);
s1.sayHello();

// 2. Interface: Object, extends

interface IStudent {
  name: string;
  age: number;
  isDone?: boolean;
}

const s2: IStudent = {
  name: "hoadv",
  age: 33,
  isDone: true, // option
};

console.log(s2);

// 3. Type Object / tap gia tri
type Product = {
  title: string;
  price: number;
};

type Status = "success" | "error";

const statusSucess: Status = "success";

// 4.Intersection type
type Person = {
  name: string;
};

type Employee = {
  id: string;
};
// &
type EmployeeInfo = Employee & Person;

// 5. Enum
enum Role {
  ADMIN = "Admin",
  USER = "User",
}

console.log(Role.USER);

// 6 Generic : <T>

function showInfo<T>(data: T): T {
  return data;
}

showInfo<number>(10);
showInfo<string>("hoadv");

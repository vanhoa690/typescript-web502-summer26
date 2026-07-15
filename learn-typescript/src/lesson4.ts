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

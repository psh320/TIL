# Classes & Interfaces

### What's Object-oriented Programming?

- Work with (real-life) Entities in your Code. 실존하는 개체를 코딩하는 것.

예를 들어 쇼핑몰 웹을 만든다고 하면 우리는 여러가기 데이터를 받아야 한다

ProductList

- 서버에서 제품 리스트를 받아와야함.
- 이 오브젝트는 서버에서 데이터를 fetching및 rendering하는 로직이 있어야 한다.

Product

- 제품에 디테일들을 처리하고 장바구니에 담을수있게 만들어야함.
- Product Object는 장바구니 담기 로직이 있어야 한다.

ShoppingCart

- 장바구니에 담긴 제품을 처리할수있어야하고 총 계산 가격과 주문을 할수있게 해줘야한다.
- 오브젝트는 주문 (서버와의 통신) 로직이 있어야한다.

---

### Classes & Instances

Objects

- The things you work with in code.
- **Instances** of classes
- Class-based creation is an alternative to using object literals

Classes

- Blueprints for objects.
- Define how objects look like which properties and method they have.
- Classes make creation of multiple, similar objects much easier.

---

### Creating First Class

```typescript
class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

//Add employee example
accounting.addEmployee("Max");
accounting.addEmployee("Mana");

//Giving Private to property or method will allow access that data within class
accounting.employees[2] = "Anna";
//however, public properties are accessible outside class.
```

### Shorter Initialization

```typescript
class Department {
  //remove this and just write the code in construtor.
  //public name: string;
  //private id: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    //remove this as well.
    //this.name = name;
    //this.id = id
    //prevent double declare in class property and constructor that makes code dirty
  }
}
```

### Readonly

```typescript
constructor(private readonly id: string, public name:string){}
```

It will make id a readonly property so that when id is rewritten it will show error.

### Inheritance

When we create specific department like ITdepartment, it will share some property we declared in Department. Here we use Inheritance to re-use our code.

```typescript
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    //'this' should appear after super function.
    this.admins = admins;
  }
}

const It = new ITDepartment("d2", ["MAX"]);
```

### Overriding Properties & The "Protected" Modifier

To overrride, Simply just extend a class and redefine function with same name. However, if the parent class instance was private, extended class cannot access it so we need to change private to protected. (protected allows extended class to access it but prevent class from outside).

```typescript
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  //override addEmployee from Department Class, we added exception (Max) here
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

class Department {
  name: string;
  protected employees: string[] = []; //Private needs to be changed to protected when extended classes want access it.
}
```

### Getters and Setters

```typescript
class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report Found.");
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  //override addEmployee from Department Class, we added exception (Max) here
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

class Department {
  name: string;
  protected employees: string[] = []; //Private needs to be changed to protected when extended classes want access it.
}

const accounting = new AccountingDepartment();
```

### Static Methods & Properties

static Methods 는 클래스를 만들지 않고 클래스 안에있는 메소드를 쓸수 있게 만들어 주는것이다.

클래스 안에 메서드나 프로퍼티를 클래스 밖에서도 사용하고 싶다면 static을 붙여주자. static은 클래스 인스턴스안에서 this로 참조 하지못한다.

```typescript
class Department {
  //static property
  static fiscalYear = 2020;

  private employees: string[] = [];
  constructor(private id: string, public name: string) {}

  //static method
  static createEmployee(name: string) {
    return { name: name };
  }
}

const employee1 = Department.createEmployee(max);
console.log(employee1, Department.fiscalYear);
```

### Abstract Classes

클래스가 제공하는 메서드가 있지만 제너럴하게 쓰는게 아니고 extend된 다른 클래스에서 좀더 명확하게 정의해서 쓰고싶다면 메서드와 클래스를 abstract으로 만들어라.

추상화된 메서드가 있지만 자식 클래스가 그 메서드를 사용하지 않는다면 오류가 날것이다.

```typescript
//Put abstract in front of class
abstract class Department {
  static fiscalYear = 2020;

  private employees: string[] = [];
  constructor(private id: string, public name: string) {}
  static createEmployee(name: string) {
    return { name: name };
  }
  // Need put abstract and give return type. No need to define a function.
  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    //'this' should appear after super function.
    this.admins = admins;
  }

  describe() {
    console.log("IT department");
  }
}
```

when a class become abstract, it cant be intantiated from now on. It is just there to be inherited.

### Singletons & Private Constructors

Singleton Pattern is about ensuring that you always only have exactly one instance of a certain class.

```typescript
class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report Found.");
  }

  //make it private so we cannot create multiple classes outside this code.
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  //access and create one instance by static method
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
}
//const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
```

Accounting Department은 이제 무조건 하나의 인스턴스만 갖게 된다.

### Interface

인터페이스로 타입을 만들수있다

```typescript
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}
let user1: Person;

user1 = {
  name: "Max",
  age: 25,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
```

### Interface implment on Class

인터페이스를 클래스에 적용할 수 있다.

```typescript
interface Greetable {
  name: string;
  greet(phrase: string): void;
}
class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
```

### Interface Readonly

interface에 readonly 추가하면 초기 할당이후 클래스에서 프로퍼티를 변경하지 못한다.

```typescript
interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}
```

### Interface Extend

인터페이스는 type과 다르게 확장이 가능하다, 마치 부모 자식 형태처럼 부모에서 정의한건 자식이 모두 가지고있는 방식이다.

```typescript
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
```

### Interface as Function Type

```typescript
//type
type AddFn = (a: number, b: number) => number;
let add: addFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

//interface
interface AddFn {
  (a: number, b: number): number;
}
```

### Interface Optional Parameters & Properties

optional property 를 주고 싶을땐 인터페이스에 타입을 지정할때 ? 연산자를 넣으면 된다.

```typescript
interface Named {
  readonly name: string;
  outputName?: string;
}
```

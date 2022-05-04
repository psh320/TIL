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
-------------
### Classes & Instances

Objects
- The things you work with in code.
- **Instances** of classes
- Class-based creation is an alternative to using object literals

Classes
 - Blueprints for objects.
 - Define how objects look like which properties and method they have.
 - Classes make creation of multiple, similar objects much easier.
-------------
### Creating First Class

```typescript
class Department {
    name: string;
    private employees: string[] = [];

    constructor(n:string) {
        this.name = n;
    }
    describe(this:Department) {
        console.log("Department: " + this.name);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees)
    }
}

const accounting = new Department("Accounting")

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

    constructor(private id: string, public name:string) {
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
    admins: string[]
    constructor(id:string, admins: string[]) {
        super(id, 'IT');
        //'this' should appear after super function.
        this.admins = admins
    }
}

const It = new ITDepartment('d2', ['MAX']);
```



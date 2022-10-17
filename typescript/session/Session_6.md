# Advanced Type

intersection types
type guards
discriminated unions
type casting
function overloads

### Intersection Types

we can combine different object types and form new type that has all the properties of all types intersected.

```typescript
type Admin = {
  name: string;
  privilages: string[];
};

type Employeee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  previleges: ["create-server"],
  startDate: new Date(),
};
```

### More on Type Guards

```typescript
//we type guard to check if certain property or method exists when types are union, integrated.
if (typeof a === "string" || typeof b === "string") {
}
if ("privileges" in emp) {
}
if (vehicle instanceof Truck) {
}
```

### Discriminated Unions

it is a pattern where implementing type guard becomes easier in union types.

```typescript
interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("moving with speed: " + speed);
}
```

### Type Casting

```typescript
let userInputElement = <HTMLInputElement>document.getElementById("user-input")!;

let userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
```

### Index Properties

when we want to give more flexibility in type, we can use index properties. We use [] to store key/prop type and its value type.

```typescript
interface ErrorContainer {
  [prop: string]: string;
}
const errorBag: ErrorContainer = {
  email: "Not a valid Email!",
  username: "Not a valid Name!",
};
```

### Function Overloads

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

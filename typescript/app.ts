class Department {
    private employees: string[] = [];

    constructor(private readonly id:string ,public name:string) {
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

const accounting = new Department("d1","Accounting")

//Add employee example
accounting.addEmployee("Max");
accounting.addEmployee("Mana");

//Giving Private to property or method will allow access that data within class
accounting.employees[2] = "Anna";

accounting.describe()

class ITDepartment extends Department {
    admins: string[]
    constructor(id:string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    }
}

const It = new ITDepartment('d2', ['MAX']);

class Department {
    name: string;
    private employees: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    describe (this: Department) {
        console.log(`Department: ${this.name}`);
    }

    addEmployee (name: string) {
        this.employees.push(name);
    }

    printEmployees = () => {
        console.log(this.employees.length);
        console.log(this.employees);
        this.myPrivateMethod();
    }

    private myPrivateMethod = () => {
        console.log('My private method');
    }
}

const financeDept = new Department('Finance1');
financeDept.addEmployee('Amit');
financeDept.addEmployee('Kumar');

console.log(financeDept);
financeDept.describe();
financeDept.printEmployees();


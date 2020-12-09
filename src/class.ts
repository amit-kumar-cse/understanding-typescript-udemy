class Department {
    public id: string;
    private name: string;
    private employees: string[] = [];

    constructor(id: string, name: string) {
        this.id = id;
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

const financeDept = new Department('d1', 'Finance1');
financeDept.addEmployee('Amit');
financeDept.addEmployee('Kumar');

console.log(financeDept);
financeDept.describe();
financeDept.printEmployees();


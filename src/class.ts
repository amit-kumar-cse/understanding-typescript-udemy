class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe (this: Department) {
        console.log(`Department: ${this.name}`);
    }
}

const financeDept = new Department('Finance1');
console.log(financeDept);
financeDept.describe();


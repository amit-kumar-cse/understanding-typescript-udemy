class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe () {
        console.log(`Department: ${this.name}`);
    }
}

const financeDept = new Department('Finance1');
console.log(financeDept);
financeDept.describe();

const financeCopy = {describe: financeDept.describe};
financeCopy.describe();

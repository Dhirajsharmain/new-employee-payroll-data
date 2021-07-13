/**
 * ****************************************************************************
 * Purpose: The purpose of this program to create employee payroll data.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 13-07-2021
 * ****************************************************************************
 */

class EmployeePayrollData{
    //properties
    id;
    salary;

    //Constructor
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter an setter method

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    //TO string method
    toString(){
        return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Dhiraj", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John"
console.log(employeePayrollData.toString());
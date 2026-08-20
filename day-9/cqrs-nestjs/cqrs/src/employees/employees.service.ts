import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  private employees = [
    {
      id: 1,
      name: 'Akash',
      department: 'CSE',
      project: 'XYZ',
      rank: 1,
    },
  ];

  create(employeeData: any) {
    const newEmployee = {
      id: this.employees.length + 1,
      ...employeeData,
    };

    this.employees.push(newEmployee);

    return newEmployee;
  }

    findAll() {
    return this.employees;
  }
}
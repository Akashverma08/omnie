import { Injectable } from '@nestjs/common';
import { CreateEmployeeCommand } from './commands/create-employee.command';

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

  create(command: CreateEmployeeCommand) {
    const employee = {
      id: Date.now(),
      name: command.name,
      department: command.department,
      project: command.project,
      rank: command.rank,
    };

    if (command.index >=0) {
      this.employees.splice(command.index, 0, employee);
    } else {
      this.employees.push(employee);
    }

    return this.employees;
  }

  findAll() {
    if(this.employees.length===0){
        return "employee not found";
    }else{
        return this.employees;

    }
    
  }
}
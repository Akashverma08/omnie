import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  
  private employees:any = [
    {
      id: 21,
      name: "Akash",
      department: "CSE",
      project: "XYZ",
      rank: 1
    },
    {
      id: 22,
      name: "Rahul",
      department: "IT",
      project: "ABC",
      rank: 2
    },
    {
      id: 23,
      name: "Priya",
      department: "ECE",
      project: "PQR",
      rank: 3
    },
    {
      id: 24,
      name: "Aman",
      department: "CSE",
      project: "LMN",
      rank: 4
    },
    {
      id: 25,
      name: "Neha",
      department: "HR",
      project: "DEF",
      rank: 5
    }
  ]
  
  create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = {
      id: this.employees.length + 21,
      ...createEmployeeDto,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }
  findAll() {
    return this.employees;
  }

  findOne(id: number) {
    return this.employees.find(employee => employee.id === id);
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = this.employees.find(employee => employee.id === id);
    if (!employee) {
      return "employee not found";
    }

    Object.assign(employee, updateEmployeeDto);
    return employee;
  }

  remove(id: number) {
    

    this.employees = this.employees.filter(employee => employee.id !== id)

    return this.employees;
  }
}

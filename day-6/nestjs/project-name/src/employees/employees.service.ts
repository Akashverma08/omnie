import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  private employees = [
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

  findAll() {
    return this.employees;
  }

  findOne(id: number) {
    return this.employees.find(employee=> employee.id===id);
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee= this.employees.find(employee=> employee.id===id);
    if(!employee){
      return "employee not found";
    }

    Object.assign(employee,updateEmployeeDto);
    return employee;
  }

  remove(id: number) {
    const index=this.employees.findIndex(employee=> employee.id===id);
    if(index===-1){
      return "User Noyt found";

    }

    return this.employees.splice(index,1)
  }
}

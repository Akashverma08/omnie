import { Injectable } from '@nestjs/common';
import { CreateEmployeeCommand } from './commands/create-employee.command';
import {UpdateEmployeeCommand} from "./commands/update-employee.command";
import {UpdateEmployeeDto} from "./dto/update-employee.dto";

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

    //Splice Method  Psoting

    /*if (command.index >=0) {
      this.employees.splice(command.index, 0, employee);
    } else {
      this.employees.push(employee);
    }*/

    const newEmployee=[];

    for(let i=0;i<this.employees.length+1;i++){
        if(i===command.index || command.index===undefined){
            newEmployee.push(employee);
        }
        if(i< this.employees.length){
            newEmployee.push(this.employees[i]);
        }
    }

    this.employees=newEmployee;


    return this.employees;
  }

  findAll() {
    if(this.employees.length===0){
        return "employee not found";
    }else{
        return this.employees;

    }
    
  }

  //index based update

  /*update(id:number,updateEmployeeDto: UpdateEmployeeDto){
    const index=this.employees.findIndex((e)=>e.id===id);
    if(index===-1){
        return {
            message: "user not found",
        }
    }

    this.employees[index]={...this.employees[index],...updateEmployeeDto};

    return this.employees[index];

  }*/

    // find() and map() method for updation

    /*update(id :number,updateEmployeeDto: UpdateEmployeeDto){
        const emp=this.employees.find((e)=> e.id===id);
        if(!emp){
            return {
                message:"User not found",
            }
        }

        this.employees=this.employees.map((e)=> e.id===id ? {...e,...updateEmployeeDto} : e);

        return this.employees.find((e)=> e.id===id)
    }*/

    update(id:number,updateEmployeeDto:UpdateEmployeeDto){
        const emp=this.employees.find((e)=> e.id===id);
        if(!emp){
            return {
                message:"user not found",
            }
        }

        Object.assign(emp,updateEmployeeDto);

        return this.employees.find((e)=> e.id===id);



    }


}
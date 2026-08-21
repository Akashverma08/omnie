import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { CreateEmployeeHandler } from './handlers/create-employee.handler';
import { GetEmployeesHandler } from "./handlers/get-employee.handler";

import { UpdateEmployeeHandler } from './handlers/update-employee.handler';

@Module({
  imports: [CqrsModule],

  controllers: [EmployeesController],

  providers: [
    EmployeesService,
    CreateEmployeeHandler,
    GetEmployeesHandler,
    UpdateEmployeeHandler
  ],
})
export class EmployeesModule {}
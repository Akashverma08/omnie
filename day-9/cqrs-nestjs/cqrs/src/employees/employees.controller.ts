import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { CreateEmployeeCommand } from './commands/create-employee.command';
import { GetEmployeesQuery } from './queries/get-employees.query';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() dto: CreateEmployeeDto) {
    return this.commandBus.execute(
      new CreateEmployeeCommand(
        dto.name,
        dto.department,
        dto.project,
        dto.rank,
      ),
    );
  }

  @Get()
  findAll() {
    return this.queryBus.execute(
      new GetEmployeesQuery(),
    );
  }
}
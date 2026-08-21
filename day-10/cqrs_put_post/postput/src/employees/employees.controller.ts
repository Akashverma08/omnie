import { Body, Controller, Get, Post, Query, DefaultValuePipe, ParseIntPipe, Put, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { CreateEmployeeCommand } from './commands/create-employee.command';
import { GetEmployeesQuery } from './queries/get-employees.query';

import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { UpdateEmployeeCommand } from './commands/update-employee.command';

@Controller('employees')
export class EmployeesController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) { }

    @Post()
    create(
        @Query('index', new DefaultValuePipe(-1), ParseIntPipe) index: number,
        @Body() dto: CreateEmployeeDto) {
        return this.commandBus.execute(
            new CreateEmployeeCommand(
                dto.name,
                dto.department,
                dto.project,
                dto.rank,
                index,
            ),
        );
    }

    @Get()
    findAll() {
        return this.queryBus.execute(
            new GetEmployeesQuery(),
        );
    }



    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateEmployeeDto: UpdateEmployeeDto,
    ) {
        return this.commandBus.execute(
            new UpdateEmployeeCommand(
                id, updateEmployeeDto
            )
        )
    }



}
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEmployeeCommand } from '../commands/create-employee.command';
import { EmployeesService } from '../employees.service';

@CommandHandler(CreateEmployeeCommand)
export class CreateEmployeeHandler
  implements ICommandHandler<CreateEmployeeCommand>
{
  constructor(private readonly employeesService: EmployeesService) {}

  execute(command: CreateEmployeeCommand) {
    return this.employeesService.create(command);
  }
}
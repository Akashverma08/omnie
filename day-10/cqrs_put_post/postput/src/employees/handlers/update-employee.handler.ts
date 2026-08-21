import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateEmployeeCommand } from '../commands/update-employee.command';
import { EmployeesService } from '../employees.service';

@CommandHandler(UpdateEmployeeCommand)
export class UpdateEmployeeHandler
  implements ICommandHandler<UpdateEmployeeCommand>
{
  constructor(
    private readonly employeesService: EmployeesService,
  ) {}

  async execute(command: UpdateEmployeeCommand): Promise<any> {
    const { id, updateEmployeeDto } = command;

    return await this.employeesService.update(
      id,
      updateEmployeeDto,
    );
  }
}
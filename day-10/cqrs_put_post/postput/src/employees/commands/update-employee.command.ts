import { UpdateEmployeeDto } from '../dto/update-employee.dto';

export class UpdateEmployeeCommand {
  constructor(
    public readonly id: number,
    public readonly updateEmployeeDto: UpdateEmployeeDto,
  ) {}
}
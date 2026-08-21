import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEmployeesQuery } from '../queries/get-employees.query';
import { EmployeesService } from '../employees.service';

@QueryHandler(GetEmployeesQuery)
export class GetEmployeesHandler
  implements IQueryHandler<GetEmployeesQuery>
{
  constructor(
    private readonly employeesService: EmployeesService,
  ) {}

  async execute(query: GetEmployeesQuery) {
    return this.employeesService.findAll();
  }
}
export class CreateEmployeeCommand{
    constructor(
        public readonly name: string,
        public readonly department:string,
        public readonly project: string,
        public readonly rank:number,
        public readonly index:number,
    ){}
}
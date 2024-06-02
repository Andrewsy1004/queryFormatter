import { IsString } from "class-validator";

export class CreateQuerySqlDto {
    @IsString()
    query: string;    


}

import { PartialType } from '@nestjs/mapped-types';
import { CreateQuerySqlDto } from './create-query-sql.dto';

export class UpdateQuerySqlDto extends PartialType(CreateQuerySqlDto) {}

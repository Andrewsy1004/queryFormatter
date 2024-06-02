import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuerySqlService } from './query-sql.service';
import { CreateQuerySqlDto } from './dto/create-query-sql.dto';
import { UpdateQuerySqlDto } from './dto/update-query-sql.dto';

@Controller('query-sql')
export class QuerySqlController {
  constructor(private readonly querySqlService: QuerySqlService) {}

  @Post()
  create(@Body() createQuerySqlDto: CreateQuerySqlDto) {
    return this.querySqlService.create(createQuerySqlDto);
  }
  
}

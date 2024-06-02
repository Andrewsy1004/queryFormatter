import { Module } from '@nestjs/common';
import { QuerySqlService } from './query-sql.service';
import { QuerySqlController } from './query-sql.controller';

@Module({
  controllers: [QuerySqlController],
  providers: [QuerySqlService],
})
export class QuerySqlModule {}

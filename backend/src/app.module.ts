import { Module } from '@nestjs/common';
import { QuerySqlModule } from './query-sql/query-sql.module';

@Module({
  imports: [QuerySqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

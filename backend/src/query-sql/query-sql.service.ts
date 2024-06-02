import { Injectable } from '@nestjs/common';
import { CreateQuerySqlDto } from './dto/create-query-sql.dto';
import { format } from 'sql-formatter';

@Injectable()
export class QuerySqlService {
  create(createQuerySqlDto: CreateQuerySqlDto) {
    const { query } = createQuerySqlDto;

    const formattedQuery = format(query, {
      language: "mysql",
      tabWidth: 2,
      keywordCase: 'lower',
      linesBetweenQueries: 2,
    });
    
    return {query: formattedQuery};
  }
}


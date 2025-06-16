import knexFn from 'knex';

export const knex = knexFn({
  client: 'better-sqlite3',
  connection: {
    filename: './tmp/dev.sqlite3',
  },
  useNullAsDefault: true, 
});

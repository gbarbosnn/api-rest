import knexFn from 'knex';
import config from '../knexfile';

export const knex = knexFn(config);
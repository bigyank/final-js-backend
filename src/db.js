import knexJs from 'knex';
import bookshelfJs from 'bookshelf';
import knexfile from './knexfile.js';

const knex = knexJs(knexfile);

const bookshelf = bookshelfJs(knex);
bookshelf.plugin(['bookshelf-uuid']);
export default bookshelf;

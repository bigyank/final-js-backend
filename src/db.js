import knexJs from 'knex';
import bookshelfJs from 'bookshelf';
import cascadeDelete from 'bookshelf-cascade-delete';
import knexfile from './knexfile.js';

const knex = knexJs(knexfile);

const bookshelf = bookshelfJs(knex);
bookshelf.plugin(['bookshelf-uuid', cascadeDelete]);
export default bookshelf;

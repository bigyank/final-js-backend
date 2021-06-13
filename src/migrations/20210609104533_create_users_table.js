export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id').primary().notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('full_name').notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable('users');
}

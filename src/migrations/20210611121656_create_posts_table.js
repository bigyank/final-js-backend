export function up(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.string('id').primary().notNullable().unique();
    table.string('title').notNullable();
    table.string('body').notNullable();
    table.string('user_id').references('id').inTable('users');
    table.timestamps();
  });
}

export function down(knex) {
  return knex.schema.dropTable('posts');
}

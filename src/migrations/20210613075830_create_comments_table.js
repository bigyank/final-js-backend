export function up(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.string('id').primary().notNullable().unique();
    table.string('body').notNullable();
    table.string('user_id').references('id').inTable('users');
    table.string('post_id').references('id').inTable('posts');
    table.timestamps();
  });
}

export function down(knex) {
  return knex.schema.dropTable('comments');
}

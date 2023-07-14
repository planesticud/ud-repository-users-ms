exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', function(table) {
        table.increments();
        table.string('name')
        table.string('description')
        table.string('action')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('roles');
};

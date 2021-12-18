exports.up = async (knex) => {
  await knex.schema
    .createTable('roles', (roles) => {
      roles.increments('role_id')
      
      roles.string('role_name')
      .unique()
      .notNullable();
      
      roles.string('role_description', 1000);

      roles.timestamp('created_at').defaultTo(knex.fn.now());
      roles.timestamp('modified_at').defaultTo(knex.fn.now());
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('roles')
}

import Knex from 'knex';

export async function up(knex: Knex){ // up(knex) instância do knex, para acesso ao banco de dados
  //CRIAR A TABLE
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
  
}
export async function down(knex: Knex){
  //VOLTAR ATRAS (DELETAR A TABELA)
  return knex.schema.dropTable('items');
}
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalesSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.integer('user_id').unsigned().references('id').inTable('user')
      table.integer('quantity').unsigned().notNullable()
      table.float('discount').notNullable()
      table.float('total').notNullable()
      table.integer('status').unsigned().notNullable()
      table.integer('payment_method').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SalesSchema

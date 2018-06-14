'use strict'

const Schema = use('Schema')

class MessagesSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.string('sendername', 100).defaultTo('Anonymous')
      table.string('senderid', 255).defaultTo('-1')
      table.string('text', 255).defaultTo('No text provided...')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessagesSchema

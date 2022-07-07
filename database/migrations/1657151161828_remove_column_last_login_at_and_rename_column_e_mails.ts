import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('e_mail', 'email')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {})
  }
}

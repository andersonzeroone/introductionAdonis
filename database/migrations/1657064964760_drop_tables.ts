import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('email', 'e_mail')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('e_mail')
    })
  }
}

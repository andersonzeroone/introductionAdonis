import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    const uniqueKey = 'eMail'

    await User.updateOrCreateMany(uniqueKey, [
      {
        eMail: 'kvirk@adonisjs.com',
        password: 'secret',
      },
      {
        eMail: 'romain@adonisjs.com',
        password: 'supersecret',
      },
    ])
  }
}

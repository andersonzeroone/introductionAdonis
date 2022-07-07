import Route from '@ioc:Adonis/Core/Route'

import User from 'App/Models/User'

// Route.get('/users', async () => {
//   return User.all()
// })

// Route.get('/users/:id?', async ({ params }) => {
//   if (params.id) {
//     return `Viewing post with id ${params.id}`
//   }
//   return 'Viewing all posts'
// })

Route.get('docs/*', ({ params }) => {
  console.log(params['*'])
})

Route.group(() => {
  Route.get('/users', 'UsersController.index')

  Route.post('users', 'UsersController.store')
  Route.get('users/:id', 'UsersController.show')
  Route.put('users/:id', 'UsersController.update')
  Route.delete('users/:id', 'UsersController.destroy')
}).middleware('auth')

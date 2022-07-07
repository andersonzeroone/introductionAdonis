import Route from '@ioc:Adonis/Core/Route'

import User from 'App/Models/User'

Route.get('/users', async () => {
  return User.all()
})

Route.get('/users/:id?', async ({ params }) => {
  if (params.id) {
    return `Viewing post with id ${params.id}`
  }
  return 'Viewing all posts'
})

Route.get('docs/*', ({ params }) => {
  console.log(params['*'])
})

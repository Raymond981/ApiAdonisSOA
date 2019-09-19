'use strict'

const User = use('App/Models/User');

class UserController {
      /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let users = await User.all()
    return response.json(users)
  }

    /**
    * Render a form to be used for creating a new transaction.
    * GET users/create
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
    async create ({ request, response, view }) {
    }

    /**
    * Create/save a new transaction.
    * POST users
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
    async store ({ request, response }) {
        const user = new User()

        user.username = request.input('username')
        user.email = request.input('email')
        user.password = request.input('password')
        user.rol = request.input('rol')

        await user.save()
        return response.json(user)
    }

    /**
    * Display a single transaction.
    * GET users/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
    async show ({ params, request, response, view }) {
        let user = await User.find(params.id)
        return response.json(user)
    }

    /**
    * Render a form to update an existing transaction.
    * GET users/:id/edit
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
    async edit ({ params, request, response, view }) {
    }

    /**
    * Update transaction details.
    * PUT or PATCH users/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
   async update ({ params, request, response }) {
    
        let user = await User.find(params.id)

        user.username = request.input('username')
        user.email = request.input('email')
        user.password = request.input('password')
        user.rol = request.input('rol')

        await user.save()
        return response.json(user)
    }

    /**
    * Delete a transaction with id.
    * DELETE users/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
    async destroy ({ params, request, response }) {
        let user = await User.find(params.id)
        user.delete()

        return response.json({message: 'User deleted!'})
    }
}

module.exports = UserController

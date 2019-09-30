'use strict'

const Inventory = use('App/Models/Inventory')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with inventories
 */
class InventoryController {
  /**
   * Show a list of all inventories.
   * GET inventories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let inventories = await Database.table('products').innerJoin('inventories', 'products.id', 'inventories.user_id')
    return response.json(inventories)
  }

  /**
   * Render a form to be used for creating a new inventory.
   * GET inventories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new inventory.
   * POST inventories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const inventorie = new Inventory()

    inventorie.product_id = request.input('product_id')
    inventorie.quantity = request.input('quantity')
    inventorie.price = request.input('price')
    inventorie.tax = request.input('tax')
    inventorie.user_id = request.input('user_id')

    await inventorie.save()

    let inventories = await Database.table('products').innerJoin('inventories', 'products.id', 'inventories.user_id')

    return response.json(inventories)
  }

  /**
   * Display a single inventory.
   * GET inventories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let inventories = await Database.table('products').innerJoin('inventories', 'products.id', 'inventories.user_id').where('id',params.id)
    return response.json(inventories)
  }

  /**
   * Render a form to update an existing inventory.
   * GET inventories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update inventory details.
   * PUT or PATCH inventories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let inventorie = await Inventory.find(params.id)

    inventorie.product_id = request.input('product_id')
    inventorie.quantity = request.input('quantity')
    inventorie.price = request.input('price')
    inventorie.tax = request.input('tax')
    inventorie.user_id = request.input('user_id')

    await inventorie.save()
    return response.json(inventorie)
  }

  /**
   * Delete a inventory with id.
   * DELETE inventories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let inventorie = await Inventory.find(params.id)
    inventorie.delete()

    return response.json(inventorie)
  }
}

module.exports = InventoryController

'use strict'

const Product = use('App/Models/Product')
const Inventory = use('App/Models/Inventory')
const Transaction = use('App/Models/Transaction')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let products = await Product.all()
    return response.json(products)
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const product = new Product()
    const inventory = new Inventory()
    const transaction = new Transaction()

    product.code = request.input('code')
    product.name = request.input('name')
    product.description = request.input('description')
    product.image_url = request.input('image_url')

    inventory.tax = request.input('tax')
    inventory.quantity = request.input('quantity')
    inventory.price = request.input('price')
    inventory.user_id = request.input('user_id')

    transaction.quantity = request.input('quantity')
    transaction.type = 1

    await product.save()
    inventory.product_id = product.id
    await inventory.save()
    transaction.inventory_id = inventory.id
    await transaction.save()


    return response.json(product)
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let product = await Product.find(params.id)
    return response.json(product)
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let product = await Product.find(params.id)

    product.code = request.input('code')
    product.name = request.input('name')
    product.description = request.input('description')
    product.image_url = request.input('image_url')

    await product.save()
    return response.json(product)
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let product = await Product.find(params.id)
    product.delete()

    return response.json({message: 'Product deleted!'})
  }
}

module.exports = ProductController

'use strict'

const Sale = use('App/Models/Sale')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with sales
 */
class SaleController {
  /**
   * Show a list of all sales.
   * GET sales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let sales = await Sale.all()
    return response.json(sales)
  }

  /**
   * Render a form to be used for creating a new sale.
   * GET sales/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new sale.
   * POST sales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const sale = new Sale()
    sale.product_id = request.input('product_id')
    sale.user_id = request.input('user_id')
    sale.quantity = request.input('quantity')
    sale.discount = request.input('discount')
    sale.total = request.input('total')
    sale.satatus = request.input('status')
    sale.payment_method = request.input('payment_method')

    await sale.save()
    return response.json(sale)
  }

  /**
   * Display a single sale.
   * GET sales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let sale = await Sale.find(params.id)
    return response.json(sale)
  }

  /**
   * Render a form to update an existing sale.
   * GET sales/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update sale details.
   * PUT or PATCH sales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let sale = await Sale.find(params.id)

    sale.product_id = request.input('product_id')
    sale.user_id = request.input('user_id')
    sale.quantity = request.input('quantity')
    sale.discount = request.input('discount')
    sale.total = request.input('total')
    sale.satatus = request.input('status')
    sale.payment_method = request.input('payment_method')

    await sale.save()
    return response.json(sale)
  }

  /**
   * Delete a sale with id.
   * DELETE sales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let sale = await Sale.find(params.id)
    sale.delete()

    return response.json({message: 'Sale deleted!'})
  }
}

module.exports = SaleController

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
    product (){
        return this.hasMany('App/Models/Product')
    }

    user (){
        return this.hasMany('App/Models/User')
    }   
}

module.exports = Sale

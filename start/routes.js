'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

//Routes for users
Route.put('/api/users/:id', 'UserController.update')
Route.delete('/api/users/:id', 'UserController.destroy')
Route.post('/api/users', 'UserController.store')
Route.get('/api/users', 'UserController.index')
Route.get('/api/users/:id', 'UserController.show')

//Routes for transactions
Route.put('/api/transactions/:id', 'TransactionController.update')
Route.delete('/api/transactions/:id', 'TransactionController.destroy')
Route.post('/api/transactions', 'TransactionController.store')
Route.get('/api/transactions', 'TransactionController.index')
Route.get('/api/transactions/:id', 'TransactionController.show')

//Routes for sales
Route.put('/api/sales/:id', 'SaleController.update')
Route.delete('/api/sales/:id', 'SaleController.destroy')
Route.post('/api/sales', 'SaleController.store')
Route.get('/api/sales', 'SaleController.index')
Route.get('/api/sales/:id', 'SaleController.show')

//Routes for inventories
Route.put('/api/inventories/:id', 'InventoryController.update')
Route.delete('/api/inventories/:id', 'InventoryController.destroy')
Route.post('/api/inventories', 'InventoryController.store')
Route.get('/api/inventories', 'InventoryController.index')
Route.get('/api/inventories/:id', 'InventoryController.show')

//Routes for products
Route.put('/api/products/:id', 'ProductController.update')
Route.delete('/api/products/:id', 'ProductController.destroy')
Route.post('/api/products', 'ProductController.store')
Route.get('/api/products', 'ProductController.index')
Route.get('/api/products/:id', 'ProductController.show')
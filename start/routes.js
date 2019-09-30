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


Route.post('/api/register', 'AuthController.register')
Route.post('/api/login', 'AuthController.login')

Route.on('/').render('welcome')

//Routes for users
Route.put('/api/users/:id', 'UserController.update').middleware('auth')
Route.delete('/api/users/:id', 'UserController.destroy').middleware('auth')
Route.post('/api/users', 'UserController.store').middleware('auth')
Route.get('/api/users', 'UserController.index').middleware('auth')
Route.get('/api/users/:id', 'UserController.show').middleware('auth')

//Routes for transactions
Route.put('/api/transactions/:id', 'TransactionController.update').middleware('auth')
Route.delete('/api/transactions/:id', 'TransactionController.destroy').middleware('auth')
Route.post('/api/transactions', 'TransactionController.store').middleware('auth')
Route.get('/api/transactions', 'TransactionController.index').middleware('auth')
Route.get('/api/transactions/:id', 'TransactionController.show').middleware('auth')

//Routes for sales
Route.put('/api/sales/:id', 'SaleController.update').middleware('auth')
Route.delete('/api/sales/:id', 'SaleController.destroy').middleware('auth')
Route.post('/api/sales', 'SaleController.store').middleware('auth')
Route.get('/api/sales', 'SaleController.index').middleware('auth')
Route.get('/api/sales/:id', 'SaleController.show').middleware('auth')

//Routes for inventories
Route.put('/api/inventories/:id', 'InventoryController.update').middleware('auth')
Route.delete('/api/inventories/:id', 'InventoryController.destroy').middleware('auth')
Route.post('/api/inventories', 'InventoryController.store').middleware('auth')
Route.get('/api/inventories', 'InventoryController.index').middleware('auth')
Route.get('/api/inventories/:id', 'InventoryController.show').middleware('auth')

//Routes for products
Route.put('/api/products/:id', 'ProductController.update').middleware('auth')
Route.delete('/api/products/:id', 'ProductController.destroy').middleware('auth')
Route.post('/api/products', 'ProductController.store').middleware('auth')
Route.get('/api/products', 'ProductController.index').middleware('auth')
Route.get('/api/products/:id', 'ProductController.show').middleware('auth')
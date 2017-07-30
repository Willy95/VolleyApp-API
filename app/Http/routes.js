'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.post('/insertTask', 'ToDoListController.insertTask')
Route.post('/deleteTask/:id', 'ToDoListController.deleteTask')

Route.post('/statusTask/:id', 'ToDoListController.setStatusTask')
Route.post('/insertCommet', 'ToDoListController.insertCommet')
Route.get('/get-comments-count', 'ToDoListController.getCommentsCount')

Route.post('/test', 'ToDoListController.test')

// Rutas app de ImageRequest
Route.get('/getImages', 'ImageRequestController.getImages')

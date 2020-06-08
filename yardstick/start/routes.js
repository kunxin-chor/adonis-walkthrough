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

// for static pages only
Route.on('/').render('welcome')

// execute a closure on matching the url
Route.get('/sayHello', ()=>{
  return "Hello World"
});

// render a view
Route.get('/helloWorld', (context)=>{
  return context.view.render('hello-world');
});

// render a view in a folder
Route.get('/quickbrown', (context)=>{
  return context.view.render('inner.quickbrown');
})

// named parameters
Route.get('/greet/:name', (context)=>{
    return "Hello " + context.params.name;
})

// render form
Route.get('/addtwo', (context)=>{
  return context.view.render('add-two-form');
})

Route.post('/addtwo', (context)=>{
  const post = context.request.post();
  let total = parseInt(post.n1) + parseInt(post.n2);
  return context.view.render('result',{
    total
  })
})

// BOOK CONTROLLER
Route.get('/books', 'BookController.index');
Route.get('/books/create', 'BookController.create');
Route.post('/books/create', 'BookController.processCreate')


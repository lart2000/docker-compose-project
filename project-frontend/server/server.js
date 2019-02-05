const express = require('express'),
	  next    = require('next'),
	  cookieParser = require('cookie-parser')
      port    = parseInt(process.env.PORT) || 3000,
      dev     = process.env.NODE_ENV !== 'production',
      app     = next({ dev }),
	  handle  = app.getRequestHandler();
	  
class Routes {
	constructor(){
		this.routesLogin = [""]
		this.routesLogout = ["/login",""]
	}
}
function middlewareRoutes(req,res,next){
	// let routesApp = new Routes();
	// let currentRoute = req.path;
	// let isLogin = true;
	// if (routesApp.routesLogout.includes(currentRoute)) {
	// 	res.redirect("/");
	// 	// res.
	// } else {
	// 	next()	
	// }
	// console.log(req.cookies);
	next()
}

app.prepare()
	.then(() => {
		const server = express()
		server
		.use(cookieParser())
		.use(middlewareRoutes)
		.use(express.json())
		// .get('/robots.txt', (req, res) => {
		// 	let options         = {};
		// 	    options.root    = __dirname + '/../static/';
		// 	    options.headers = {'Content-Type': 'text/plain;charset=UTF-8'};
		// 		return res.status(200).sendfile("robots.txt", options);
		// })
		.get('/post', (req, res) => {
			return app.render(req, res, '/posts', req.query)
		})
		.get('/c', (req, res) => {
			return app.render(req, res, '/c', req.query)
		})

		.get('/posts/:id', (req, res) => {
			return app.render(req, res, '/posts', { id: req.params.id })
		})
		.get('*', (req, res) => {
			return handle(req, res)
		})
		.listen(port, (err) => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port}`)
		})
	})
var express   = require('express'),
	app         = express(),
	logger      = require('morgan'),
	bodyParser	= require('body-parser'),
	mongoose    = require('mongoose'),
	port        = process.env.PORT || 3000,
	beanRoutes  = require('./config/bean_routes.js')

//establish connection to mongo database
mongoose.connect('mongodb://localhost/meanbean')

//log requests made to the app
app.use(logger('dev'))

//make json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//mount beanRoutes at /api/beans
app.use('/api/beans', beanRoutes)

//mount public folder as the '/'
app.use(express.static('public'))
//run the web server
app.listen(port, function(){
	console.log('Server started on', port)
})

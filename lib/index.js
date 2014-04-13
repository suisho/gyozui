var path = require("path")
var Hapi = require("hapi")

var config = {
  debug: {
    request: ['implementation']
  }
}
var server = new Hapi.Server(11111, config)
//var server = Hapi.createServer('localhost', 11111, config)

var templateDir = path.resolve(__dirname + "/../" + '/templates')
server.views({
    engines: {
        jade: 'jade'
    },
    path: templateDir
});

var handler = function(request,reply){
  var lab = require("./lab")()
  reply.view("index", {
    labs : lab.lab,
    css : lab.css
  })
}

server.route({
  path: "/static/{path*}",
  method : "GET",
  handler: {
    directory: { path: './public', listing: false, index: true }
  }})

server.route({
  path: "/",
  method : "GET",
  handler : handler
})

server.start()

module.exports = server

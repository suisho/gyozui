var Hapi = require("hapi")

var config = {
}
var server = Hapi.createServer('localhost', 11111, config)

server.views({
    engines: {
        jade: 'jade'
    },
    path: __dirname + '/templates'
});


server.route({
  path: "/",
  method : "GET",
  handler : function(request,reply){
    reply.view("index")
  }
})

server.start()

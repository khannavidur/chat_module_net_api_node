var net = require('net');

var server = net.createServer({port : 8124},function(c) { //'connection' listener
  console.log('client connected');
  

  c.on('end', function() {
    console.log('client disconnected');
  });

  c.write('Luke, I am your father\r\n');

  c.on('data',function(data){
  	console.log(data.toString());
 });

  c.pipe(c);

});






server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});
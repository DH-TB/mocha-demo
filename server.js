function makeServer() {
    var express = require('express');
    var app = express();
    app.get('/', function (req, res) {
        res.status(200).send('ok');
    });
    var server = app.listen(3000, function () {
        var port = server.address().port;
        console.log('Example app listening at port %s', port);
    });
    return server;
}
module.exports = makeServer;
//export a factory function to create a new server instance on demand
//本来是app.listen(3000);module.exports = app;
//在测试的时候显示server.close() is not a function,改为导出整个app.listen()解决了

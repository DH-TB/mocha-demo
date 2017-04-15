var request = require('supertest');
describe('loading express', function () {
    var server;

    beforeEach(function () {
        server = require('../server')();
        //We can create the server inside beforeEach callback
    });

    afterEach(function (done) {
        server.close(done);
        //afterEach tries to close the server, but it is already closed
    });

    it('responds to /', (done)=> {
        this.timeout(35000);
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
            .get('/user')
            .expect(404, done);
    });
});


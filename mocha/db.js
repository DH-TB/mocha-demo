let User = require('./../db');
describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User({name:'Luna'});
            user.save(function(err) {
                if (err) throw err;
                done(); // 通过使用 done() 回调的方法来表示测试完成
            });
        });
    });
});

describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User({name:'smith'});
            user.save(done);
        });
    });
});


let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/test');

db.connection.on("open", function () {
    console.log("数据库连接成功");
});

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

let User = mongoose.model('User', {
    name: String,
});

module.exports=User;
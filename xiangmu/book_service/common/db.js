var mongoose = require('mongoose');
var url = 'mongoose://localhost/movieServer'
mongoose.connect(url);
//连接数据库
module.exports = mongoose;
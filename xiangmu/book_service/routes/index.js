//express示例
var express=require('express');
//路由引入
var router = express.Router();
//数据库引入
var mongoose = require('mongoose');
//定义路由


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/mongooseTest',function(req,res,next){
  mongoose.connect('mongodb://localhost/pets',{useMongoClient:true});
  mongoose.Promise = global.Promise;

  var Cat = mongoose.model('Cat',{name:String});

  var tom = new Cat({name:'Tom'});
  tom.save(function(err){
    if(err){
      console.log(err);
    }else{
      console.log('success insert')
    }
  });
  res.send('数据库连接成功');
});

module.exports = router;
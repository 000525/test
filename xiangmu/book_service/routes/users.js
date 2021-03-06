var express = require('express');
var router = express.Router();
var user = require('../models/user');
var crypto = require('crypto');
//var movie = require('../models/movie');
//var mail = require('../models/mail');
//var comment = require('../models/comment');
const init_token = 'TKL02o';
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//用户登录接口
router.post('/login', function (req, res, next) {
});
//用户注册接口
router.post('/register', function (req, res, next) {
	if (!req.body.username) {
		res.json({status: 1, message: "用户名为空"})
	}
	if (!req.body.password) {
		res.json({status: 1, message: "密码名为空"})
	}
	if (!req.body.userMail) {
		res.json({status: 1, message: "用户邮箱为空"})
	}
	if (!req.body.userPhone) {
		res.json({status: 1, message: "用户手机为空"})
	}
	user.findByUsername(req.body.username, function (err, userSave) {
		if(userSave.length != 0){
			//返回错误信息
			res.json({status: 1,message: "用户已注册"})
		}else{
			var registerUser = new user({
				username: req.body.username,
				password: req.body.password,
				userMail: req.body.userMail,
				userPhone: req.body.userPhone,
				userAdmin: 0,
				userPower: 0,
				userStop: 0,
			})
			registerUser.save(function() {
				res.json({status: 0,message: "注册成功"})
			})
		}
	})
});
	
//用户提交评论
router.post('/postComment', function (req, res, next) {
});
//用户点赞
router.post('/support', function (req, res, next) {
});
//用户找回密码
router.post('/findPassword', function (req, res, next) {
});
//用户发送站内信
router.post('/sendEmail', function (req, res, next) {
});

function getMD5Password(id) {
	
}
module.exports = router;

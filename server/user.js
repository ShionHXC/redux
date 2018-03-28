const express = require("express")
const model = require("./model")
const Router = express.Router();
const User = model.getModel('user')
const utility = require("utility")
const _filter = {pwd: 0, __v: 0}
Router.get("/info",function(req, res){
    const {userId} = req.cookies;
    User.findById(userId,_filter,function(err, doc){
        if(doc){
            return res.json({code: 0, data: doc})
        }
        return res.json({ code: 1 , msg: "服务端错误"})
    })
})
Router.get("/list", function (req, res) {
    // User.remove({},function(e,d){})
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})
Router.post("/register",function(req,res){
    const { name, pwd, type } = req.body;
    User.findOne({name}, function(e, d){
        if(d){
            return res.json({code: 1, msg: "用户名重复！"})
        }
        const userModel = new User({ name, pwd: md5Pwd(pwd), type })
        userModel.save(function(err, doc){
            if(err){
                return res.json({code: 1, msg: "后端出错了"})
            }
            const { name, _id, type } = doc
            res.cookie("userId", _id)
            return res.json({ code: 0, data: { name, _id, type } })
        })
        // create 不能拿到生成的id
        // User.create({ name, pwd: md5Pwd(pwd), type}, function(err, doc){
        //     if(err){
        //         return res.json({code: 1, msg: "存储失败"})
        //     }
        //     return res.json({code: 0})
        // })
    })
})
Router.post("/login", function (req, res) {
    const { name, pwd } = req.body;
    User.findOne({ name, pwd: md5Pwd(pwd) }, _filter, function (e, d) {
        if (d) {
            res.cookie("userId", d._id)
            return res.json({ code: 0, data: d})
        }
        return res.json({code: 1, msg: "用户名或者密码错误！"})
    })
})
function md5Pwd(pwd){
    const salt = "huangxc++6688~~"
    return utility.md5(utility.md5(salt + pwd))
}


module.exports = Router
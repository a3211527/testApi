var express = require("express")
var app = express()

app.get("/getMsg", function (req,res) {
    res.json({
        name:"测试"
    })
})

app.listen(8082, function() {
    console.log("启动成功")
})
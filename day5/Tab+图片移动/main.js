// 主入口文件
// 配置require
require.config({
    baseUrl: "js",//将基础路径定位到JS文件夹
    paths: { //配置路径（起别名）
        t: "tab"
    }
})

// 引入
require(["t"], function (Tab) {
    new Tab({
        left: document.querySelector(".left"),
        container: document.querySelector(".container"),
        wrap: document.querySelector(".wrap"),
    })
})
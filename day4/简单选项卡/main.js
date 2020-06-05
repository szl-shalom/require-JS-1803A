// 配置
require.config({
    baseUrl: "js",
    paths: {
        t: "tab"
    }
})

require(["t"], function (Tab) {
    // 调用Tab切换
    new Tab({
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
    })
})
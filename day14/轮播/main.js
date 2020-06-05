// 配置
require.config({
    baseUrl: "js",
    paths: {
        b: "banner",
        d: "data",
        V: "../lib/a"
    }
})



// 引入
require(["b", "d"], function (Banner, data) {
    new Banner({
        data: data,
        banner: document.querySelector(".banner"),
        container: document.querySelector(".container"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        page: document.querySelector(".page"),
        index: 3,
    })
})
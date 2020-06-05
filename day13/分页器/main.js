require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        p: "page"
    }
})


require(["data", "p"], function (data, Page) {
    new Page({
        data: data, //大数据
        num: 4, //每页显示几条数据
        index: 0, //下标
        tbody: document.querySelector("tbody"),
        page: document.querySelector(".page")
    })
})  
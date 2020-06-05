require.config({
    baseUrl: "js",
    paths: {
        f: "filter",
        data: "data"
    }
})


require(["f", "data"], function (Filter, data) {
    new Filter({
        data: data,
        content: document.querySelector(".content"), //渲染的节点
        title: document.querySelector(".title"),//Tab切换钴父元素
        userSearch: document.querySelector(".user-search"),//input框
    })
})
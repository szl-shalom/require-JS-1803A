require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        p: "page"

    }
})


require(["d", "$", "p"], function (data, $, Page) {
    // 调用分页器
    new Page({
        index: 0,
        data: data,
        tbody: $.get("tbody"),
        page: $.get(".page"),
        num: 5,
        box: $.get(".box"),
        ipt: $.get(".ipt")
    })
})
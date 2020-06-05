require.config({
    baseUrl: "js",
})



require(["data", "dom", "page"], function (data, $, Page) {
    window.res = new Page({
        data: data,//大数据
        content: $.get(".content"),//内容盒子
        page: $.get(".page"),//页码节点
        index: 0,//下标
        num: 16,//每页显示几条数据
        nav: $.get(".nav"),
        first: $.get(".first"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        end: $.get(".end"),
        code: $.get(".code"),
    })
})
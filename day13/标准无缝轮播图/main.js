// 配置
require.config({
    baseUrl: "js",
    paths: {
        b: "banner",
        d: "data",
        $: "dom",
        V: "../lib/velocity.min"
    }
})

// 引入
require(["b", "d", "$"], function (Banner, data, $) {
    new Banner({
        data: data,//数据
        banner: $.get(".banner"), //轮播容器
        container: $.get(".container"),//移动的盒子
        prev: $.get(".prev"), //左按钮
        next: $.get(".next"),// 右按钮
        page: $.get(".page"), //高亮
        index: 2//下标
    })
})
// 配置
require.config({
    // 配置基础路径
    baseUrl: "js",
    paths: {
        t: "tab",
        s: "swiper",
        $: "dom",
        V: "../lib/velocity.min"
    }
})

// 引入模块
require(["t", "s", "$"], function (Tab, Swiper, $) {
    // 调用Tab切换
    new Tab({
        title: $.get(".title"),
        content: $.get(".content"),
    })

    // 调用轮播
    new Swiper({
        container: $.get(".container"),//移动的长盒子
        index: 0,//下标
        page: $.get(".page"),//分页器父元素
        box: $.get(".content"),//轮播容器
        prev: $.get(".prev"),//左按钮
        next: $.get(".next"),//右按钮
    })
})
// 配置
require.config({
    baseUrl: "js",
    paths: {
        s: "swiper",
        $: "dom",
        V: "../lib/velocity.min",
    }
})

// 引入
require(["s", "$"], function (Swiper, $) {
    // 调用轮播
    new Swiper({
        container: $.get(".container"),//移动的长盒子
        index: 0,//下标
        page: $.get(".page"),//分页器父元素
        box: $.get(".swiper"),//轮播容器
        prev: $.get(".prev"),//左按钮
        next: $.get(".next"),//右按钮
    })



})


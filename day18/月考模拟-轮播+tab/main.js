require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        b: "banner",
        t: "tab",
        V: "../lib/a"
    }
})


require(["data", "banner", "tab"], function (data, Banner, Tab) {
    // 调用轮播
    new Banner({
        data: data.bannerData,//把轮播数据传过去
        img: document.querySelector(".img"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        page: document.querySelector(".page"),
        index: 0,
        banner: document.querySelector(".banner"),
    })

    // 调用Tab
    new Tab({
        data: data.tabData,
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
    })
})
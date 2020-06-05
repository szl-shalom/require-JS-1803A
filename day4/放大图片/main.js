//主入口文件
// 配置
require.config({
    // 基础路径
    baseUrl: "js",
    // 配置路径（起个名字）
    paths: {
        b: "bigImg",
        $: "dom"
    }
})

// 引入
require(["b", "$"], function (BigImg, $) {
    var wrap = $.get(".wrap");
    // 点击事件
    wrap.addEventListener("click", function (e) {
        // 获取事件源
        var tar = e.target;
        // 判断事件源是不是图片
        if (tar.nodeName === "IMG") {
            var arr = [...tar.parentNode.children];
            // 调用弹框
            new BigImg({
                src: tar.src,//点击图片的路径
                arr: arr,//当去点击区域的所有图片
            })
        }
    })
})
// 主入口文件
// require配置
// 固定语法
require.config({
    // 基本路径
    baseUrl: "js",
    // 配置路径（起别名）
    paths: {
        b: "BigImg"
    }
})


// 引入其他模块
require(["b"], function (BigImg) {
    // 获取所有图片  转化为数组
    var imgs = [...document.querySelectorAll("img")];
    // 循环遍历
    imgs.forEach(function (item) {
        // 添加点击事件
        item.addEventListener("click", function () {
            // 调用放大图片模块  实例化对象
            new BigImg({
                src: item.src,
            })
        })
    })
})





// 主入口模块
// 配置require
require.config({
    baseUrl: "js",
    paths: {
        t: "Tab"
    }
})


//引入模块
require(["t"], function (Tab) {
    // 调用Tab模块
    // tab1
    new Tab({
        title: document.querySelector(".tab1 .title"),//标题父元素
        content: document.querySelector(".tab1 .content"),//内容盒子父元素
        // className: "active",//切换的类名
        // type: "click",//切换事件的类型
        // index: 3,//默认高亮下标
    })

    // tab2
    new Tab({
        title: document.querySelector(".tab2 .title"),
        content: document.querySelector(".tab2 .content"),
        className: "active1",
        type: "mouseover",
        index: 3,//默认高亮下标
    })

    // tab3
    new Tab({
        title: document.querySelector(".tab3 .title"),
        className: "active2",
        type: "mouseover",
        index: 3,//默认高亮下标
    })


    var underLine = document.querySelector(".underLine");
    // tab4
    new Tab({
        title: document.querySelector(".tab4 .title"),
        content: document.querySelector(".tab4 .content"),
        className: "active",
        type: "mouseover",
        index: 3,//默认高亮下标
        callBack: function (item) {//当事件触发的时候回调函数
            // 移动
            underLine.style.marginLeft = item.offsetLeft + "px";
            // console.log(item)
        }
    })
})

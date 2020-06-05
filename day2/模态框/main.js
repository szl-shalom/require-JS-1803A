// 配置require
require.config({
    // 基础路径
    baseUrl: "js",
    // 配置路径
    paths: {
        d: "dialog"
    },
})


// 引入模块
require(["d"], function (Dialog) {
    // 逻辑代码
    // 获取btn按钮
    var btn = document.querySelector(".btn"),
        btn1 = document.querySelector(".btn1"),
        btn2 = document.querySelector(".btn2");
    // 添加点击事件
    btn.addEventListener("click", function () {
        // 调用弹框   实例化
        new Dialog({
            title: "今天下雨了吗？",
            okValue: "下了",
            noValue: "没下",
            okClick: function () {//回调函数
                console.log("您点击了确认");
            },
            isHasMask: false//是否要遮罩层
        })
    })


    btn1.addEventListener("click", function () {
        // 调用弹框   实例化
        new Dialog({
            title: "今天技能考试及格了不？",
            okValue: "及格",
            noValue: "木有",
            background: "red"
        })
    })


    btn2.addEventListener("click", function () {
        // 调用弹框   实例化
        new Dialog({
            background: "green"
        })
    })
})
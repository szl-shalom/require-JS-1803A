// 配置reuqire.condig
require.config({
    baseUrl: "js", //配置基础路径
    paths: { //配置path
        d: "dialog",
        $: "dom"
    }
})


require(["d", "$"], function (D, $) {
    var btn = $.get(".btn");

    btn.addEventListener("click", function () {
        new D({
            title: "标题标题标题党",  //标题可配置
            okValue: "确定", //确定和取消内容可配置
            noValue: "取消",//确定和取消内容可配置
            okClick: function () {  //确定按钮的回调函数可配置
                console.log("您点击了确定")
            },
            noClick: function () {  //取消按钮的回调函数可配置
                console.log("您点击了取消")
            },
            isHasMask: false, //遮罩层可配置,
            isHasDrag: true //配置可拖拽
        })
    })
})
// 入口文件

// 引入其他模块
require(["js/todoList"], function (T) {
    // 调用 实例化
    new T({
        ipt: document.querySelector(".ipt"),
        headerNum: document.querySelector(".header-num"),
        headerUl: document.querySelector(".header-ul"),
        bottomNum: document.querySelector(".bottom-num"),
        bottomUl: document.querySelector(".bottom-ul"),
        box: document.querySelector(".box"),
    })
})
// 封装一个专门获取节点的模块
define(function () {
    return {
        get: function (el) { //获取单个节点的方法
            return document.querySelector(el);
        },
        gets: function (el) { //获取多个节点的方法
            return document.querySelectorAll(el)
        },
    }
})
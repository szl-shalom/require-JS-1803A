// 封装获取单个节点和多个节点的模块

define(function () {
    return {
        get: function (el) {
            return document.querySelector(el);
        },
        gets: function (el) {
            return document.querySelectorAll(el);
        },
    }
})
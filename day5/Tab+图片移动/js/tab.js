// 定义模块
define(function () {
    function Tab(opt) {
        Object.assign(this, opt);
        this.init();
    }
    Tab.prototype = {
        constructor: Tab,
        init: function () {
            var that = this;
            [...this.left.children].forEach(function (item, index) {
                item.addEventListener("mouseover", function () {
                    // Tab切换
                    // 去除原来的类名
                    that.left.querySelector(".active") && that.left.querySelector(".active").classList.remove("active");
                    // 给当前点击的添加类名
                    item.classList.add("active");
                    // 移动盒子
                    that.container.style.marginTop = - index * 700 + "px";
                    // 切换背景颜色
                    that.wrap.style.background = "#" + Math.random().toString(16).substr(2, 6);
                })
            })
        }
    }
    return Tab
})
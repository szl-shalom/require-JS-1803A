define(function () {
    function Tab(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            var that = this;
            // 遍历标题所有子元素
            [...this.title.children].forEach(function (item, index) {
                // 给每一个子元素添加点击事件
                item.addEventListener("click", function () {
                    // 去除标题原来的高亮
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active");
                    // 给点击的添加高亮
                    item.classList.add("active");

                    // 去除内容原来的高亮
                    that.content.querySelector(".active") && that.content.querySelector(".active").classList.remove("active");
                    // 根据标题和内容盒子下标一一对应关系  找到对应的内容盒子
                    that.content.children[index].classList.add("active");

                })
            })
        }
    }
    return Tab;
})
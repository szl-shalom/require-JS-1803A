define(["V"], function (V) {
    function Tab(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            var that = this;
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    // 去除标题原来的高亮
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active");
                    item.classList.add("active");
                    that.content.querySelector(".con.active") && that.content.querySelector(".con.active").classList.remove("active");
                    that.content.children[index].classList.add("active");
                });
            })
        }
    }

    return Tab;
})
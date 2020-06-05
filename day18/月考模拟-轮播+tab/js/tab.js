define(function () {
    function Tab(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            // 处理原始的数据
            var arr = [];
            for (var key in this.data) {
                arr = arr.concat(this.data[key])
            };
            // 默认渲染所有的数据
            this.render(arr);
            // 添加点击事件
            this.bindEvent();
        },
        render: function (arr) {
            // 渲染
            this.content.innerHTML = arr.map(function (item) {
                return `
                <dl>
                    <dd>
                        <img src="${item.url}" alt="图片">
                    </dd>
                    <dt>
                        ${item.title}
                    </dt>
                </dl>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            this.title.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    //切换标题高亮
                    // 去除原来的高亮
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active")
                    // 给事件源添加高亮
                    tar.classList.add("active")
                    // 找到数据 
                    var arr = [];
                    switch (tar.innerHTML) {
                        case "全部":
                            arr = [];
                            for (var key in that.data) {
                                arr = arr.concat(that.data[key])
                            };
                            break;
                        case "类型1":
                            arr = that.data.list1;
                            break;
                        case "类型2":
                            arr = that.data.list2;
                            break;
                        case "类型3":
                            arr = that.data.list3;
                            break;
                    }
                    that.render(arr)
                }
            })
        }
    }

    return Tab;
})
// 定义，模块
define(function () {
    // 逻辑代码
    function Tab(opt) {
        Object.assign(this, {
            // 默认参数
            className: "active",//默认类名
            type: "click",//默认事件类型
            index: 0,//默认下标
        }, opt);
        this.init();
    }
    Tab.prototype = {
        constructor: Tab,
        init: function () {
            var that = this;
            // 设置默认高亮
            that.title.children[that.index].classList.add(that.className);
            that.content && that.content.children[that.index].classList.add(that.className);
            // 遍历每一个title子元素
            [...this.title.children].forEach(function (item, index) {
                // 给每一个子元素添加事件
                item.addEventListener(that.type, function () {
                    // 核心
                    // 1、清除标题高亮
                    that.title.querySelector("." + that.className) && that.title.querySelector("." + that.className).classList.remove(that.className)
                    // 2、给点击的元素添加高亮
                    item.classList.add(that.className)
                    // 判断是否进行内容盒子切换
                    if (that.content) {
                        // 3、清除内容盒子的高亮
                        that.content.querySelector("." + that.className) && that.content.querySelector("." + that.className).classList.remove(that.className)
                        // 4、给当前内容盒子添加高亮    注意：用过下标一一对应关系找到对应内容盒子
                        that.content.children[index].classList.add(that.className);
                    }
                    // 执行回调函数
                    that.callBack && that.callBack(item)
                })
            })

        }
    }
    // 抛出模块
    return Tab;
})
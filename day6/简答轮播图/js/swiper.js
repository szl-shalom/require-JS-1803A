define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, opt);
        this.init();
    }
    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            // 深度克隆第一个子元素
            var cloneEl = this.container.children[0].cloneNode(true);
            // 将克隆的节点放到container的末尾
            this.container.appendChild(cloneEl);
            // 获取最大下标
            this.maxIndex = this.container.children.length - 1;
            // 开启自动轮播
            this.autoPlay();
            // 绑定事件
            this.bindEvent();
        },
        autoPlay: function () {
            var that = this;
            // 每两秒轮播一次
            that.timer = setInterval(function () {
                that.next.click();//调用右按钮点击事件
            }, 2000)
        },
        // 封装核心运动函数，这个接收一个参数下标   
        change: function (i) {
            var that = this;
            // 下标++
            that.index = i;
            // 修改左边距
            V(that.container, {
                marginLeft: -that.index * 1000,
            })
            // 切换分页器高亮
            that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active")//移除原来的高亮
            that.page.children[that.index === that.maxIndex ? 0 : that.index].classList.add("active");

        },
        bindEvent: function () {
            var that = this;
            // 鼠标进入事件
            this.box.addEventListener("mouseenter", function () {
                clearInterval(that.timer)//清除定时器
            })
            // 鼠标离开
            this.box.addEventListener("mouseleave", function () {
                that.autoPlay();//调用自动轮播
            })
            // 右按钮点击事件
            this.next.addEventListener("click", function () {
                // 判断是否到最后一张图片了
                if (that.index === that.maxIndex) {
                    that.container.style.marginLeft = 0; // 左边距归0
                    that.index = 0; //下标归0
                }
                that.change(that.index + 1)
            })
            // 左按钮点击事件
            this.prev.addEventListener("click", function () {
                // 判断是否到第一张图片了
                if (that.index === 0) {
                    that.index = that.maxIndex; //下标归0
                    that.container.style.marginLeft = -that.index * 1000 + "px"; // 左边距归0
                }
                that.change(that.index - 1)
            });
            // 分页器点击事件 注意：遍历绑定事件  因为需要下标  
            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })
        }
    }

    return Swiper;
})
define(function () {
    function Page(opt) {
        Object.assign(this, {
            //设置默认参数
        }, opt);
        this.init();
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            this.change();//调用核心函数
            this.bindEvent();//绑定事件
        },
        /**
         * @desc 用于渲染数据
         * @param {Array} arr [数据] 
         * @return 无
         */
        render: function (arr) {
            this.content.innerHTML = arr.map(function (item) {
                return `
                <dl>
                    <dd>
                        <img src="${item.url}" alt="">
                    </dd>
                    <dt>
                        <h2>${item.title}</h2>
                        <span>￥${item.price.toFixed(2)}</span>
                        <s>￥${item.oldPrice.toFixed(2)}</s>
                    </dt>
                </dl>
                `
            }).join("");
        },
        /**
         * @desc 渲染分页器
         * @return 无
         */
        renderPage() {
            var str = "";//等待拼接的字符串
            // 分页器页码  最小值1  最大值this.maxLen
            for (var i = 1; i <= this.maxLen; i++) {
                str += `
                    <li>${i}</li>
                `
            }
            // 修改内容
            this.page.innerHTML = str;
            // 添加分页器高亮
            this.page.children[this.index].classList.add("active");
        },
        /**
         * @desc 根据下标index  动态获取数据同时进行渲染
         * @desc 根据下标index  动态获取分页器页码最大值 同时进行渲染
         */
        change: function () {
            // 获取对应的数据
            // data    大数据
            // index  下标
            // num    每页显示的数据的个数
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num);
            // 根据获取的数据进行渲染
            this.render(data);
            // 计算最大页码
            this.maxLen = Math.ceil(this.data.length / this.num);
            // 根据页码最大值 渲染页码
            this.renderPage();

            // 添加禁用
            this.prev.disabled = this.index === 0;
            this.first.disabled = this.index === 0;
            this.next.disabled = this.index === this.maxLen - 1;
            this.end.disabled = this.index === this.maxLen - 1;

            // 显示隐藏
            // this.prev.style.display = this.index === 0 ? "none" : "inline-block";
            // this.first.style.display = this.index === 0 ? "none" : "inline-block";
            // this.next.style.display = this.index === this.maxLen - 1 ? "none" : "inline-block";
            // this.end.style.display = this.index === this.maxLen - 1 ? "none" : "inline-block";
        },
        /**
         * @desc 绑定所有的事件
         */
        bindEvent: function () {
            var that = this;
            // 进行事件委托
            this.nav.addEventListener("click", function (e) {
                var tar = e.target;//通过事件对象上的属性target获取事件源
                if (tar.nodeName === "LI") {
                    // 说明点击了分页页码
                    that.index = tar.innerHTML - 1;//修改下标  等于  事件源内容（页码） - 1
                    that.change();//调用核心函数  重新渲染数据+分页
                } else {
                    // 说明点击的不是分页器页码
                    switch (tar.className) {
                        // 首页
                        case "first":
                            that.index = 0;
                            that.change();
                            break;
                        // 上一页
                        case "prev":
                            that.index--;
                            that.change();
                            break;
                        // 下一页
                        case "next":
                            // if (that.index >= that.maxLen - 1) {
                            //     alert("已经是最后一页，很遗憾，没有下一页了！！！");
                            //     return;
                            // }
                            that.index++;
                            that.change();
                            break;
                        // 尾页
                        case "end":
                            that.index = that.maxLen - 1;
                            that.change();
                            break;
                        // 跳转
                        case "go":
                            if (that.code.value >= 1 && that.code.value <= that.maxLen) {
                                that.index = that.code.value - 1;
                                that.change()
                            } else {
                                alert("很遗憾，没有该页码！！！！")
                            }

                            break;
                    }
                }
            })
        }
    }

    return Page;
})
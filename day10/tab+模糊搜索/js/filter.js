/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-30 13:43:50
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-31 09:36:53
 */
define(function () {
    function Filter(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Filter.prototype = {
        constructor: Filter,
        init: function () {
            // 数据渲染
            this.render(this.data);
            // 绑定事件
            this.bindEvent();
        },
        render: function (data) {
            // 渲染
            this.content.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dd>
                        <img src="${item.url}" alt="">
                    </dd>
                    <dt>
                        <h2>${item.name}</h2>
                        <p>${item.desc}</p>
                    </dt>
                </dl>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;//保留this指向
            // 事件委托点击事件
            this.title.addEventListener("click", function (e) {
                var tar = e.target; //获取事件源
                if (tar.nodeName === "BUTTON") {
                    // 切换高亮   标题Tab切换
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active");
                    tar.classList.add("active");
                    // 数据筛选
                    if (tar.innerHTML === "男生") {
                        that.arr = that.data.filter(function (item) {
                            return item.sex === "男"
                        })
                    } else if (tar.innerHTML === "女生") {
                        that.arr = that.data.filter(function (item) {
                            return item.sex === "女"
                        })

                    } else {
                        that.arr = that.data.slice()
                    }
                    that.render(that.arr)
                }
            })

            // 模糊搜索
            this.userSearch.addEventListener("input", function () {
                var userVal = this.value;//输入的值
                var data = that.data.filter(function (item) {
                    return item.name.includes(userVal);//name属性是否包含用户输入的值
                });//根据姓名进行模糊搜索
                that.render(data);
            })
        }
    }
    return Filter;
})
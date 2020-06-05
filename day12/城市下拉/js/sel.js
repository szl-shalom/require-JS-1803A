/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-04-01 10:42:57
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-04-01 16:28:30
 */

define(function () {
    function Sel(opt) {
        Object.assign(this, opt);
        this.init();
    }
    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.renderHot(); //渲染热门城市
            this.renderTitle();//渲染标题
            this.bindEvent();//绑定事件
            console.log(this.data)

        },
        bindEvent: function () {
            var that = this;
            // 绑定聚焦事件
            this.ipt.addEventListener("focus", function () {
                // 显示下拉菜单
                that.sel.style.display = "block";
            })

            // 给header绑定事件事件  =>事件委托
            this.header.addEventListener("click", function (e) {
                var tar = e.target;//获取事件源
                if (tar.nodeName === "SPAN") {
                    // 切换高亮
                    // 去除原来高亮
                    that.header.querySelector(".active1") && that.header.querySelector(".active1").classList.remove("active1");
                    // 给当前添加
                    tar.classList.add("active1")
                    // 区分一下点击的事热门还是字母
                    if (tar.innerHTML === "热门") {
                        // 点击热门
                        that.renderHot(); //渲染热门
                    } else {
                        // 点击的字母
                        var str = tar.innerHTML, html = "<ul>";
                        for (var i = 0; i < str.length; i++) {
                            var key = str[i];
                            var arr = that.data.data.citylist[key];
                            var str1 = "";
                            arr.forEach(function (item) {
                                for (var j in item) {
                                    str1 += ` <span>${j}</span>`
                                }
                            })
                            html += `
                            <li>
                                <b>
                                    ${key}
                                </b>
                                ${str1}
                            </li>
                            `
                        }

                        html += "</ul>";
                        that.bottom.innerHTML = html;
                    }

                }
            })

            // 给bottom绑定点击事件 =>事件委托
            this.bottom.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    that.ipt.value = tar.innerHTML;
                    that.sel.style.display = "none";
                }
            })
        },
        renderHot: function () {
            // 渲染默认热门城市
            this.bottom.innerHTML = this.data.data.hotcitylist.map(function (item) {
                return `
                    <span>${item.name}</span>
                `
            }).join("");
        },
        renderTitle: function () {
            // 渲染标题
            var obj = this.data.data.citylist;
            var arr = [];
            var str = "<span class='active1'>热门</span>";//默认热门数据
            // 使用for...in循环遍历对象  应该要获取对象的每一个键值
            for (var key in obj) {
                arr.push(key)
            }
            // 将数组每4为进行拆分  拼接字符串
            while (arr.length > 0) {
                str += `<span>${arr.splice(0, 4).join("")}</span>`
            }
            this.header.innerHTML = str;
        },
    }

    return Sel;
})
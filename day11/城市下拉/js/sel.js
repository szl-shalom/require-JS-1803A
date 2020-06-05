/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-31 10:45:48
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-31 11:48:58
 */

define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.render();//渲染大数据
            this.bindEvent();
        },
        render: function () {
            this.selUl.innerHTML = this.data.map(function (item) {
                // 获取省的名称  
                // 因为对象的键值名不统一  所以我们需要用for ... in 遍历对象
                // 来获取键值
                var province;
                for (var key in item) {
                    if (!isNaN(key)) {
                        province = item[key];
                    }
                }
                // 获取对应的城市信息
                var city = "";
                if (item.childCity) {
                    // 存在子城市
                    item.childCity.forEach(function (item) {
                        for (var key in item) {
                            city += `
                            <li>
                                <input type="checkbox">
                                <span>${item[key]}</span>
                            </li>
                            `
                        }
                    })
                }

                return `
                <li>
                   ${item.childCity ? `<img src="./img/close.png" alt="">` : ``} 
                    <input type="checkbox">
                    <span>${province}</span>
                    <ul>
                       ${city}
                    </ul>
                </li>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            // 聚焦 下拉菜单
            this.search.addEventListener("focus", function () {
                if (that.selUl.style.display !== "block") {
                    V(that.selUl, "slideDown");//下拉动画
                }
            })
            // 提交收起
            this.btn.addEventListener("click", function () {
                if (that.selUl.style.display === "block") {
                    V(that.selUl, "slideUp");//收起动画
                }

                //把当前选中的复选框的值放入input
                that.search.value = [...that.selUl.querySelectorAll("input:checked")].map(function (item) {
                    return item.nextElementSibling.innerHTML;
                }).join(" ")
            })
            // 给图片添加点击事件
            this.selUl.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    if (tar.parentNode.lastElementChild.style.display === "block") {
                        V(tar.parentNode.lastElementChild, "slideUp")
                        V(tar, {
                            rotateZ: "0deg"
                        })
                    } else {
                        V(tar.parentNode.lastElementChild, "slideDown");
                        V(tar, {
                            rotateZ: "90deg"
                        })
                    }

                }
            })
        }
    }
    return Sel;
})

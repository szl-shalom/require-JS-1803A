define(function () {
    function Page(opt) {
        Object.assign(this, opt)
        this.init();
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            this.change();//初始分页器
            this.bindEvent();//绑定事件
        },
        renderContent: function (arr) {
            this.tbody.innerHTML = arr.map(function (item) {
                return `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.sex}</td>
                </tr>
                `
            }).join("")
        },
        renderPage: function () {
            var str = "";
            for (var i = 1; i <= this.maxLen; i++) {
                str += `
                    <li>${i}</li>
                `;
            }
            this.page.innerHTML = str;
            this.page.children[this.index].classList.add("active");
        },
        change: function () {
            // 1、有大数据,截取大数据的一部分进行渲染
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num);
            this.renderContent(data);
            // 2。获取最大页码进行渲染
            this.maxLen = Math.ceil(this.data.length / this.num);
            this.renderPage();
        },
        bindEvent: function () {
            var that = this;
            this.box.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1;
                    that.change();
                } else {
                    switch (tar.className) {
                        case "first":
                            that.index = 0;
                            break;
                        case "prev":
                            if (that.index <= 0) {
                                alert("已经是第一页了")
                                return
                            }
                            that.index--;
                            break;
                        case "next":
                            if (that.index >= that.maxLen - 1) {
                                alert("已经是最后一页了")
                                return
                            }
                            that.index++;
                            break;
                        case "end":
                            that.index = that.maxLen - 1;
                            break;
                        case "go":
                            if (that.ipt.value >= 1 && that.ipt.value <= that.maxLen) {
                                that.index = that.ipt.value - 1
                            } else {
                                alert("该有该页码")
                            }

                            break;

                    }
                    that.change();
                }
            })
        }
    }

    return Page;
})
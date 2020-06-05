// 定义模块
define(function () {
    function ToDoList(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    ToDoList.prototype = {
        constructor: ToDoList,
        init: function () {
            this.bindEvent();//绑定事件
        },
        bindEvent: function () {
            var that = this;
            // 回车事件
            this.ipt.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    that.headerUl.innerHTML += `
                    <li>
                        <input type="checkbox">
                        <span>${this.value}</span>
                        <b>X</b>
                    </li>
                    `;
                    that.compute();//计算长度
                }
            })

            // 事件委托
            this.box.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "B") {
                    // 删除
                    tar.parentNode.remove()
                }
                if (tar.nodeName === "INPUT") {
                    // 复选框
                    tar.checked ? that.bottomUl.appendChild(tar.parentNode) : that.headerUl.appendChild(tar.parentNode);
                }
                that.compute();//计算长度
            })
        },
        compute: function () {
            this.headerNum.innerHTML = this.headerUl.children.length;
            this.bottomNum.innerHTML = this.bottomUl.children.length;
        }
    }
    return ToDoList
})
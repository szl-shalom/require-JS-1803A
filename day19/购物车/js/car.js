define(function () {
    function Car(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Car.prototype = {
        constructor: Car,
        init: function () {
            this.bindEvent();//绑定事件、

        },
        bindEvent: function () {
            var that = this;
            // 使用事件委托
            this.wrap.addEventListener("click", function (e) {
                var tar = e.target;
                // 使用switch判断事件源的类名
                switch (tar.className) {
                    case "del"://删除
                        // 删除对应的父元素
                        confirm("确认要删除吗？") && tar.parentNode.parentNode.remove()
                        break;
                    case "add":
                        // 根据节点关系 找到对应的数量节点++
                        tar.parentNode.children[1].innerHTML++;
                        //  小计                     =                           数量                     *                  单价                                  
                        tar.parentNode.nextElementSibling.innerHTML = tar.previousElementSibling.innerHTML * tar.parentNode.previousElementSibling.innerHTML
                        break;
                    case "red":
                        if (tar.nextElementSibling.innerHTML <= 1) {
                            alert("数量最小为1");
                            return;
                        }
                        // 根据节点关系 找到对应的数量节点--
                        tar.nextElementSibling.innerHTML--;
                        tar.parentNode.nextElementSibling.innerHTML = tar.nextElementSibling.innerHTML * tar.parentNode.previousElementSibling.innerHTML
                        break;
                    case "check-one":
                        //获取所有单选框
                        var list = [...that.wrap.querySelectorAll(".check-one")],
                            //获取所以不诶选中单选框
                            list1 = [...that.wrap.querySelectorAll(".check-one:checked")];
                        // 比对 单选框的数量和被选中的单选框的数量是否保持一致  
                        // 一致 返回真  并赋值 全选状态
                        // 不一致返回假  并赋值 全选状态
                        that.checkAll.checked = list.length === list1.length;
                        break;
                    case "check-all":
                        // 获取所有逇单选框
                        var list = [...that.wrap.querySelectorAll(".check-one")];
                        // 遍历
                        list.forEach(function (item) {
                            // 让每一个单选框状态等于全选状态
                            item.checked = tar.checked;
                        })
                        break;
                    case "del-all":
                        // 获取被选中的单选框
                        var list = [...that.wrap.querySelectorAll(".check-one:checked")];
                        // 遍历
                        list.forEach(function (item) {
                            // 删除对应的父级元素
                            item.parentNode.parentNode.remove();
                        })
                        break;
                }
                // 
                that.compute();
            })
        },
        //  计算总价和数量
        compute: function () {
            // 获取所有被选中的input
            var list = [...this.wrap.querySelectorAll(".check-one:checked")],
                price = 0,
                count = 0;

            // 遍历
            list.forEach(function (item) {
                //通过节点找到 数量  和  小计
                var a = +item.parentNode.parentNode.querySelector(".num").innerHTML
                var b = +item.parentNode.parentNode.querySelector(".litPrice").innerHTML
                price += b;
                count += a;
            })

            this.result.innerHTML = `
            <span class="result">
                总价：${price}元
                总数量：${count}
            </span>
            `
        }

    }
    return Car;
})




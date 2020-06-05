define(["dialog"], function (Dialog) {
    function Car(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Car.prototype = {
        constructor: Car,
        init: function () {
            this.render();//渲染数据
            this.bindEvent(); //绑定事件
            this.compute();//计算总价
        },
        render: function () {
            this.tbody.innerHTML = this.data.map(function (item) {
                return `
                <tr>
                    <th>${item.title}</th>
                    <th class="price">${item.price}</th>
                    <th>
                        <button class="red">-</button>
                        <span class="num">${item.num}</span>
                        <button class="add">+</button>
                    </th>
                    <th class="litPrice">${item.price * item.num}</th>
                    <th class="del">取消</th>
                </tr>
                `
            }).join("");
        },
        bindEvent: function () {
            var that = this;
            this.wrap.addEventListener("click", function (e) {
                // 获取事件源
                var tar = e.target;
                // 判断事件源的类名
                switch (tar.className) {
                    case "add":// 添加
                        // 根据节点关系 找到 减号按钮 解除禁用
                        tar.previousElementSibling.previousElementSibling.disabled = false;
                        // 根据节点关系 让上一个兄弟节点++
                        tar.previousElementSibling.innerHTML++;
                        // 根据节点关系 小计 = 数量 * 单价
                        tar.parentNode.nextElementSibling.innerHTML = tar.parentNode.previousElementSibling.innerHTML * tar.previousElementSibling.innerHTML
                        break;
                    case "red": //减少
                        // 点击减号的时候 要判断当前 数量是否小于等于1  成立就将减号按钮禁用掉
                        if (tar.nextElementSibling.innerHTML <= 1) {
                            tar.disabled = true;
                            return;
                        }
                        tar.nextElementSibling.innerHTML--;
                        tar.parentNode.nextElementSibling.innerHTML = tar.parentNode.previousElementSibling.innerHTML * tar.nextElementSibling.innerHTML
                        break;
                    case "del": //删除
                        // 点击删除的时候调用弹框
                        new Dialog({
                            title: "确认全部删除吗？",
                            okValue: "确定",
                            noValue: "取消",
                            okClick: function () { //确认回调函数  
                                // 根据节点关系 删除父元素
                                tar.parentNode.remove();
                                // 重新计算总价
                                that.compute();
                            }
                        })
                        break;
                    case "del-all": //删除所有
                        new Dialog({
                            title: "确认全部删除吗？",
                            okValue: "确定",
                            noValue: "取消",
                            okClick: function () {
                                // 删除所有  只需要让tbody的里面的内容清空
                                that.tbody.innerHTML = "";
                                // 重新计算总价
                                that.compute();
                            }
                        })
                        break;
                }
                that.compute();
            })
        },
        //  初始化的要调用计算总价
        // 弹框回调函数要调用总价
        compute: function () {
            // 获取是所有的数量节点 和 小计节点 
            var nums = [...this.wrap.querySelectorAll(".num")],
                prices = [...this.wrap.querySelectorAll(".litPrice")],
                price = 0,
                num = 0;
            // 循环数量  进行累加
            nums.forEach(function (item) {
                num += +item.innerHTML
            })
            // 循环小计  进行累加
            prices.forEach(function (item) {
                price += +item.innerHTML
            })
            // 修改页面
            this.result.innerHTML = `
                总价：${price}
                总数量:${num}
            `
        }
    }

    return Car;
})

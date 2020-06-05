// 配置
require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        $: "dom"
    }
})


// 引入
require(["d", "$"], function (Dialog, $) {
    var add = $.get(".add");
    // 添加新增点击事件
    add.addEventListener("click", function () {
        // 调用弹框模块
        new Dialog({
            // 内容盒子字符串
            HTML: `
            <h2>
                信息
                <b class="close">X</b>
            </h2>
            <div class="con">
                <p>
                    First Name
                </p>
                <input type="text">
                <p>
                    Last Name
                </p>
                <input type="text">
                <p>
                    userName
                </p>
                <input type="text">

            </div>
            <button class="ok">确定</button>
            <button class="no">取消</button>
            `,
            okClick: function (val1, val2, val3) {
                // 新增数据
                $.get("tbody").innerHTML += `
                <tr>
                    <td>${$.get("tbody").children.length + 1}</td>
                    <td>${val1}</td>
                    <td>${val2}</td>
                    <td>${val3}</td>
                    <td>
                        <button class="modify">编辑</button>
                        <button class="delete">删除</button>
                    </td>
                </tr>

                `
                // console.log(val1, val2, val3)
            }
        })
    })
    // 事件委托点击事件
    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;//获取事件源
        // 点击编辑
        if (tar.className === "modify") {
            // 根据点击的编辑按钮  获取对应的数据
            var val1 = tar.parentNode.parentNode.children[1].innerHTML,
                val2 = tar.parentNode.parentNode.children[2].innerHTML,
                val3 = tar.parentNode.parentNode.children[3].innerHTML;
            // 调用弹框
            new Dialog({
                HTML: `
                <h2>
                    信息
                    <b class="close">X</b>
                </h2>
                <div class="con">
                    <p>
                        First Name
                    </p>
                    <input type="text" value=${val1}>
                    <p>
                        Last Name
                    </p> 
                    <input type="text" value=${val2}>
                    <p>
                        userName
                    </p>
                    <input type="text" value=${val3}>
        
                </div>
                <button class="ok">确定</button>
                <button class="no">取消</button>
                `,
                okClick: function (a, b, c) {
                    // 更新数据
                    tar.parentNode.parentNode.children[1].innerHTML = a
                    tar.parentNode.parentNode.children[2].innerHTML = b
                    tar.parentNode.parentNode.children[3].innerHTML = c
                }
            })
        }
        // 点击删除
        if (tar.className === "delete") {
            // 根据节点关系  删除对应的父元素
            tar.parentNode.parentNode.remove();
        }
    })

    // 模糊搜索
    $.get(".search").addEventListener("input", function () {
        //获取搜索框的值
        var userVal = this.value;
        // 遍历tbody下所有子元素
        [...$.get("tbody").children].forEach(function (item) {
            // 判断firstName 是否包含用户输入的值   条件成立  显示   否则 隐藏
            item.style.display = item.children[1].innerHTML.includes(userVal) ? "table-row" : "none"
        })

    })
})



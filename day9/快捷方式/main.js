// 配置
require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        d: "dialog",
        $: "dom"
    }
})


// 引入
require(["data", "d", "$"], function (data, Dialog, $) {
    var box = $.get(".box"),
        add = $.get(".add");
    // 数据渲染
    box.innerHTML = data.map(function (item) {
        return `
        <dl>
            <b>编辑</b>
            <dd>
                <img src="${item.url}" alt="">
            </dd>
            <dt>
               ${item.title}
            </dt>
            <p>${item.address}</p>
        </dl>
        `
    }).join("");
    // 添加新增点击事件
    add.addEventListener("click", function () {
        // 调用弹框
        new Dialog({
            HTML: `
            <h2>添加快捷方式</h2>
                <p>名称</p>
                <input type="text" class="myName">
                <p>网址</p>
                <input type="text" class="address">
                <p>
                    <button class="del">删除</button>
                    <button class="close">取消</button>
                    <button class="finish">完成</button>
                </p>
            `,
            // 确认回调函数
            okClick: function (val1, val2) {
                box.innerHTML += `
                <dl>
                    <b>编辑</b>
                    <dd>
                        <img src="./img/15.jpg" alt="">
                    </dd>
                    <dt>
                        ${val1}
                    </dt>
                    <p>${val2}</p>
                </dl>
                `
            },
            // 取消回调函数
            noClick: function () {
                console.log("取消")
            },
            // 删除回调函数
            delClick: function () {
                console.log("删除")
            },
            // 是否禁用删除按钮
            isDelFlag: true
        })
    })

    // 事件委托
    box.addEventListener("click", function (e) {
        // 获取事件源
        var tar = e.target;
        // 判断事件源是不是 b 标签
        if (tar.nodeName === "B") {
            //  获取名称的值
            var val = tar.parentNode.children[2].innerHTML;
            //  获取网址的值
            var val1 = tar.parentNode.children[3].innerHTML;
            // 调用弹框
            new Dialog({
                HTML: `
                <h2>添加快捷方式</h2>
                <p>名称</p> 
                <input type="text" class="myName" value=${val}>
                <p>网址</p>
                <input type="text" class="address" value=${val1}>
                <p>
                    <button class="del">删除</button>
                    <button class="close">取消</button>
                    <button class="finish">完成</button>
                </p>
                `,
                okClick: function (val1, val2) {
                    // 更新数据
                    tar.parentNode.children[2].innerHTML = val1
                    tar.parentNode.children[3].innerHTML = val2
                },
                delClick: function () {
                    // 根据节点关系 删除父元素
                    tar.parentNode.remove();
                }
            })
        }
    })
})
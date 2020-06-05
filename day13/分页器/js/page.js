define(function () {
    function Page(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            this.render();
        },
        render: function () {
            // 获取对应的数据
            // data 大数据
            // num 显示的个数
            // index 下标
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num);
            console.log(data)
            this.tbody.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.sex}</td>
                </tr>
                `
            }).join("")

            // 获取最大分页器页码
            this.maxLen = Math.ceil(this.data.length / this.num);
            var str = "";
            for (var i = 1; i <= this.maxLen; i++) {
                str += `<li>${i}</li>`
            }
            this.page.innerHTML = str;
            this.page.children[this.index].classList.add("active");
        }
    }
    return Page;
})
define(["velocity.min"], function (V) {
    function Select(opt) {
        Object.assign(this, opt)
        this.init()
    }


    Select.prototype = {
        constructor: Select,
        init: function () {
            this.render()
            this.bindEvent()
        },
        render: function () {
            console.log(this.data)
            var str = "";
            this.data.forEach(function (item) {
                str += "<li>";
                str += item.childCity ? `<img src="img/close.png" alt="">` : "";
                str += `<input type="checkbox">`
                for (var key in item) {
                    if (!isNaN(key)) {
                        str += `<span>${item[key]}</span>`
                    }
                }
                str += "<ul>"
                if (item.childCity) {
                    item.childCity.forEach(function (item1) {
                        str += ` <li>
                        <input type="checkbox">`
                        for (var key in item1) {
                            str += `<span>${item1[key]}</span>`
                        }
                        str += ` </li>`
                    })
                }
                str += "</ul></li>";
            })
            this.oUl.innerHTML = str;
        },
        bindEvent: function () {
            this.oUl.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    if (tar.parentNode.lastElementChild.style.display !== "block") {
                        V(tar, {
                            rotateZ: 90
                        })
                        V(tar.parentNode.lastElementChild, "slideDown")
                    } else {
                        V(tar, "reverse")
                        V(tar.parentNode.lastElementChild, "slideUp")
                    }

                }
            })
            this.oBtn.addEventListener("click", () => {
                this.oSelected.innerHTML = [...this.oUl.querySelectorAll("input:checked")].map(item => {
                    return item.nextElementSibling.innerHTML
                }).join("|")
            })
        }
    }


    return Select
})
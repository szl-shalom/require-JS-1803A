define(function () {
    function Mes(opt) {
        Object.assign(this, opt);
        this.init();

    }
    Mes.prototype = {
        constructor: Mes,
        init: function () {
            var div = document.createElement("div");
            div.style = `
                background:${this.background};
                border:1px solid ${this.borderColor};
                width:100%;
                height:50px;
                line-height:50px;
                border-radius:25px;
            `;
            div.innerHTML = this.title;
            document.body.appendChild(div);
        }
    }
    return Mes;
})
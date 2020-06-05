/*
 * @Description: This is a JS program !d
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-30 15:25:30
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-30 16:55:20
 */
define(function () {
    function Sanji(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Sanji.prototype = {
        constructor: Sanji,
        init: function () {
            // 渲染省
            this.render(this.province, this.data);
            //绑定事件
            this.bindEvent();
            console.log(this.data)
        },
        /**
         * @description:  渲染方法
         * @ele  { Object }  代表渲染的节点
         * @data { Array }   代表渲染的数据
         * @return:  无
         */
        render: function (ele, data, ) {
            ele.innerHTML = data.map(function (item) {
                return `
                    <option value="">${item.name || item}</option>
                `
            }).join("");
        },
        bindEvent: function () {
            var that = this;
            // 省改变事件
            this.province.addEventListener("change", function () {
                // 下拉菜单取下标  select.selectedIndex 
                that.provinceIndex = this.selectedIndex;//获取当前select框选中的下标
                var data = that.data[that.provinceIndex].cityList;//获取相应的城市数据
                that.render(that.city, data);//渲染城市
            })
            // 城市改变事件
            this.city.addEventListener("change", function () {
                var cityIndex = this.selectedIndex;//获取当前select框选中的下标
                var data = that.data[that.provinceIndex].cityList[cityIndex].areaList;//区的数据
                that.render(that.area, data)
            })
        }
    }
    return Sanji;
})
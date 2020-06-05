/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-04-01 10:43:04
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-04-01 10:45:26
 */
define(function () {
    return {
        get: function (el) {
            return document.querySelector(el)
        },
        gets: function (el) {
            return document.querySelectorAll(el)
        },
    }
})
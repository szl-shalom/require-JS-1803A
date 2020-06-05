/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-21 11:37:42
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-21 11:42:14
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


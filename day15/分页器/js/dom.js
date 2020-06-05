define(function () {
    return {
        get: function (el, par) {
            par = par || document;
            return par.querySelector(el);
        },
        gets: function (el, par) {
            par = par || document;
            return document.querySelectorAll(el);
        }
    }
})
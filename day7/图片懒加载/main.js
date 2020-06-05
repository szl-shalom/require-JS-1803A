var imgs = [...document.querySelectorAll("img")];



document.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop;

    imgs.forEach(function (item) {
        console.log(scroll)
        if (item.getBoundingClientRect().top < scroll) {
            item.src = item.getAttribute("realSrc")
        }
    })
})
require(["data","sel","dom"],function(data,Sel,D){
    new Sel({
        data:data,
        oBtn:D.get("button"),
        oSelected:D.get(".selected"),
        oUl:D.get(".list >ul")
    })
})
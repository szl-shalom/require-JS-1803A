define(function(){
    return {
        get:function(sel,context){
            context = context || document;
            return context.querySelector(sel);
        },
        gets:function(sel,context){
            context = context || document;
            return context.querySelectorAll(sel);
        }
    }
})
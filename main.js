var rect = document.querySelector("#rect");

rect.addEventListener('mousemove',function(e){
    var x = e.offsetX;
    if(x <= "200"){
        var redcolor = gsap.utils.mapRange(0,200,255,0,x);
        gsap.to(rect,{
            backgroundColor : `rgb(${redcolor},0,0)`
        });
    }
    else{
        var greencolor = gsap.utils.mapRange(200,400,0,255,x);
        gsap.to(rect,{
            backgroundColor : `rgb(0,${greencolor},0)`
        });
    }
})

rect.addEventListener('mouseleave',function(){
    gsap.to(rect,{
        backgroundColor : `#fff`
    });
})
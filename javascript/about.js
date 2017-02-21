function resize() {
    var el=document.getElementById("colss");
    var height=window.innerHeight;
    var width=window.innerWidth;
    if(width<400){
        el.style.marginTop="50px";
    }
    else{
        el.style.marginTop="0px";
    }
}

window.onresize=resize;
window.onload=resize;
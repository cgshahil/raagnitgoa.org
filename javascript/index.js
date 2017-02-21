function resize(){
    
    
    var width=window.innerWidth;
    var el=document.getElementsByTagName("p")
    var img=document.getElementById("title-img");
    if((width<890)&&(width>490)){
        
        el[0].style.fontSize="28px";
        el[1].style.fontSize="22px";img.style.width="60%";
    }
   else if(width>890){img.style.width="35%";}
   else if(width<490){img.style.width="80%";}
  
  

}
window.onload=resize;
window.onresize=resize;

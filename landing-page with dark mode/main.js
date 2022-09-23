var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("nightMode")
    if(document.body.classList.contains("nightMode")){
      icon.src ="portfolio_site_img/sun.png" ;
    }else{
        icon.src ="portfolio_site_img/moon.png" ;
    }
}

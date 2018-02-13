function getE(id){
    return document.getElementById(id);}


getE('Home').onmousemove = function (e){
	getE('id-Home').style.display = "flex";
	getE('id-Free').style.display = "none";
	getE('id-About').style.display = "none";
    e.stopPropagation(); // - зупиняє наступні події	
  }
//----------------------------------------------------------
getE('Free').onmousemove = function (e){
	getE('id-Free').style.display = "flex";
	getE('id-Home').style.display = "none";
	getE('id-About').style.display = "none";
    getE('id-Free').style.left='300px',
    e.stopPropagation(); // - зупиняє наступні події	
  }

//--------------------------------------------------------
getE('About').onmousemove = function (e){
	getE('id-About').style.display = "flex";
	getE('id-Home').style.display = "none";
	getE('id-Free').style.display = "none";
    getE('id-About').style.left='420px',
    e.stopPropagation(); // - зупиняє наступні події	
  }

document.body.onclick=function(e){
    if(e.target.className!="nav-menu" && e.target.className!="nav-pystoj"
	  && e.target.className!="nav-menu-tr" && e.target.className!="nav-menu-h2"
	  && e.target.className!="nav-menu-p"){ 
		getE('id-Home').style.display = "none";
		getE('id-Free').style.display = "none";
		getE('id-About').style.display = "none";
		  }}
//---------------------------------------------------------------





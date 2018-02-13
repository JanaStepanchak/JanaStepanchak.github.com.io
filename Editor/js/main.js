function getE(id){
    return document.getElementById(id);}
//*********************************
function f1(){
	getE("text").value=getE('box').innerHTML;
	document.forms.form1.style.display = "flex";
	document.forms.form2.style.display = "none";
	getE('box2').style.display = "block";
	getE('box').style.display = "none";}

function f2(){
	document.forms.form2.style.display = "flex";
	document.forms.form1.style.display = "none";
	getE('box').style.display = "block";
	getE('box2').style.display = "none";
	getE('Dodatu').style.display = "none";}
//***********************************
var Zberegtu=1;
function fZberegtu(){

	if(Zberegtu==1){
		 getE('box').innerHTML=getE("text").value; 
		getE('box2').style.display = "block";
		 getE('box').style.display = "none";
        Zberegtu=0;	}
	if(Zberegtu==0){
		
//		getE("text").value="";
		getE('box').style.display = "block";
		{getE('box2').style.display = "none";
		Zberegtu=1;}}}



function f21(){
	var y = document.forms.form2.RozmirSH;
    for (var i=0; i<y.length; i++){
        if(y[i].selected){
			var z =  y[i].innerHTML;
		getE('box').style.fontSize = z;}}}

//*********************************

function fTupSH(){
		var y = document.forms.form2.TupSH;
    for (var i=0; i<y.length; i++){
        if(y[i].selected){
			var z =  y[i].innerHTML;
		getE('box').style.fontFamily = z;}}}

//*********************************

function f231(){
	if(document.forms.form2.check1.checked==true){getE('box').style.fontWeight = 'bold';}
	else{getE('box').style.fontWeight = 'normal';}}

function f232(){
	if(document.forms.form2.check2.checked==true){getE('box').style.fontStyle = 'italic';}
	else{getE('box').style.fontStyle = 'normal';}}

function f233(){
	if(document.forms.form2.check3.checked==true){getE('box').style.textDecoration = 'underline';}
	else{getE('box').style.textDecoration='none';}}

function f24(){
	getE('box').style.textAlign = document.forms.form2.radio1.value;}

//*********************************

getE('colorText').onclick = function (e){
	getE('color').style.display = "flex";
	getE('fon').style.display = "none";
    e.stopPropagation(); // - зупиняє наступні події
  }

getE('colorFon').onclick = function (e){
	getE('color').style.display = "none";
	getE('fon').style.display = "flex";	
  document.getElementById('fon111').style.display='flex';
  document.getElementById('fon222').style.display='none'; 
    e.stopPropagation(); // - зупиняє наступні події
}

document.body.onclick=function(e){
	//console.log(e.target);
    if(e.target.className!="colorBox" && e.target.className!="fonBox" && e.target.className!="fonImg" && e.target.className!="fonBox1"  ){ 
		//позиція мишки де відбувся клік НЕ повинна бути class"colorBox" && class"fonBox" тоді
		getE("color").style.display="none";
        getE("fon").style.display="none";
	    getE('fon111').style.display='none';
   		getE('fon222').style.display='none';  }}

//****************************

document.getElementById('fonC').onclick=function(){
   getE('fon111').style.display='flex';
   getE('fon222').style.display='none'; }
document.getElementById('fonZ').onclick=function(){
    getE('fon222').style.display='flex'; 
    getE('fon111').style.display='none';  }


for(var i=0; i<9; i++){
document.querySelectorAll('.colorBox')[i].onclick=function(){
    getE('box').style.color = this.style.background;}}

for(var z=0; z<18; z++){
document.querySelectorAll('.fonBox')[z].onclick=function(){
    getE('box').style.background = this.style.background;
    		getE('box').style.backgroundSize=" cover";
			getE('box').style.backgroundRepeat="no-repeat";	getE('box').style.backgroundPosition="center";}}


//getE("fileZ").onchange = function(){
//	   	files = this.files;
//	for(var a=0;a<files.length;a++)
//	alert(files[a].name);
//	alert(this.value);
//	document.getElementsByTagName("body")[0].style.background="url("+this.value+")" }




getE("fileZ").onchange = function() {
  var preview = getE('box');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.style.background = "url("+reader.result+")";
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}




//*************************************************

function fDodatu(){
    getE('Dodatu').style.display = "block";
    getE('TabSp').style.display = "block";
    getE('box').style.display = "none";
    getE('box2').style.display = "block"; }

getE('IdTab').onclick = function fTab(){    
    getE('formTab').style.display = "block";
    getE('Sp').style.display = "none";
    getE('MarkerSpusok').style.display = "none";
    getE('NumberSpusok').style.display = "none";
}
getE('IdSp').onclick = function  fSp(){
    getE('formTab').style.display = "none";
    getE('Sp').style.display = "block";}

//*******************таблицб***********************
getE('skTAB').onclick = function fSkTAB(){

        getE('rjadok').value=""; 
        getE('stov').value="";  
        getE('surKom').value=""; 
        getE('vusKom').value=""; 
        getE('tovshina').value=""; 
	    getE('colg').value=""; }
   
getE('stvTAB').onclick = function fStvTAB(){    
  getE('Dodatu').style.display = "none";
    getE('box').style.display = "none";
    getE('box2').style.display = "block";
     
var p1 = document.createElement('p');
p1= getE("text").value;    
    
        var th = getE('rjadok'); 
        var tr = getE('stov'); 
        var a = getE('surKom').value;
        var b = getE('vusKom').value;
        var br =getE('tovshina').value;
	    var colg =getE('colg').value;
        var borderC = document.forms.TabY.colorLin;
                for(var i=0;i<borderC.length; i++){
                if(borderC[i].selected){
                  BC = borderC[i].innerHTML; }  }  
var tableTH="";
     for(i=0; i<th.value; i++ ){
            var tableTH = tableTH +"<th> Text </th>" }
    
var tableTR="";
    for(i=0; i<tr.value; i++ ){
           var tableTR = tableTR +"<tr> "+tableTH+" </tr>"     }
    
    ////////////////////
    
    getE("text").value = p1+'<table border="'+br+'" bordercolor="'+BC+'" cellspacing="'+colg+'" width="'+a+'" height="'+b+'"  >'+tableTR+'</table>';  }

//***************список****************

function fMarkerSpusok(){
	document.forms.MarkerSpusok.style.display = "block";	document.forms.NumberSpusok.sty
//le.display = "none";
	getE('KE_Sp1').style.display = "none";	
	getE('stvSp').style.display = "none";
}
function fNumberSpusok(){
	document.forms.NumberSpusok.style.display = "block";
	document.forms.MarkerSpusok.style.display = "none";
	getE('KE_N_Sp1').style.display = "none";
	getE('stvNSp').style.display = "none";}

function TipMarkeraSp(){
	getE('KE_Sp1').style.display = "block";	}
function fKE_Sp(){
	var y = (getE('KE_Sp').value)/1;
        if (y== getE('KE_Sp').value && 0<y) 
        {getE('KE_Sp').style.borderBottomColor="#fff";   getE('stvSp').style.display = "block";}
  else{getE('KE_Sp').style.borderBottomColor="#f00";}}

function TipMarkeraNSp(){
	getE('KE_N_Sp1').style.display = "block";	}
function fKE_N_Sp(){
	var y = (getE('KE_N_Sp').value)/1;
        if (y== getE('KE_N_Sp').value && 0<y) 
            {getE('KE_N_Sp').style.borderBottomColor="#fff";  
			getE('stvNSp').style.display = "block";}
        else{
        getE('KE_N_Sp').style.borderBottomColor="#f00";
	}	}

//**********маркерований список
getE('stvSp').onclick = function fStvSp(){    
    getE('Dodatu').style.display = "none";
    getE('box').style.display = "none";
    getE('box2').style.display = "block";
   
	
var p1 = document.createElement('p');
p1= getE("text").value;    
    
   
var x = getE('KE_Sp');    
var y = document.forms.MarkerSpusok.tipMarkera;
        for(var i=0;i<y.length; i++){
        if(y[i].selected){
          Y = y[i].innerHTML; }  }  
var li="";
       for(i=0; i<x.value; i++ ){
          var li = li + '<li>'+"Text"+'</li>';
     }
var ul = '<ul style="list-style-type:'+Y+'">'+li+'</ul>';
    
    getE("text").value = p1+ul;   
}
// *********** нумерований спи сок
getE('stvNSp').onclick = function fStvSp(){    
    getE('Dodatu').style.display = "none";
    getE('box').style.display = "none";
    getE('box2').style.display = "block";
   
	
var p1 = document.createElement('p');
p1= getE("text").value;    
    
      
var x = getE('KE_N_Sp');    
var y = document.forms.NumberSpusok.tipMarkeraNSp;
        for(var i=0;i<y.length; i++){
        if(y[i].selected){
          Y = y[i].innerHTML; }  }  
var li="";
       for(i=0; i<x.value; i++ ){
          var li = li + '<li>'+"Text"+'</li>';
     }
var ol = '<ol type="'+Y+'">'+li+'</ol>';
 
    getE("text").value = p1+ol;   
}

///2222222222222222222222222222222222222222222222222222222222

 function getTag(tag,number){
    return document.getElementsByTagName(tag)[number];
 }


function fNumber0(){
       var y = (document.forms.TabY.rjadok2.value)/1;
        if (y== document.forms.TabY.rjadok2.value && 0<y) 
            {
        document.forms.TabY.rjadok2.style.borderBottomColor="#fff";
       getTag('span',[1]).style.display="none";
            }
        else{
        document.forms.TabY.rjadok2.style.borderBottomColor="#f00";
        getTag('span',[1]).style.display="inline-block";
            }    }

function fNumber1(){
       var y = (document.forms.TabY.stov.value)/1;
        if (y== document.forms.TabY.stov.value && 0<y) 
            {
        document.forms.TabY.stov.style.borderBottomColor="#fff";
       getTag('span',[2]).style.display="none";
            }
        else{
        document.forms.TabY.stov.style.borderBottomColor="#f00";
        getTag('span',[2]).style.display="inline-block";
            }    }

function fNumber2(){
       var y = (document.forms.TabY.surKom.value)/1;
        if (y== document.forms.TabY.surKom.value && 0<y) 
            {
        document.forms.TabY.surKom.style.borderBottomColor="#fff";
       getTag('span',[3]).style.display="none";
            }
        else{
        document.forms.TabY.surKom.style.borderBottomColor="#f00";
        getTag('span',[3]).style.display="inline-block";
            }    }
function fNumber3(){
       var y = (document.forms.TabY.vusKom.value)/1;
        if (y== document.forms.TabY.vusKom.value && 0<y) 
            {
        document.forms.TabY.vusKom.style.borderBottomColor="#fff";
       getTag('span',[4]).style.display="none";
            }
        else{
        document.forms.TabY.vusKom.style.borderBottomColor="#f00";
        getTag('span',[4]).style.display="inline-block";
            }    }
function fNumber4(){
       var y = (document.forms.TabY.tovshina.value)/1;
        if (y== document.forms.TabY.tovshina.value && 0<y) 
            {
        document.forms.TabY.tovshina.style.borderBottomColor="#fff";
       getTag('span',[5]).style.display="none";
            }
        else{
        document.forms.TabY.tovshina.style.borderBottomColor="#f00";
        getTag('span',[5]).style.display="inline-block";
            }    }
function fNumber5(){
       var y = (document.forms.TabY.colg.value)/1;
        if (y== document.forms.TabY.colg.value && 0<y) 
            {
        document.forms.TabY.colg.style.borderBottomColor="#fff";
       getTag('span',[6]).style.display="none";
            }
        else{
        document.forms.TabY.colg.style.borderBottomColor="#f00";
        getTag('span',[6]).style.display="inline-block";
            }    }

//33333333333333333333333333333333333333333333333333333333333
 var check = 0;
 var click = 1;
 getE('blok').onclick = function blokMain() {   
     
    if(check == 1) {
     var password = "123456"    
     var userPassword=prompt("Password");
     if( password===userPassword ){ 
         getE('main').style.pointerEvents="auto";  
         getE('headerBlok').style.display = "none"; 
         click = 0;
         check=0;
     }
     else{         
         getE('main').style.pointerEvents="none";  
         getE('headerBlok').style.display = "inline-block"; 
         click = 1;
         }
    }else{
        check=1;
        getE('main').style.pointerEvents="none";  
         getE('headerBlok').style.display = "inline-block";
    }
   }   
     

 
 
//2.  Як додаток: Можна написати функцію яка буде керувати всіма зникненнями та появами панельок. Тобто повинна бути функція яка прийме у себе параметр, а саме ІД елемента, який відповідає за панельку 
// (наприклад "панель стилів" чи "панель редагування".) і при виклику її на конкретному кліку по певній кнопці, ця функція повинна запустити панель, а всі інші приховати. В такому разі всі інші панелі повинні по дефолту бути приховані, а сама функція повинна в собі містити перевірки на ІД переданих елементів.
//Приблизний вигляд роботи такої функції:
 
 
// function panelFunction(innerPanel){
//var overlay = id("overlay"); // hider
//var panel = id("panel"); // panelblock (all)
//var colorPicker = id("colorPicker"); 
//var createTableWrap = id("createTableWrap"); // tablecreate
//var createListWrap = id("createListWrap"); // listcreate
//colorPicker.style.display = "none"; // default
//createTableWrap.style.display = "none";
//createListWrap.style.display = "none";
//overlay.style.display = "block"; // default
//panel.style.display = "block";
//     
//overlay.onclick = function() { 
//this.style.display = "none"; //hidepanel
//panel.style.display = "none";
//}
//
//if (innerPanel == "colorPiker") {
//colorPicker.style.display = "table";
//colorPickerFunction("color");
//} else if (innerPanel == "backgroundButton") {
//colorPicker.style.display = "table";
//colorPickerFunction("background");
//} else if (innerPanel == "createTablePanel") {
//createTableWrap.style.display = "table"; //tablepanelon
//} else if (innerPanel == "createListPanel") {
//createListWrap.style.display = "table"; // listpanelon
//}
//}







 



       














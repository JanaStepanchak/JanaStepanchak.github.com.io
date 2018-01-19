function getE(id) {
	return document.getElementById(id);
}
document.querySelectorAll('.services-icon')[0].onclick = function () {
	var j = 0;
	document.querySelectorAll('.services-blok2')[j].style.display = 'block';
	document.querySelectorAll('.services-blok3')[j].style.display = 'block';
	for (var i = 0; i < 4; i++) {
		if (i != j) {
			document.querySelectorAll('.services-blok2')[i].style.display = 'none';
			document.querySelectorAll('.services-blok3')[i].style.display = 'none';
		}
	}
};
document.querySelectorAll('.services-icon')[1].onclick = function () {
	var j = 1;
	document.querySelectorAll('.services-blok2')[j].style.display = 'block';
	document.querySelectorAll('.services-blok3')[j].style.display = 'block';
	for (var i = 0; i < 4; i++) {
		if (i != j) {
			document.querySelectorAll('.services-blok2')[i].style.display = 'none';
			document.querySelectorAll('.services-blok3')[i].style.display = 'none';
		}
	}
};
document.querySelectorAll('.services-icon')[2].onclick = function () {
	var j = 2;
	document.querySelectorAll('.services-blok2')[j].style.display = 'block';
	document.querySelectorAll('.services-blok3')[j].style.display = 'block';
	for (var i = 0; i < 4; i++) {
		if (i != j) {
			document.querySelectorAll('.services-blok2')[i].style.display = 'none';
			document.querySelectorAll('.services-blok3')[i].style.display = 'none';
		}
	}
};
document.querySelectorAll('.services-icon')[3].onclick = function () {
	var j = 3;
	document.querySelectorAll('.services-blok2')[j].style.display = 'block';
	document.querySelectorAll('.services-blok3')[j].style.display = 'block';
	for (var i = 0; i < 4; i++) {
		if (i != j) {
			document.querySelectorAll('.services-blok2')[i].style.display = 'none';
			document.querySelectorAll('.services-blok3')[i].style.display = 'none';
		}
	}
};
//console.log(click);
var click = 1;
var check = 0;
getE('services-switch1').onclick = function () {
	getE('clients-said-slide1').style.display = 'flex';
	getE('clients-said-slide2').style.display = 'none';
	getE('clients-said-slide3').style.display = 'none';
	getE('services-switch1').style.backgroundColor = 'rgba(252, 103, 68, 0.8)';
	getE('services-switch2').style.backgroundColor = 'rgb(224, 224, 224)';
	getE('services-switch3').style.backgroundColor = 'rgb(224, 224, 224)';
	click = 1;
};
getE('services-switch2').onclick = function () {
	getE('clients-said-slide1').style.display = 'none';
	getE('clients-said-slide2').style.display = 'flex';
	getE('clients-said-slide2').style.justifyContent = 'space-between';
	getE('clients-said-slide3').style.display = 'none';
	getE('services-switch2').style.backgroundColor = '#fc6744';
	getE('services-switch1').style.backgroundColor = '#e0e0e0';
	getE('services-switch3').style.backgroundColor = '#e0e0e0';
	click = 2;
};
getE('services-switch3').onclick = function () {
	getE('clients-said-slide1').style.display = 'none';
	getE('clients-said-slide2').style.display = 'none';
	getE('clients-said-slide3').style.display = 'flex';
	getE('clients-said-slide3').style.justifyContent = 'space-between';
	getE('services-switch3').style.backgroundColor = 'rgba(252, 103, 68, 0.8)';
	getE('services-switch2').style.backgroundColor = 'rgb(224, 224, 224)';
	getE('services-switch1').style.backgroundColor = 'rgb(224, 224, 224)';
	click = 3;
};
getE('services-switch-l').onclick = function () {
	if (click == 1 && check == 0) {
		getE('clients-said-slide1').style.display = 'none';
		getE('clients-said-slide2').style.display = 'none';
		getE('clients-said-slide3').style.display = 'flex';
		getE('clients-said-slide3').style.justifyContent = 'space-between';
		getE('services-switch3').style.backgroundColor = '#fc6744';
		getE('services-switch2').style.backgroundColor = '#e0e0e0';
		getE('services-switch1').style.backgroundColor = '#e0e0e0';
		click = 3;
		check = 1;
	}
	if (click == 2 && check == 0) {
		getE('clients-said-slide1').style.display = 'flex';
		getE('clients-said-slide2').style.display = 'none';
		getE('clients-said-slide3').style.display = 'none';
		getE('services-switch1').style.backgroundColor = '#fc6744';
		getE('services-switch2').style.backgroundColor = '#e0e0e0';
		getE('services-switch3').style.backgroundColor = '#e0e0e0';
		click = 1;
		check = 1;
	}
	if (click == 3 && check == 0) {
		getE('clients-said-slide1').style.display = 'none';
		getE('clients-said-slide2').style.display = 'flex';
		getE('clients-said-slide2').style.justifyContent = 'space-between';
		getE('clients-said-slide3').style.display = 'none';
		getE('services-switch2').style.backgroundColor = '#fc6744';
		getE('services-switch1').style.backgroundColor = '#e0e0e0';
		getE('services-switch3').style.backgroundColor = '#e0e0e0';
		click = 2;
		check = 1;
	}
	check = 0;
};
getE('services-switch-r').onclick = function () {
	if (click == 1 && check == 0) {
		getE('clients-said-slide1').style.display = 'none';
		getE('clients-said-slide3').style.display = 'none';
		getE('services-switch3').style.backgroundColor = '#e0e0e0';
		getE('services-switch1').style.backgroundColor = '#e0e0e0';
		getE('clients-said-slide2').style.display = 'flex';
		getE('clients-said-slide2').style.justifyContent = 'space-between';
		getE('services-switch2').style.backgroundColor = '#fc6744';
		click = 2;
		check = 1;
	}
	if (click == 2 && check == 0) {
		getE('clients-said-slide1').style.display = 'none';
		getE('clients-said-slide2').style.display = 'none';
		getE('services-switch2').style.backgroundColor = '#e0e0e0';
		getE('services-switch1').style.backgroundColor = '#e0e0e0';
		getE('clients-said-slide3').style.display = 'flex';
		getE('clients-said-slide3').style.justifyContent = 'space-between';
		getE('services-switch3').style.backgroundColor = '#fc6744';
		click = 3;
		check = 1;
	}
	if (click == 3 && check == 0) {
		getE('clients-said-slide2').style.display = 'none';
		getE('clients-said-slide3').style.display = 'none';
		getE('services-switch2').style.backgroundColor = '#e0e0e0';
		getE('services-switch3').style.backgroundColor = '#e0e0e0';
		getE('clients-said-slide1').style.display = 'flex';
		getE('services-switch1').style.backgroundColor = '#fc6744';
		click = 1;
		check = 1;
	}
	check = 0;
};
setInterval(getE('services-switch-r').onclick = function () {
	if (click == 1 && check == 0) {
		getE('clients-said-slide1').style.display = 'none';
		getE('clients-said-slide3').style.display = 'none';
		getE('services-switch3').style.backgroundColor = '#e0e0e0';
		getE('services-switch1').style.backgroundColor = '#e0e0e0';
		getE('clients-said-slide2').style.display = 'flex';
		getE('clients-said-slide2').style.justifyContent = 'space-between';
		getE('services-switch2').style.backgroundColor = '#fc6744';
		click = 2;
		check = 1;
	}
	if (click == 2 && check == 0) {
		getE('clients-said-slide1').style.display = 'none';
		getE('clients-said-slide2').style.display = 'none';
		getE('services-switch2').style.backgroundColor = '#e0e0e0';
		getE('services-switch1').style.backgroundColor = '#e0e0e0';
		getE('clients-said-slide3').style.display = 'flex';
		getE('clients-said-slide3').style.justifyContent = 'space-between';
		getE('services-switch3').style.backgroundColor = '#fc6744';
		click = 3;
		check = 1;
	}
	if (click == 3 && check == 0) {
		getE('clients-said-slide2').style.display = 'none';
		getE('clients-said-slide3').style.display = 'none';
		getE('services-switch2').style.backgroundColor = '#e0e0e0';
		getE('services-switch3').style.backgroundColor = '#e0e0e0';
		getE('clients-said-slide1').style.display = 'flex';
		getE('services-switch1').style.backgroundColor = '#fc6744';
		click = 1;
		check = 1;
	}
	check = 0}
			,5000);
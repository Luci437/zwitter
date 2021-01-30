var ii = 0;
function logoclick() {
	var b = document.getElementById('left-bottom-box1');
	var c = document.getElementById('go-to-top');
	var d = document.getElementById('go-to-top2');
	var e = document.getElementById('display');
	var g = document.getElementById('pillo-and-zwitter');
	var h = document.getElementById('time-indicater');
	var j = document.getElementById('no-pro-remain');
	var k = document.getElementById('current-pro-number');

	g.style.transition = '0.2s';
	j.style.transition = '0.2s';
	k.style.transition = '0.4s';

	if(ii == 0) {
	b.style.left = '-1200px';
	c.style.left = '-1200px';
	d.style.left = '-1200px';
	e.style.left = '2200px';
	g.style.left = '100px';
	j.style.top = '-2000px';
	h.style.left = '-1000px';
	k.style.top = '-2500px';
	ii = 1;
	}
	else {
	b.style.left = '10px';
	c.style.left = '10px';
	d.style.left = '250px';
	e.style.left = '400px';
	g.style.left = '10000px';	
	j.style.top = '250px';
	h.style.left = '10px';
	k.style.top = '250px';
	ii = 0;
	}

}
function playloading() {
	var el1 = document.getElementById('loading-circles');
	var el2 = document.getElementById('loading-circle-play-button');
	var el3 = document.getElementById('leaser-printer');
	var el4 = document.getElementById('letter-world');
	el2.style.left = '-1000px';
	if(el1.style.display == 'none') {
		el1.style.display = 'block';
		el3.style.display = 'block';
		el4.style.display = 'block';
		countloading();
	}
	else {
		el1.style.display = 'none';
	}
}
var loadingno = 0;
function countloading() {
	var el5 = document.getElementById('loading-no');

	var id = setTimeout('countloading()',50);
	loadingno++;
	el5.style.left = '3px';
	if(loadingno == 100) {
		el5.style.left = '0px';
		clearInterval(id);
	}
	if(loadingno == 101) {
		loadingno = 0;
		el5.style.left = '0px';
	}
	el5.innerHTML = loadingno;
}
function wel() {
var a = document.getElementById('welcome-title');
var b = document.getElementById('programe-title');
var c = document.getElementById('thanks-title');
var d = document.getElementById('text-wel');
var el3 = document.getElementById('welcome-list-box');
var el4 = document.getElementById('progra-list-box');
var el5 = document.getElementById('thank-list-box');
var mo4 = document.getElementById('wel-title');
mo4.style.left = '1000px';

a.style.transition = '0.5s';
b.style.transition = '0.5s';
c.style.transition = '0.5s';
el3.style.transition = '0.5s';
el4.style.transition = '0.5s';
el5.style.transition = '0.5s';

a.style.left = '265px';
b.style.left = '-400px';
c.style.left = '900px';
d.style.color = 'rgba(255,255,255,1.0)';

el3.style.top = '0px';
el4.style.left = '1000px';
el5.style.left = '-1000px';

}

function pro() {
var a = document.getElementById('welcome-title');
var b = document.getElementById('programe-title');
var c = document.getElementById('thanks-title');
var el3 = document.getElementById('welcome-list-box');
var el4 = document.getElementById('progra-list-box');
var el5 = document.getElementById('thank-list-box');
var mo4 = document.getElementById('wel-title');
mo4.style.left = '1000px';


a.style.transition = '0.5s';
b.style.transition = '0.5s';
c.style.transition = '0.5s';
el3.style.transition = '0.5s';
el4.style.transition = '0.5s';
el5.style.transition = '0.5s';


a.style.left = '900px';
b.style.left = '250px';
c.style.left = '-400px';
el3.style.top = '1000px';
el4.style.left = '0px';
el5.style.left = '-1000px';
}

function than() {
var a = document.getElementById('welcome-title');
var b = document.getElementById('programe-title');
var c = document.getElementById('thanks-title');
var el3 = document.getElementById('welcome-list-box');
var el4 = document.getElementById('progra-list-box');
var el5 = document.getElementById('thank-list-box');
var mo4 = document.getElementById('wel-title');
mo4.style.left = '1000px';


a.style.transition = '0.5s';
b.style.transition = '0.5s';
c.style.transition = '0.5s';
el3.style.transition = '0.5s';
el4.style.transition = '0.5s';
el5.style.transition = '0.5s';

a.style.left = '-400px';
b.style.left = '900px';
c.style.left = '300px';
el3.style.top = '1000px';
el4.style.left = '1000px';
el5.style.left = '0px';
}

function clrt() {
	var el1 = document.getElementById('cheif-left-to').getContext('2d');

	el1.fillStyle = 'rgba(255,255,255,0.7)';
	el1.lineTo(0,20);
	el1.lineTo(20,0);
	el1.lineTo(30,0);
	el1.lineTo(10,20);
	el1.lineTo(30,40);
	el1.lineTo(20,40);
	el1.lineTo(0,20);
	el1.fill();

	var el2 = document.getElementById('cheif-right-to').getContext('2d');

	el2.fillStyle = 'rgba(255,255,255,0.7)';
	el2.lineTo(0,0);
	el2.lineTo(10,0);
	el2.lineTo(30,20);
	el2.lineTo(10,40);
	el2.lineTo(0,40);
	el2.lineTo(20,20);
	el2.fill();
}


var call1 = 0;
var call2 = 0;
function callnamefinder() {
	var call3 = document.getElementById('window-button-box');
	call2++;
if(call1 < 1) {
	introcrew();
}

call1++;

if(call2%2==0) {
	call3.style.top = '615px';
}else {
	call3.style.top = '640px';
}

}


var in5 = 0;
function introcrew() {
	var in1 = document.getElementById('intro-of-crew-box-1');
	var in2 = document.getElementById('intro-of-crew-box-2');
	var in3 = document.getElementById('intro-of-crew-box-3');
	var in4 = document.getElementById('intro-of-crew-box-4');
	var id  = setTimeout('introcrew();',1000);
	in5++;
	if(in5 > 2) {
		in1.style.webkitTransform = 'rotateX(0deg) translateZ(75px)';
		in4.style.webkitTransform = 'rotateX(90deg) translateZ(75px)';
		in2.style.webkitTransform = 'rotateX(90deg) translateZ(75px)';
		in3.style.webkitTransform = 'rotateX(90deg) translateZ(75px)';
	}
	if(in5 > 4) {
		in1.style.webkitTransform = 'rotateX(-90deg) translateZ(75px)';
		in4.style.webkitTransform = 'rotateX(0deg) translateZ(75px)';
		in2.style.webkitTransform = 'rotateX(90deg) translateZ(75px)';
		in3.style.webkitTransform = 'rotateX(90deg) translateZ(75px)';
	}
	if( in5 > 6) {
		in1.style.webkitTransform = 'rotateX(-90deg) translateZ(75px)';
		in4.style.webkitTransform = 'rotateX(-90deg) translateZ(75px)';
		in2.style.webkitTransform = 'rotateX(0deg) translateZ(75px)';
		in3.style.webkitTransform = 'rotateX(90deg) translateZ(75px)';
	}
	if(in5 > 8) {
		in1.style.webkitTransform = 'rotateX(-90deg) translateZ(75px)';
		in4.style.webkitTransform = 'rotateX(-90deg) translateZ(75px)';
		in2.style.webkitTransform = 'rotateX(-90deg) translateZ(75px)';
		in3.style.webkitTransform = 'rotateX(0deg) translateZ(75px)';
	}
	if(in5 > 10) {
		in1.style.display = 'none';
		in2.style.display = 'none';
		in3.style.display = 'none';
		in4.style.display = 'none';
		namefinder();
		clearInterval(id);
	}
}





var na3 = 0;
function namefinder() {
	var na4 = document.getElementById('crew-remain-name-text');
	var na5 = document.getElementById('aromal');
	var na6 = document.getElementById('ashwin');
	var na7 = document.getElementById('nithin');
	var na8 = document.getElementById('rahul');
	var na9 = document.getElementById('allcrewimg');
	var na10 = document.getElementById('balu');
	var na11 = document.getElementById('hari');
	var na12 = document.getElementById('ps');
	var na13 = document.getElementById('rish');
	var na14 = document.getElementById('harin');
	var na15 = document.getElementById('group');
	var na16 = document.getElementById('babu');

	setTimeout('namefinder()',1000);
	na3++;
	if(na3 > 2) {
		na9.style.opacity = '0.1';
		na5.style.display = 'block';
		na16.style.display = 'none';
		na4.style.left = '450px';
		na4.innerHTML = 'Aromal A';
	}
	if(na3 > 6) {
		na5.style.display = 'none';
		na6.style.display = 'block';
		na4.style.left = '350px';
		na4.innerHTML = 'Ashwin Joshi';
	}
	if(na3 > 10) {
		na6.style.display = 'none';
		na7.style.display = 'block';
		na4.style.left = '370px';
		na4.innerHTML = 'Nithin Thambi';
	}
	if(na3 > 14) {
		na4.style.left = '350px';
		na7.style.display = 'none';
		na8.style.display = 'block';
		na4.innerHTML = 'Abhijith rajan';
	}
	if(na3 > 18) {
		na4.style.left = '350px';
		na8.style.display = 'none';
		na10.style.display = 'block';
		na4.innerHTML = 'Balu V Naveen';
	}	
	if(na3 > 22) {
		na4.style.left = '250px';
		na10.style.display = 'none';
		na11.style.display = 'block';
		na4.innerHTML = 'Hari Krishnan K K';
	}
	if(na3 > 26) {
		na4.style.left = '360px';
		na11.style.display = 'none';
		na12.style.display = 'block';
		na4.innerHTML = 'Abhijith P S';
	}
	if(na3 > 30) {
		na4.style.left = '220px';
		na12.style.display = 'none';
		na13.style.display = 'block';
		na4.innerHTML = 'Rishabh Ravindran';
	}
	if(na3 > 34) {
		na4.style.left = '390px';
		na13.style.display = 'none';
		na14.style.display = 'block';
		na4.innerHTML = 'Harin rajan';
	}
	if(na3 > 38) {
		na4.style.left = '390px';
		na14.style.display = 'none';
		na15.style.display = 'block';
		na4.innerHTML = '';
	}
	if(na3 > 42) {
		na4.style.left = '390px';
		na15.style.display = 'none';
		na16.style.display = 'block';
		na4.innerHTML = 'Akhil Babu';
	}	
	if(na3 > 46) {
		na3 = 0;
	}
}
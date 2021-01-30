var i = 0;
var p = 0;
var l = 0;
var o = 0;
var w = 0;
var s = 0;
var all = 0;
var attempt = 0;
var rwcount = 30;
function reenter() {
	var lc1 = document.getElementById('lock-circle1');
	var lc2 = document.getElementById('lock-circle2');
	var lc3 = document.getElementById('lock-circle3');
	var lc4 = document.getElementById('lock-circle4');
	var lc5 = document.getElementById('lock-circle5');
	var ermsbox = document.getElementById('lock-error-message');

	attempt++;

	if(attempt >= 3) {
		openbox();
		rongwaite();
	} else {
		lc1.style.background = 'rgba(255,255,255,0.0)';
		lc1.style.boxShadow = '0px 6px 0px rgba(255,255,255,0.2) inset,0 0 10px rgba(0,0,0,0.5) inset';
	
		lc2.style.background = 'rgba(255,255,255,0.0)';
		lc2.style.boxShadow = '0px 6px 0px rgba(255,255,255,0.2) inset,0 0 10px rgba(0,0,0,0.5) inset';
	
		lc3.style.background = 'rgba(255,255,255,0.0)';
		lc3.style.boxShadow = '0px 6px 0px rgba(255,255,255,0.2) inset,0 0 10px rgba(0,0,0,0.5) inset';
	
		lc4.style.background = 'rgba(255,255,255,0.0)';
		lc4.style.boxShadow = '0px 6px 0px rgba(255,255,255,0.2) inset,0 0 10px rgba(0,0,0,0.5) inset';
	
		lc5.style.background = 'rgba(255,255,255,0.0)';
		lc5.style.boxShadow = '0px 6px 0px rgba(255,255,255,0.2) inset,0 0 10px rgba(0,0,0,0.5) inset';		
	
		ermsbox.style.left = '-640px';
	
		i = 0;
		p = 0;
		l = 0;
		o = 0;
		w = 0;
		s = 0;
		all = 0; 
	}
}
function rongwaite() {
	var sec = document.getElementById('waite-sec');
	var ermsbox = document.getElementById('lock-error-message');
	var id = setTimeout('rongwaite()',1000);

	if(rwcount < 10) {
	sec.innerHTML = '0'+rwcount;
	}else {
	sec.innerHTML = rwcount;
	}

	if(rwcount == 0) {
		attempt = 0;
		reenter();
		closebox();
		clearInterval(id);
	}else {
	ermsbox.style.left = '-640px';
	rwcount--;
}
}
function lock1() {
	var a = document.getElementById('lock-circle1');
	a.style.transition = '0.5s';
	a.style.background = '#FF3336';
	a.style.boxShadow = '0 0 10px rgba(0,0,0,0.5) inset,0px 6px 0px rgba(255,255,255,0.4) inset,0 0 300px rgba(255,25,28,0.78),0 0 10px rgba(255,25,28,0.88)';	
	p++;
	if(p<2) {
		i++;
		all++;
	if(i==3){
		welcome();
	}
	if(all != 3 && all > 4) {
		wrongcode();
	}
	}	
}
function lock2() {
	var a = document.getElementById('lock-circle2');
	a.style.transition = '0.5s';
	a.style.background = '#FF3336';
	a.style.boxShadow = '0 0 10px rgba(0,0,0,0.5) inset,0px 6px 0px rgba(255,255,255,0.4) inset,0 0 300px rgba(255,25,28,0.78),0 0 10px rgba(255,25,28,0.88)';
	i--;
	w++;
	if(w<2) {
		all++;
	}
	if(all != 3 && all > 4) {
		wrongcode();
	}
}
function lock3() {
	var a = document.getElementById('lock-circle3');
	a.style.transition = '0.5s';
	a.style.background = '#FF3336';
	a.style.boxShadow = '0 0 10px rgba(0,0,0,0.5) inset,0px 6px 0px rgba(255,255,255,0.4) inset,0 0 300px rgba(255,25,28,0.78),0 0 10px rgba(255,25,28,0.88)';
	l++;
	if(l<2) {
		i++;
		all++;
	if(i == 3){
		welcome();
	}
		if(all != 3 && all > 4) {
		wrongcode();
	}
	}
}
function lock4() {
	var a = document.getElementById('lock-circle4');
	a.style.transition = '0.5s';
	a.style.background = '#FF3336';
	a.style.boxShadow = '0 0 10px rgba(0,0,0,0.5) inset,0px 6px 0px rgba(255,255,255,0.4) inset,0 0 300px rgba(255,25,28,0.78),0 0 10px rgba(255,25,28,0.88)';
	i--;
	s++;
	if(s < 2) {
		all++;
	}
	if(all != 3 && all > 4) {
		wrongcode();
	}
}
function lock5() {
	var a = document.getElementById('lock-circle5');
	a.style.transition = '0.5s';
	a.style.background = '#FF3336';
	a.style.boxShadow = '0 0 10px rgba(0,0,0,0.5) inset,0px 6px 0px rgba(255,255,255,0.4) inset,0 0 300px rgba(255,25,28,0.78),0 0 10px rgba(255,25,28,0.88)';
	o++;
	if(o<2) {
		i++;
		all++;
	if(i==3){
		welcome();
	}
	if(all != 3 && all > 4) {
		wrongcode();
	}
	}		
}
function welcome() {
	var a = document.getElementById('lock');
	var b = document.getElementById('box-bottom-light');
	var c = document.getElementById('background-shade1');
	var el1 = document.getElementById('left-bottom-box1');
	var el2 = document.getElementById('go-to-top');
	var el3 = document.getElementById('go-to-top2');
	var el4 = document.getElementById('display');
	var el5 = document.getElementById('oblivin');
	var el6 = document.getElementById('lock-cover');
	var el7 = document.getElementById('window-button-box');
	var el8 = document.getElementById('no-pro-remain');
	var el9 = document.getElementById('current-pro-number');

	a.style.transition = '0.3s';
	b.style.transition = '0.4s';
	c.style.transition = '0.5s';
	el1.style.transition = '0.6s';
	el2.style.transition = '0.7s';
	el3.style.transition = '0.8s';
	el4.style.transition = '0.9s';
	el5.style.transition = '0.2s';
	el7.style.transition = '0.5s';
	el8.style.transition = '0.5s';
	el9.style.transition = '0.5s';		

	b.style.boxShadow = '0 150px 100px rgba(65,119,227,0.8)';
	c.style.boxShadow = '1250px 0 400px rgba(65,119,227,0.8)';

	a.style.left = '-1000px';

	el1.style.left = '10px';
	el2.style.left = '10px';
	el3.style.left = '250px';
	el4.style.left = '400px';
	el5.style.left = '-1000px';
	el9.style.top = '250px';
	el7.style.top = '615px';
	el6.style.display = 'none';
	el8.style.top = '250px';

	annualyearload141();
}
function wrongcode() {
	var a = document.getElementById('lock-error-message');
	a.style.transition = '0.5s';

	a.style.left = '440px';
}
function smallboxs1() {
	var a = document.getElementById('ll1');
	var b = document.getElementById('ll2');
	var c = document.getElementById('ll3');
	var d = document.getElementById('ll4');
	

	a.style.transition = '0.4s';
	b.style.transition = '0.4s';
	c.style.transition = '0.4s';
	d.style.transition = '0.4s';	

	a.style.left = '49px';
	a.style.top = '44px';
	a.style.borderBottom = '1px solid rgba(255,255,255,0.8)';
	a.style.borderRight = '1px solid rgba(255,255,255,0.8)';
	a.style.borderLeft = '0px solid rgba(255,255,255,0.8)';	
	a.style.borderTop = '0px solid rgba(255,255,255,0.8)';

	b.style.left = '49px';
	b.style.top = '0px';
	b.style.borderTop = '1px solid rgba(255,255,255,0.8)';
	b.style.borderRight = '1px solid rgba(255,255,255,0.8)';		
	b.style.borderLeft = '0px solid rgba(255,255,255,0.8)';	
	b.style.borderBottom = '0px solid rgba(255,255,255,0.8)';			

	c.style.left = '0px';
	c.style.top = '44px';		
	c.style.borderBottom = '1px solid rgba(255,255,255,0.8)';
	c.style.borderLeft = '1px solid rgba(255,255,255,0.8)';		
	c.style.borderRight = '0px solid rgba(255,255,255,0.8)';	
	c.style.borderTop = '0px solid rgba(255,255,255,0.8)';			

	d.style.left = '0px';
	d.style.top = '0px';
	d.style.borderLeft = '1px solid rgba(255,255,255,0.8)';
	d.style.borderTop = '1px solid rgba(255,255,255,0.8)';		
	d.style.borderRight = '0px solid rgba(255,255,255,0.8)';	
	d.style.borderBottom = '0px solid rgba(255,255,255,0.8)';			
}
function smallboxs2() {
	var a = document.getElementById('ll1');
	var b = document.getElementById('ll2');
	var c = document.getElementById('ll3');
	var d = document.getElementById('ll4');	

	a.style.transition = '0.4s';
	b.style.transition = '0.4s';
	c.style.transition = '0.4s';
	d.style.transition = '0.4s';	

	a.style.left = '0px';
	a.style.top = '0px';
	a.style.borderTop = '1px solid rgba(255,255,255,0.8)';
	a.style.borderLeft = '1px solid rgba(255,255,255,0.8)';
	a.style.borderRight = '0px solid rgba(255,255,255,0.8)';	
	a.style.borderBottom = '0px solid rgba(255,255,255,0.8)';		

	b.style.left = '0px';
	b.style.top = '44px';
	b.style.borderBottom = '1px solid rgba(255,255,255,0.8)';
	b.style.borderLeft = '1px solid rgba(255,255,255,0.8)';	
	b.style.borderRight = '0px solid rgba(255,255,255,0.8)';	
	b.style.borderTop = '0px solid rgba(255,255,255,0.8)';			

	c.style.left = '49px';
	c.style.top = '0px';		
	c.style.borderTop = '1px solid rgba(255,255,255,0.8)';
	c.style.borderRight = '1px solid rgba(255,255,255,0.8)';	
	c.style.borderLeft = '0px solid rgba(255,255,255,0.8)';	
	c.style.borderBottom = '0px solid rgba(255,255,255,0.8)';			

	d.style.left = '49px';
	d.style.top = '44px';	
	d.style.borderRight = '1px solid rgba(255,255,255,0.8)';
	d.style.borderBottom = '1px solid rgba(255,255,255,0.8)';	
	d.style.borderLeft = '0px solid rgba(255,255,255,0.8)';	
	d.style.borderTop = '0px solid rgba(255,255,255,0.8)';			
}
function smallboxs3() {
	var aa = document.getElementById('ll1a');
	var bb = document.getElementById('ll2a');
	var cc = document.getElementById('ll3a');
	var dd = document.getElementById('ll4a');

	aa.style.transition = '0.4s';
	bb.style.transition = '0.4s';
	cc.style.transition = '0.4s';
	dd.style.transition = '0.4s';	

	aa.style.left = '49px';
	aa.style.top = '44px';
	aa.style.borderBottom = '1px solid rgba(255,255,255,0.8)';
	aa.style.borderRight = '1px solid rgba(255,255,255,0.8)';
	aa.style.borderLeft = '0px solid rgba(255,255,255,0.8)';	
	aa.style.borderTop = '0px solid rgba(255,255,255,0.8)';		

	bb.style.left = '49px';
	bb.style.top = '0px';
	bb.style.borderTop = '1px solid rgba(255,255,255,0.8)';
	bb.style.borderRight = '1px solid rgba(255,255,255,0.8)';		
	bb.style.borderLeft = '0px solid rgba(255,255,255,0.8)';	
	bb.style.borderBottom = '0px solid rgba(255,255,255,0.8)';	

	cc.style.left = '0px';
	cc.style.top = '44px';		
	cc.style.borderBottom = '1px solid rgba(255,255,255,0.8)';
	cc.style.borderLeft = '1px solid rgba(255,255,255,0.8)';		
	cc.style.borderRight = '0px solid rgba(255,255,255,0.8)';	
	cc.style.borderTop = '0px solid rgba(255,255,255,0.8)';	

	dd.style.left = '0px';
	dd.style.top = '0px';
	dd.style.borderLeft = '1px solid rgba(255,255,255,0.8)';
	dd.style.borderTop = '1px solid rgba(255,255,255,0.8)';		
	dd.style.borderRight = '0px solid rgba(255,255,255,0.8)';	
	dd.style.borderBottom = '0px solid rgba(255,255,255,0.8)';	
}
function smallboxs4() {
	var aa = document.getElementById('ll1a');
	var bb = document.getElementById('ll2a');
	var cc = document.getElementById('ll3a');
	var dd = document.getElementById('ll4a');

	aa.style.transition = '0.4s';
	bb.style.transition = '0.4s';
	cc.style.transition = '0.4s';
	dd.style.transition = '0.4s';	

	aa.style.left = '0px';
	aa.style.top = '0px';
	aa.style.borderTop = '1px solid rgba(255,255,255,0.8)';
	aa.style.borderLeft = '1px solid rgba(255,255,255,0.8)';
	aa.style.borderRight = '0px solid rgba(255,255,255,0.8)';	
	aa.style.borderBottom = '0px solid rgba(255,255,255,0.8)';	

	bb.style.left = '0px';
	bb.style.top = '44px';
	bb.style.borderBottom = '1px solid rgba(255,255,255,0.8)';
	bb.style.borderLeft = '1px solid rgba(255,255,255,0.8)';	
	bb.style.borderRight = '0px solid rgba(255,255,255,0.8)';	
	bb.style.borderTop = '0px solid rgba(255,255,255,0.8)';	

	cc.style.left = '49px';
	cc.style.top = '0px';		
	cc.style.borderTop = '1px solid rgba(255,255,255,0.8)';
	cc.style.borderRight = '1px solid rgba(255,255,255,0.8)';	
	cc.style.borderLeft = '0px solid rgba(255,255,255,0.8)';	
	cc.style.borderBottom = '0px solid rgba(255,255,255,0.8)';	

	dd.style.left = '49px';
	dd.style.top = '44px';	
	dd.style.borderRight = '1px solid rgba(255,255,255,0.8)';
	dd.style.borderBottom = '1px solid rgba(255,255,255,0.8)';	
	dd.style.borderLeft = '0px solid rgba(255,255,255,0.8)';	
	dd.style.borderTop = '0px solid rgba(255,255,255,0.8)';	
}

function currentprolightdim() {
	var num = 10;
	var ran = Math.floor(Math.random()*(num));
	var ob = document.getElementById('current-pro-number-light');
	setTimeout('currentprolightdim()',100);
	if(ran == 3 || ran == 1) {
		ob.style.boxShadow = '0 100px 100px rgba(65,119,227,0.0)';
	}else {
		ob.style.boxShadow = '0 100px 100px rgba(65,119,227,0.8)';
	}	
}

//jquery mouse scroll left right or in horizondal direction

$(function() {

   $("#pro-list-bottom-box").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 100);
    
      event.preventDefault();

   });

});

//jquery

function max() {
var e = document.getElementById("body");
e.onclick = function() {
    if (e.mozRequestFullScreen) {
      // This is how to go into fullscren mode in Firefox
      e.mozRequestFullScreen();
    }
    if (e.webkitRequestFullScreen) {
      // This is how to go into fullscreen mode in Chrome and Safari
      e.webkitRequestFullScreen();
   }
   // Now we're in fullscreen mode!
}
}

function annualyearload141() {
	var an1 = document.getElementById('wel-title-text-2014-2');
	var an4 = document.getElementById('wel-title-text-2014-0');
	var an5 = document.getElementById('wel-title-text-2014-1');
	var an6 = document.getElementById('wel-title-text-2014-4');
	var an7 = document.getElementById('wel-title-text-2015-2');
	var an8 = document.getElementById('wel-title-text-2015-0');
	var an9 = document.getElementById('wel-title-text-2015-1');
	var an10 = document.getElementById('wel-title-text-2015-5');	
	an4.innerHTML = '0';
	an5.innerHTML = '0';
	an6.innerHTML = '0';
	an7.innerHTML = '0';
	an8.innerHTML = '0';
	an9.innerHTML = '0';
	an10.innerHTML = '0';
	an1.innerHTML = '0';
	var an2 = 10;
	var an3 = Math.floor(Math.random()*(an2));
	var id = setTimeout('annualyearload141()',10);
	if(an3 == 2) {
		annualyearload142();
		clearInterval(id);
		an1.innerHTML = an3;
	}else {
	an1.innerHTML = an3;
	}
}

function annualyearload142() {
	var an1 = document.getElementById('wel-title-text-2014-0');
	var an2 = 10;
	var an3 = Math.floor(Math.random()*(an2));
	var id = setTimeout('annualyearload142()',100);
	if(an3 == 0) {
		annualyearload143();
		clearInterval(id);
		an1.innerHTML = an3;
	}else {
	an1.innerHTML = an3;
	}
}

function annualyearload143() {
	var an1 = document.getElementById('wel-title-text-2014-1');
	var an2 = 10;
	var an3 = Math.floor(Math.random()*(an2));
	var id = setTimeout('annualyearload143()',100);
	if(an3 == 1) {
		annualyearload144();
		clearInterval(id);
		an1.innerHTML = an3;
	}else {
	an1.innerHTML = an3;
	}
}

function annualyearload144() {
	var an1 = document.getElementById('wel-title-text-2014-4');
	var an2 = 10;
	var an3 = Math.floor(Math.random()*(an2));
	var id = setTimeout('annualyearload144()',100);
	if(an3 == 4) {
		annualyearload();
		clearInterval(id);
		an1.innerHTML = an3;
	}else {
	an1.innerHTML = an3;
	}
}

function annualyearload() {
	var an1 = document.getElementById('wel-title-text-2015-2');
	var an2 = 10;
	var an3 = Math.floor(Math.random()*(an2));
	var id = setTimeout('annualyearload()',100);
	if(an3 == 2) {
		annualyearload2();
		clearInterval(id);
		an1.innerHTML = an3;
	}else {
	an1.innerHTML = an3;
	}
}

function annualyearload2() {
	var an1 = document.getElementById('wel-title-text-2015-0');
	var an2 = 10;
	var an3 = Math.floor(Math.random()*(an2));
	var id = setTimeout('annualyearload2()',100);
	if(an3 == 0) {
		annualyearload3();
		clearInterval(id);
		an1.innerHTML = an3;
	}else {
	an1.innerHTML = an3;
	}	
}

function annualyearload3() {
	var an1 = document.getElementById('wel-title-text-2015-1');
	var an2 = 10;
	var an3 = Math.floor(Math.random()*(an2));
	var id = setTimeout('annualyearload3()',100);
	if(an3 == 1) {
		annualyearload4();
		clearInterval(id);
		an1.innerHTML = an3;
	}else {
	an1.innerHTML = an3;
	}	
}

function annualyearload4() {
	var an1 = document.getElementById('wel-title-text-2015-5');
	var an2 = 10;
	var an3 = Math.floor(Math.random()*(an2));
	var id = setTimeout('annualyearload4()',100);
	if(an3 == 5) {
		clearInterval(id);
		an1.innerHTML = an3;
	}else {
	an1.innerHTML = an3;
	}	
}

function lightoff() {
	var li1 = document.getElementById('text-wel');
	var li2 = document.getElementById('text-pro');
	var li3 = document.getElementById('text-cre');
	var li4 = document.getElementById('welcome-title');
	var li5 = document.getElementById('programe-title');
	var li6 = document.getElementById('thanks-title');

	li1.style.opacity = '0.2';
	li2.style.opacity = '0.2';
	li3.style.opacity = '0.2';
	li4.style.opacity = '0.2';
	li5.style.opacity = '0.2';
	li6.style.opacity = '0.2';
}

function lighton() {
	var li1 = document.getElementById('text-wel');
	var li2 = document.getElementById('text-pro');
	var li3 = document.getElementById('text-cre');
	var li4 = document.getElementById('welcome-title');
	var li5 = document.getElementById('programe-title');
	var li6 = document.getElementById('thanks-title');

	li1.style.opacity = '1.0';
	li2.style.opacity = '1.0';
	li3.style.opacity = '1.0';
	li4.style.opacity = '1.0';
	li5.style.opacity = '1.0';
	li6.style.opacity = '1.0';
}

function credits() {
	var cre1 = document.getElementById('details-of-credit-box');
	var cre2 = document.getElementById('left-bottom-box1');
	var cre3 = document.getElementById('go-to-top');
	var cre4 = document.getElementById('go-to-top2');
	var cre5 = document.getElementById('display');
	var cre6 = document.getElementById('no-pro-remain');
	var cre7 = document.getElementById('current-pro-number');
	var cre8 = document.getElementById('time-indicater');
	var cre9 = document.getElementById('lock-cover');

	if(cre1.style.left != '10px') {
	cre1.style.left = '10px';
	cre2.style.left = '-10000px';
	cre3.style.top = '10000px';
	cre4.style.top = '-10000px';
	cre5.style.left = '10000px';
	cre6.style.left = '-10000px';
	cre7.style.left = '10000px';
	cre8.style.left = '10000px';
	cre9.style.display = 'block';
}else {
	cre1.style.left = '10000px';
	cre2.style.left = '10px';
	cre3.style.top = '690px';
	cre4.style.top = '690px';
	cre5.style.left = '400px';
	cre6.style.left = '165px';
	cre7.style.left = '10px';
	cre8.style.left = '40px';
	cre9.style.display = 'none';
}

}
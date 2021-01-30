function clock() {
	var el1 = document.getElementById('time');
	var t = new Date();
	var hours = t.getHours();
	var min = t.getMinutes();
	var sec = t.getSeconds();
	setTimeout('clock()',1);
	if(hours>12)
		hours = hours - 12;
	if(hours<10)
		hours = '0'+hours;
	if(min<10) 
		min = '0'+min;
	if(sec<10)
		sec = '0'+sec;
	
		el1.innerHTML = hours+':'+min+':'+sec;
}
function shutclose() {
	var el2 = document.getElementById('display');
	var el3 = document.getElementById('go-to-top');
	var el4 = document.getElementById('go-to-top2');
	var el5 = document.getElementById('left-bottom-box1');
	var el6 = document.getElementById('time');
	var el7 = document.getElementById('tata-message');
	var el8 = document.getElementById('logoff-circles');
	var el9 = document.getElementById('no-pro-remain');
	var el10 = document.getElementById('current-pro-number');
	var el11 = document.getElementById('pillo-and-zwitter');
	var el12 = document.getElementById('time-indicater');
	var el13 = document.getElementById('details-of-credit-box');
	var el14 = document.getElementById('window-button-box');

	el6.style.transition = '0.5s';
	el7.style.transition = '0.5s';
	el8.style.transition = '0.5s';
	el9.style.transition = '0.5s';
	el10.style.transition = '0.5s';
	el12.style.transition = '0.5s';

	el8.style.display = 'block';

	el2.style.left = '10000px';
	el3.style.left = '-1000px';
	el4.style.left = '10000px';
	el5.style.left = '-1000px';
	el6.style.top = '-1000px';
	el7.style.left = '500px';
	el9.style.left = '-500px';
	el10.style.left = '-500px';
	el11.style.left = '-2000px';
	el12.style.left = '-700px';
	el13.style.left = '10000px';
	el14.style.top = '10000px';
}
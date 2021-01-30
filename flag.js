var count3 = 0;
function nACountDown() {
	var ele1 = document.getElementById('national-anthem-count-down-box');
var id=setTimeout('nACountDown()',1);
count3++;
if(count3 > 200) {
	ele1.style.top = '200px';
}
if(count3 > 210) {
	clearInterval(id);
}
} 
function flaghost() {
	var ele1 = document.getElementById('flag-button-background');
	var ele2 = document.getElementById('flag-button-cir1');
	var ele3 = document.getElementById('flag-button-cir2');
	var ele4 = document.getElementById('flag-button-cir3-1');
	var ele5 = document.getElementById('flag-button-cir3-2');
	var ele6 = document.getElementById('flag-button-cir4-1');	
	var ele7 = document.getElementById('flag-button-cir4-2');
	var ele8 = document.getElementById('flag-button-cir5');	
	var ele9 = document.getElementById('flag-button-cir5-1');
	var ele10 = document.getElementById('flag-red-color');
	var ele11 = document.getElementById('flag-white-color');
	var ele12 = document.getElementById('flag-green-color');

	ele1.style.webkitTransitionTimingFunction = 'ease-out';
	ele1.style.boxShadow = '-100px 0 50px rgba(24,255,8,0.8)';

	ele2.style.webkitTransitionDelay = '0.4s';
	ele2.style.webkitTransitionTimingFunction = 'ease-out';
	ele2.style.borderTop = '5px solid rgba(24,255,8,0.8)';
	ele2.style.borderBottom = '5px solid rgba(24,255,8,0.8)';

	ele3.style.webkitTransitionDelay = '0.2s';
	ele3.style.webkitTransitionTimingFunction = 'ease-out';
	ele3.style.borderTop = '3px solid rgba(24,255,8,0.8)';
	ele3.style.boxShadow = '0 0 2px rgba(24,255,8,0.8)';
 
	ele4.style.webkitTransitionTimingFunction = 'ease-out';
	ele4.style.webkitTransitionDelay = '0.6s';
	ele4.style.opacity = '1';

 	ele5.style.webkitTransitionDelay = '0.8s';
	ele5.style.webkitTransitionTimingFunction = 'ease-in';
	ele5.style.opacity = '1';

	ele6.style.webkitTransitionTimingFunction = 'ease-out';
	ele6.style.webkitTransitionDelay = '1.0s';
	ele6.style.opacity = '1';

 	ele7.style.webkitTransitionDelay = '1.2s';
	ele7.style.webkitTransitionTimingFunction = 'ease-out';
	ele7.style.opacity = '1';

 	ele8.style.webkitTransitionDelay = '1.4s';
	ele8.style.webkitTransitionTimingFunction = 'ease-out';
	ele8.style.opacity = '1';

	ele9.style.webkitTransitionDelay = '1.6s';
	ele9.style.webkitTransitionTimingFunction = 'ease-out';
	ele9.style.opacity = '1';

	ele10.style.webkitTransitionDelay = '0.6s';
	ele10.style.webkitTransform = 'perspective(500) rotateX(0deg)';

	ele11.style.webkitTransitionDelay = '0.8s';
	ele11.style.webkitTransform = 'perspective(500) rotateX(0deg)';

	ele12.style.webkitTransitionDelay = '1.0s';
	ele12.style.webkitTransform = 'perspective(500) rotateX(0deg)';	
}
function flagAnimationPlay() {
	ele1 = document.getElementById('flag-button-cir3-1');
	ele2 = document.getElementById('flag-button-cir3-2');
	ele3 = document.getElementById('flag-button-cir4-1');
	ele4 = document.getElementById('flag-button-cir4-2');
	ele5 = document.getElementById('flag-button-cir5-1');
	ele6 = document.getElementById('flag-button');

	ele1.style.webkitAnimationPlayState = 'running';

	ele2.style.webkitAnimationPlayState = 'running';

	ele3.style.webkitAnimationPlayState = 'running';

	ele4.style.webkitAnimationPlayState = 'running';

	ele5.style.webkitAnimationPlayState = 'running';

	ele6.style.webkitAnimationPlayState = 'running';

}
var count1 = 0;
function middlebars() {
	var ask1 = document.getElementById('flag-middle-circle-bar1').getContext('2d');
	var ask2 = document.getElementById('flag-middle-circle-bar2').getContext('2d');
	var ask3 = document.getElementById('flag-middle-circle-bar3').getContext('2d');
	var ask4 = document.getElementById('flag-middle-circle-bar4').getContext('2d');
	var ask5 = document.getElementById('flag-middle-circle-bar5').getContext('2d');
	var ask6 = document.getElementById('flag-middle-circle-bar6').getContext('2d');
	var ask7 = document.getElementById('flag-middle-circle-bar7').getContext('2d');
	var ask8 = document.getElementById('flag-middle-circle-bar8').getContext('2d');
	var ask9 = document.getElementById('flag-middle-circle-bar9').getContext('2d');
	var ask10 = document.getElementById('flag-middle-circle-bar10').getContext('2d');
	var ask11 = document.getElementById('flag-middle-circle-bar11').getContext('2d');
	var ask12 = document.getElementById('flag-middle-circle-bar12').getContext('2d');
	var ask13 = document.getElementById('flag-middle-circle-bar13').getContext('2d');
	var ask14 = document.getElementById('flag-middle-circle-bar14').getContext('2d');
	var ask15 = document.getElementById('flag-middle-circle-bar15').getContext('2d');
	var ask16 = document.getElementById('flag-middle-circle-bar16').getContext('2d');
	var ask17 = document.getElementById('flag-middle-circle-bar17').getContext('2d');
	var ask18 = document.getElementById('flag-middle-circle-bar18').getContext('2d');
	var ask19 = document.getElementById('flag-middle-circle-bar19').getContext('2d');
	var ask20 = document.getElementById('flag-middle-circle-bar20').getContext('2d');
	var ask21 = document.getElementById('flag-middle-circle-bar21').getContext('2d');
	var ask22 = document.getElementById('flag-middle-circle-bar22').getContext('2d');
	var ask23 = document.getElementById('flag-middle-circle-bar23').getContext('2d');
	var ask24 = document.getElementById('flag-middle-circle-bar24').getContext('2d');

	var id=setTimeout('middlebars()',1);
	count1++;

	if(count1 > 80) {
	ask1.fillStyle = '#009bed';
	ask1.lineTo(0,20);
	ask1.lineTo(3,0);
	ask1.lineTo(6,20);
	ask1.lineTo(3,40);
	ask1.fill();
}
	if(count1 > 85) {
	ask2.fillStyle = '#009bed';
	ask2.lineTo(0,20);
	ask2.lineTo(3,0);
	ask2.lineTo(6,20);
	ask2.lineTo(3,40);
	ask2.fill();
}

	if(count1 > 90) {
	ask3.fillStyle = '#009bed';
	ask3.lineTo(0,20);
	ask3.lineTo(3,0);
	ask3.lineTo(6,20);
	ask3.lineTo(3,40);
	ask3.fill();
}
	
	if(count1 > 95) {
	ask4.fillStyle = '#009bed';
	ask4.lineTo(0,20);
	ask4.lineTo(3,0);
	ask4.lineTo(6,20);
	ask4.lineTo(3,40);
	ask4.fill();
}			

	if(count1 > 100) {
	ask5.fillStyle = '#009bed';
	ask5.lineTo(0,20);
	ask5.lineTo(3,0);
	ask5.lineTo(6,20);
	ask5.lineTo(3,40);
	ask5.fill();
}


	if(count1 > 105) {	
	ask6.fillStyle = '#009bed';
	ask6.lineTo(0,20);
	ask6.lineTo(3,0);
	ask6.lineTo(6,20);
	ask6.lineTo(3,40);
	ask6.fill();
}

	if(count1 > 110) {
	ask7.fillStyle = '#009bed';
	ask7.lineTo(0,20);
	ask7.lineTo(3,0);
	ask7.lineTo(6,20);
	ask7.lineTo(3,40);
	ask7.fill();
}

	if(count1 > 115) {
	ask8.fillStyle = '#009bed';
	ask8.lineTo(0,20);
	ask8.lineTo(3,0);
	ask8.lineTo(6,20);
	ask8.lineTo(3,40);
	ask8.fill();
}

	if(count1 > 120) {
	ask9.fillStyle = '#009bed';
	ask9.lineTo(0,20);
	ask9.lineTo(3,0);
	ask9.lineTo(6,20);
	ask9.lineTo(3,40);
	ask9.fill();
}

	if(count1 > 125) {
	ask10.fillStyle = '#009bed';
	ask10.lineTo(0,20);
	ask10.lineTo(3,0);
	ask10.lineTo(6,20);
	ask10.lineTo(3,40);
	ask10.fill();
}

	if(count1 > 130) {
	ask11.fillStyle = '#009bed';
	ask11.lineTo(0,20);
	ask11.lineTo(3,0);
	ask11.lineTo(6,20);
	ask11.lineTo(3,40);
	ask11.fill();
}

	if(count1 > 135) {
	ask12.fillStyle = '#009bed';
	ask12.lineTo(0,20);
	ask12.lineTo(3,0);
	ask12.lineTo(6,20);
	ask12.lineTo(3,40);
	ask12.fill();
}

	if(count1 > 140) {
	ask13.fillStyle = '#009bed';
	ask13.lineTo(0,20);
	ask13.lineTo(3,0);
	ask13.lineTo(6,20);
	ask13.lineTo(3,40);
	ask13.fill();
}

	if(count1 > 145) {
	ask14.fillStyle = '#009bed';
	ask14.lineTo(0,20);
	ask14.lineTo(3,0);
	ask14.lineTo(6,20);
	ask14.lineTo(3,40);
	ask14.fill();
}

	if(count1 > 150) {
	ask15.fillStyle = '#009bed';
	ask15.lineTo(0,20);
	ask15.lineTo(3,0);
	ask15.lineTo(6,20);
	ask15.lineTo(3,40);
	ask15.fill();
}

	if(count1 > 155) {
	ask16.fillStyle = '#009bed';
	ask16.lineTo(0,20);
	ask16.lineTo(3,0);
	ask16.lineTo(6,20);
	ask16.lineTo(3,40);
	ask16.fill();
}

	if(count1 > 160) {
	ask17.fillStyle = '#009bed';
	ask17.lineTo(0,20);
	ask17.lineTo(3,0);
	ask17.lineTo(6,20);
	ask17.lineTo(3,40);
	ask17.fill();
}

if(count1 > 165) {
	ask18.fillStyle = '#009bed';
	ask18.lineTo(0,20);
	ask18.lineTo(3,0);
	ask18.lineTo(6,20);
	ask18.lineTo(3,40);
	ask18.fill();
}

	if(count1 > 170) {
	ask19.fillStyle = '#009bed';
	ask19.lineTo(0,20);
	ask19.lineTo(3,0);
	ask19.lineTo(6,20);
	ask19.lineTo(3,40);
	ask19.fill();
}

	if(count1 > 175) {
	ask20.fillStyle = '#009bed';
	ask20.lineTo(0,20);
	ask20.lineTo(3,0);
	ask20.lineTo(6,20);
	ask20.lineTo(3,40);
	ask20.fill();
}

	if(count1 > 180) {
	ask21.fillStyle = '#009bed';
	ask21.lineTo(0,20);
	ask21.lineTo(3,0);
	ask21.lineTo(6,20);
	ask21.lineTo(3,40);
	ask21.fill();
}

	if(count1 > 185) {
	ask22.fillStyle = '#009bed';
	ask22.lineTo(0,20);
	ask22.lineTo(3,0);
	ask22.lineTo(6,20);
	ask22.lineTo(3,40);
	ask22.fill();
}

	if(count1 > 190) {
	ask23.fillStyle = '#009bed';
	ask23.lineTo(0,20);
	ask23.lineTo(3,0);
	ask23.lineTo(6,20);
	ask23.lineTo(3,40);
	ask23.fill();
}

	if(count1 > 195) {
	ask24.fillStyle = '#009bed';
	ask24.lineTo(0,20);
	ask24.lineTo(3,0);
	ask24.lineTo(6,20);
	ask24.lineTo(3,40);
	ask24.fill();
}

	if(count1 > 200) {
		clearInterval(id);
	}
}

  var i = 0;
  function lod() {
      var canvas = document.getElementById('flag-middle-circle');
      var context = canvas.getContext('2d');
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      var radius = 41;
      var startAngle = 1.5 * Math.PI;
      var endAngle = i;
      var counterClockwise = false;
      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      context.lineWidth = 2;
      // line color
      context.strokeStyle = '#009bed';
      context.stroke();
      var id=setTimeout('lod()',100);
      i=i+0.1;
      if(i >= 5){	
      middlebars();
      nACountDown();
      clearInterval(id);
      i=0;
  }
  }
  var j=0;
  function flagmidcir() {
var id=setTimeout('flagmidcir();',1);
 j++;
 if(j == 500) {
 	lod();
 	clearInterval(id);
 }
}
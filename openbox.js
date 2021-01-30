function openbox() {
	var op = document.getElementById('waiting-box');
	var op1 = document.getElementById('waiting-box1-1');
	var op2 = document.getElementById('waiting-box2-2');
	var op3 = document.getElementById('waiting-box3-3');
	var op4 = document.getElementById('waiting-box4-4');
	var op5 = document.getElementById('waiting-box5-5');

	op.style.left = '1000px';

	op1.style.webkitTransform = 'translateZ(200px)';
	op2.style.webkitTransform = 'translateZ(-200px)';
	op3.style.webkitTransform = 'rotateY(90deg) translateZ(200px)';
	op4.style.webkitTransform = 'rotateY(270deg) translateZ(200px)'; 
	op5.style.webkitTransform = 'rotateX(270deg) translateZ(-200px)'; 

	op1.style.opacity = '0.1';

}

function closebox() {
	var op = document.getElementById('waiting-box');
	var op1 = document.getElementById('waiting-box1-1');
	var op2 = document.getElementById('waiting-box2-2');
	var op3 = document.getElementById('waiting-box3-3');
	var op4 = document.getElementById('waiting-box4-4');
	var op5 = document.getElementById('waiting-box5-5');

	op1.style.webkitTransform = 'translateZ(100px)';
	op2.style.webkitTransform = 'translateZ(-100px)';
	op3.style.webkitTransform = 'rotateY(90deg) translateZ(100px)';
	op4.style.webkitTransform = 'rotateY(270deg) translateZ(100px)'; 
	op5.style.webkitTransform = 'rotateX(90deg) translateZ(-100px)'; 

	op1.style.opacity = '1';	

	op.style.left = '10000px';
}
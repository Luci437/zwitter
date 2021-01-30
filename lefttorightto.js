var qw = 0;
var wq = 850;
var qa = 1700;
function welcomenextslide1() {
	var el1 = document.getElementById('cheif-box');
	var el2 = document.getElementById('pri-and-vice-box');
	var el3 = document.getElementById('Manager-and-others-box');

	el1.style.transition = '0.5s';
	el2.style.transition = '0.5s';
	el3.style.transition = '0.5s';

	if(qa != 0) {

	qw = qw - 850;
	wq = wq - 850;
	qa = qa - 850;		

	el1.style.left = qw + 'px';
	el2.style.left = qa + 'px';
	el3.style.left = wq + 'px';
	}

}
function welcomenextslide2() {
	var el1 = document.getElementById('cheif-box');
	var el2 = document.getElementById('pri-and-vice-box');
	var el3 = document.getElementById('Manager-and-others-box');

	el1.style.transition = '0.5s';
	el2.style.transition = '0.5s';
	el3.style.transition = '0.5s';

	if(qa != 1700) {

	qw = qw + 850;
	wq = wq + 850;
	qa = qa + 850;

	el1.style.left = qw + 'px';
	el2.style.left = qa + 'px';
	el3.style.left = wq + 'px';
	}		
}
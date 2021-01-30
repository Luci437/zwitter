function drawing() {
	var el1 = document.getElementById('left-to').getContext('2d');

	el1.fillStyle = 'rgba(255,255,255,0.8)';
	el1.lineTo(0,20);
	el1.lineTo(20,0);
	el1.lineTo(40,0);
	el1.lineTo(25,20);
	el1.lineTo(40,40);
	el1.lineTo(20,40);
	el1.lineTo(0,20);
	el1.fill();

	var el2 = document.getElementById('left-to-right').getContext('2d');

	el2.fillStyle = 'rgba(255,255,255,0.8)';
	el2.lineTo(20,0);
	el2.lineTo(40,20);
	el2.lineTo(20,40);
	el2.lineTo(0,40);
	el2.lineTo(20,20);
	el2.lineTo(0,0);
	el2.lineTo(0,0);
	el2.fill();	

var disapper = document.getElementById('loading-circles');
disapper.style.display = 'none';
var disapper2 = document.getElementById('leaser-printer');
disapper2.style.display = 'none';
var disapper3 = document.getElementById('letter-world');
disapper3.style.display = 'none';
}
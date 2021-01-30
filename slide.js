var el1 = 0;
var el2 = 400;
var el3 = 800;
function slidenext() {
var a = document.getElementById('welcome-box');
var b = document.getElementById('prolist-box');
var c = document.getElementById('cre-box');
var e = document.getElementById('text-wel');
e.style.color = 'rgba(255,255,255,1.0)';
if(el3 != 0) {
el1 = el1 - 400;
el2 = el2 - 400;
el3 = el3 - 400;
a.style.left = el1 + 'px';
b.style.left = el2 + 'px';
c.style.left = el3 + 'px';
	}
}//ending of function slide next.......


var h = 0;
function slideback() {
var a = document.getElementById('welcome-box');
var b = document.getElementById('prolist-box');
var c = document.getElementById('cre-box');
var e = document.getElementById('text-wel');
h++;
if(h < 2) {
e.style.color = 'rgba(255,255,255,0.5)';
}
if(el3 != 800) {
el1 = el1 + 400;
el2 = el2 + 400;
el3 = el3 + 400;
a.style.left = el1 + 'px';
b.style.left = el2 + 'px';
c.style.left = el3 + 'px';
	}
}//ending of function slide back.......



//selection limit indicating codes
var leftvalue = 1;
var rightvalue = 1;
function goclick(z) {
	var el9 = document.getElementById('go-to-top');
	var el10 = document.getElementById('go-to-top2');
   
   if(z == 2) {
   	  leftvalue--;
   	  if(leftvalue >= 0) {
   	  	el9.style.background = 'rgba(255,255,255,0.1)';
   	  	el9.style.boxShadow = '0 0 10px rgba(0,0,0,0.8) inset, 0 0 20px rgba(13,43,74,0.00)';
   	  	el10.style.background = 'rgba(255,255,255,0.1)';
   	  	el10.style.boxShadow = '0 0 10px rgba(0,0,0,0.8) inset, 0 0 20px rgba(13,43,74,0.00)';
   	  }else {
   	  	el9.style.background = 'rgba(13,43,74,1.00)';
   	  	el9.style.boxShadow = '0 0 10px rgba(0,0,0,0.8) inset, 0 0 20px rgba(13,43,74,1.00)';
   	  	rightvalue = 1;
   	  }
   }

   if(z == 3) {
   	rightvalue--;
   	if(rightvalue >= 0) {
   	  	el9.style.background = 'rgba(255,255,255,0.1)';
   	  	el9.style.boxShadow = '0 0 10px rgba(0,0,0,0.8) inset, 0 0 20px rgba(13,43,74,0.00)';
   	  	el10.style.background = 'rgba(255,255,255,0.1)';   		
   	  	el10.style.boxShadow = '0 0 10px rgba(0,0,0,0.8) inset, 0 0 20px rgba(13,43,74,0.00)';
   	}else {
   		el10.style.background = 'rgba(13,43,74,1.00)';
   		el10.style.boxShadow = '0 0 10px rgba(0,0,0,0.8) inset, 0 0 20px rgba(13,43,74,1.00)';
   		leftvalue = 1;
   	}
   }
		

}
//selection limit indicating codes

//jumb right and left welcome box left right controller
var goleft = 1;
var goright = 1;
function jumbleftright(a) {
   var el11 = document.getElementById('cheif-left-to');
   var el12 = document.getElementById('cheif-right-to');
 if(a == 1) {
   goleft--;
      if(goleft >= 0) {
         el11.style.display = 'block';
         el12.style.display = 'block';
      }else {
         el11.style.display = 'none';
         goright = 1;
      }
 }
 if(a == 2) {
   goright--;
      if(goright >=0) {
         el11.style.display = 'block';
         el12.style.display = 'block';
      }else {
         el12.style.display = 'none';
         goleft = 1;
      }
 }
}
//ending of jumb left right function here

function movewindow() {
   var mo1 = document.getElementById('welcome-list-box');
   var mo2 = document.getElementById('progra-list-box');
   var mo3 = document.getElementById('thank-list-box');
   var mo4 = document.getElementById('wel-title');

   mo1.style.top = '1000px';
   mo2.style.left = '1000px';
   mo3.style.left = '-1000px';
   mo4.style.left = '0px';
}
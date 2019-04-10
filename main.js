console.log('.....JS READY');

function showRight() {
	cube.style.transform = 'rotate3d(0, 180, 0, -90deg) translateY(90px) translateX(100px)';
	hidden();
	right.className = 'side';
}

function showLeft() {
	cube.style.transform = 'rotate3d(0, 180, 0, 90deg)';
	hidden();
	left.className = 'side';
}

function showBottom() {
	cube.style.transform = 'rotate3d(90, 0, 0, 90deg) translateY(50px)';
	hidden();
	bottom.className = 'side';
}

function showBack() {
	cube.style.transform = 'rotate3d(0, 180, 0, 180deg) translateY(-150px) translateZ(-50px)';
	hidden();
	back.className = 'side';
}

function showTop() {
	cube.style.transform = 'rotate3d(-90, 0, 0, 90deg) translateY(-150px)';
	hidden();
	topside.className = 'side';

}

function showFront() {
	cube.style.transform = 'rotate3d(0, 0, 0, 0deg)';
	hidden();
	front.className = 'side';
}

function hidden(){
	right.className = 'side hidden';
	left.className = 'side hidden';
	bottom.className = 'side hidden';
	back.className = 'side hidden';
	topside.className = 'side hidden';
	front.className = 'side hidden';
}
	
btnRight.onclick = () => showRight();
btnLeft.onclick = () => showLeft();
btnBack.onclick = () => showBack();
btnBott.onclick = () => showBottom();
btnTop.onclick = () => showTop();
btnFront.onclick = () => showFront();

var show = [showRight, showLeft, showBottom, showBack, showTop, showFront];

let pause = time => new Promise( resolve => setTimeout( () => resolve(), time ));
let func = async () => {
	for (var i = 0; i < show.length - 1; i++){
		await pause( 2500 );
		show[ i ]();
	}
}
func();

// let i = 0;
// rescurs = i => setTimeout( () => {
// 	show[ i ]();
// 	rescurs( ++i );
// }, 2500 );
// rescurs( i );

// var timer = setTimeout(function showSlide(){
// 	timer = setTimeout(showSlide, 500);
// }, 500);



/*	showRight();
	showLeft();
	showBottom();
	showBack();
	showTop();
	showFront();
	
*/
/*button.onclick = function(){
	var button = document.getElementById('button');
	var rndX = randomX();
	var rndY = randomY();
	var rndZ = randomZ();
	var rndDeg = randomDeg();
	
	rotation(rndX,rndY,rndZ,rndDeg);
}

function randomX(){
	var rndX = 0 + Math.random() * (360 + 1 - 0);
		rndX = Math.floor(rndX);
		return rndX;
}

function randomY(){
	var rndY = 0 + Math.random() * (360 + 1 - 0);
		rndY = Math.floor(rndY);
		return rndY;
}

function randomZ(){
	var rndZ = 0 + Math.random() * (360 + 1 - 0);
		rndZ = Math.floor(rndZ);
		return rndZ;
}

function randomDeg(){
	var rndDeg = 0 + Math.random() * (360 + 1 - 0);
		rndDeg = Math.floor(rndDeg);
		return rndDeg;
}

function rotation(x, y, z, deg) {
	var cube = document.getElementById("cube");
	cube.style.transform = `rotate3d(${x},${y},${z},${deg}deg)`;
}
*/
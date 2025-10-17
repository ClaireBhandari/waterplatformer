

function myFunction() {

   let head = document.getElementsByClassName ("container")[0];
  // document.body.removeChild (head);
  head.style.display = "none";

	let container2 = document.createElement("div");
	let warmseabg = document.createElement("img");
	let sandbgback = document.createElement("img");
	let sandbgfore = document.createElement("img");
	let fishhitbox = document.createElement("div");
	let fishrest1 = document.createElement("img");
	let heartbox = document.createElement ("div");
	let score = document.createElement ("div");
	let points = document.createElement("p");
	let health = document.createElement ("img");
	let heart = document.createElement ("img");
	let heart2 = document.createElement ("img");
	let heart3 = document.createElement ("img");

	let bgcontainer = document.createElement ("div");
	//for background bits like rocks etc.



	warmseabg.className = "warmseabg";
	warmseabg.setAttribute ("src", "images/warmseabg.png");
    sandbgfore.className ="sandbgfore";
	sandbgback.className ="sandbgback";
	bgcontainer.className = "bgcontainer";
	sandbgfore.setAttribute ("src", "images/sandbgfore.png");
	sandbgback.setAttribute ("src", "images/sandbgback.png");
	fishhitbox.className = "fishhitbox";
	fishrest1.className = "playersprite";
	fishrest1.setAttribute ("src", "images/fishrest1.png");
	heartbox.className = "heartbox";
	score.className ="score";
	points.className ="points";
	health.setAttribute ("src", "images/health.png");
	heart.setAttribute("src", "images/heart.png");
	heart2.setAttribute("src", "images/heart.png");
	heart3.setAttribute("src", "images/heart.png");
	
	let brownrock = document.createElement ("img");
	brownrock.className = "brownrock";
	brownrock.setAttribute ("src", "images/brownrock.png");
	//container2.appendChild (brownrock);
	bgcontainer.appendChild(brownrock);
	let sponge = document.createElement ("img");
	sponge.className = "sponge";
	sponge.setAttribute ("src", "images/sponge.png");
	let redalgae = document.createElement ("img");
	redalgae.className = "redalgae";
	redalgae.setAttribute ("src", "images/redalgae.png");
	let greenalgae = document.createElement ("img");
	greenalgae.className = "greenalgae";
	greenalgae.setAttribute ("src", "images/greenalgae.png");
	//container2.appendChild (sponge);
	bgcontainer.appendChild (sponge);
	bgcontainer.appendChild (redalgae);
	bgcontainer.appendChild (greenalgae);
	container2.appendChild (bgcontainer);
	container2.appendChild(score);
	container2.appendChild(heartbox);
	document.body.appendChild (container2);
	container2.appendChild (fishhitbox); 
	//container2.appendChild(enemyhitbox);
	container2.appendChild(warmseabg);
	container2.appendChild(sandbgback);
	container2.appendChild(sandbgfore);
	//sandbgfore.appendChild(sponge);
	fishhitbox.appendChild(fishrest1);
	heartbox.appendChild (health);
	heartbox.appendChild(heart);
	heartbox.appendChild(heart2);
	heartbox.appendChild(heart3);
	score.appendChild(points);
	points.innerText= "0";
	//enemyhitbox.appendChild(sharkswim1);

	//fishhitbox.style.top = "450px";

	//make a class for BG objects. include position, can eat, src, can crash into.

	class Bgsprite {
		constructor (posTop, posLeft, canEat, canCrash, sprite) 
		{
			this.posTop = posTop;
			this.posLeft = posLeft;
			this.canEat = canEat;
			this.canCrash = canCrash;
			this.sprite = sprite;

		}
		make () {

			let bgsprite = document.createElement ("img");
			bgsprite.setAttribute ("src", this.sprite);
			bgcontainer.appendChild (bgsprite);
			bgsprite.style.left = this.posLeft;
			bgsprite.style.top = this.posTop;

		}
	}




const coral1 = new Bgsprite ("300px", "500px", false, false, "images/stagcoral.png");
coral1.make ();



			class Enemy {
		constructor (sprite, posTop, posLeft, moveSpeed, classname, points) {
		this.sprite = sprite;
		this.posTop = posTop;
		this.posLeft = posLeft;
		this.moveSpeed = moveSpeed;
	    this.classname = classname;
		this.points = points;
		}

		create () {
		//let container2 = document.getElementsByClassName ("container2")[0];
		let enemyhitbox1  = document.createElement ("div");
		let enemysprite = document.createElement ("img");
		
		
		enemysprite.setAttribute ("src", this.sprite);
			enemyhitbox1.className = this.classname;
		enemyhitbox1.style.top = this.posTop;
		enemyhitbox1.style.left = this.posLeft;
	
		enemyhitbox1.style.width = "400px";
		enemysprite.style.width = "340px";
		enemyhitbox1.style.position = "absolute";
		//enemyhitbox1.style.backgroundColor = "yellow";
		container2.appendChild (enemyhitbox1);
		enemyhitbox1.appendChild(enemysprite);
		}

		moveleft () {
			
			let enemyhitbox1 = document.getElementsByClassName(this.classname)[0]
			this.offsetLeft = enemyhitbox1.offsetLeft;
			var e  = this.offsetLeft;
			e = e - this.moveSpeed;

		enemyhitbox1.style.left = e + 'px';
		}
//add these in keydown section 
			moveright () {
			
			let enemyhitbox1 = document.getElementsByClassName(this.classname)[0]
			this.offsetLeft = enemyhitbox1.offsetLeft;
			var e  = this.offsetLeft;
			e = e + this.moveSpeed;
				//alert(this.offsetLeft - this.moveSpeed);
		enemyhitbox1.style.left = e + 'px';
		}

		hit () {

 const rect = fishhitbox.getBoundingClientRect();

			let enemyhitbox1 = document.getElementsByClassName (this.classname)[0]
		  const enemyrect = enemyhitbox1.getBoundingClientRect(); 

	  let arry = [heart3, heart2, heart];
			
	  if  (rect.right >= enemyrect.left && rect.left <= enemyrect.right &&
		rect.top <= enemyrect.bottom && rect.bottom >= enemyrect.top)
	
      if (m < 2)
		{heartbox.removeChild(arry[m]); m++}
		
		else {alert ("game over");  document.body.removeChild (container2);
			head.style.display = "unset"; }


		}

		behit () {


		 const rect = fishhitbox.getBoundingClientRect();
		 let score = document.getElementsByClassName ("points")[0];
		 //convert to number
		 let scores = parseInt(score.innerText)
	
		

			let enemyhitbox1 = document.getElementsByClassName (this.classname)[0]
		  const enemyrect = enemyhitbox1.getBoundingClientRect(); 
	 if  (rect.right >= enemyrect.left - 50 && rect.left <= enemyrect.right + 50 &&
		rect.top <= enemyrect.bottom && rect.bottom >= enemyrect.top  )

		//{container2.removeChild(enemyhitbox1)[0]}
		{enemyhitbox1.style.display = "none";
				 scores = scores + this.points; 
				 score.innerText = scores;
		 }
	else {}
	

		}


		}

const enem1 = new Enemy ("images/bluestar.png", "100px", "500px", 5, "enemyhitbox1", 5);
const enem2 = new Enemy ("images/sharkswim1.png", "300px", "1000px", 10, "enemyhitbox2", 20);
enem1.create ();
enem2.create();


let fish1 = true;
let intervalId; //for idle animation
//const intervalID = setInterval(() => {
	function idle () {
	if (fish1 == true) {fishrest1.setAttribute("src", "images/fishrest2.png"); fish1 = false;}
	else {fishrest1.src = "images/fishrest1.png"; fish1 = true;}
	}
//}, 1000);
//setInterval (idle, 1000);



function changeanim() {
  intervalId ??= setInterval(idle, 1000);
}

changeanim ()

var i = 0; 
let m = 0;
let a = 0;

 //for getting positions of objects
		
	document.onkeydown = function (event) {

		enem1.hit();
		enem2.hit();
	


	//clearInterval(intervalID); //stops idle animation 
	//clearInterval (idle);

clearInterval(intervalId);
  // stops idle anim
  intervalId = null;



	var arr = ["images/fishswim1.png", "images/fishswim1.png", "images/fishswim2.png", "images/fishswim2.png",
		 "images/fishswim3.png",  "images/fishswim3.png", "images/fishswim4.png", "images/fishswim4.png"];

		 var attacks = ["images/fishattack1.png", "images/fishattack1.png",  "images/fishattack2.png","images/fishattack2.png",
			"images/fishattack3.png", "images/fishattack3.png", "images/fishattack4.png", "images/fishattack4.png", "images/fishattack5.png", "images/fishattack5.png"];
	

	//fishrest1.src = "images/fishswim1.png";
	
	fishrest1.src = arr [i];
	if (i < 7) {i = i + 1} 
	else {i = 0};
	
		var key = event.code;
		var t = fishhitbox.offsetTop;
		var l = fishhitbox.offsetLeft;
		var sl = sandbgfore.offsetLeft;
		var sb = sandbgback.offsetLeft;
		//var bl = brownrock.offsetLeft;
		var bl = bgcontainer.offsetLeft;
		/*actually put rocks n stuff in a big div n do the offset for that */
		var op = fishhitbox.style.top;

		if (sl < -1480) {
			sl = -1000 ;
		}

			if (sb < -1480) {
			
			sb = -1000 ;
		}

		if (sl > 0) {
			sl = -1000;
		}


		event.preventDefault();


		var framevar = 20;
		var bgvar = 10;
		//var b;	
		//up key 38  "ArrowUp","ArrowDown","ArrowLeft","ArrowRight"//
		if (key=="ArrowUp" && t > -30) {
	enem2.moveleft();
			t = t - framevar;
		     fishhitbox.style.top = t + 'px';}
			 else if (key=="ArrowDown" && t < 800) {
		enem1.moveright();
			t = t + framevar;
			fishhitbox.style.top = t + 'px';}
			//left 37
		else if (key=="ArrowLeft" && l > 5) {
			l = l - framevar;
			sl = sl + framevar;
			sb = sb + bgvar;
				bl = bl + framevar;
		fishrest1.className = ("playerspriteleft");
		fishhitbox.style.left = l + 'px';
		sandbgfore.style.left = sl + 'px';
	   sandbgback.style.left = sb + 'px';
	//brownrock.style.left = bl + 'px';
	bgcontainer.style.left = bl + 'px';

}
			//right 39
		else if (key=="ArrowRight" ) {
			if (l < 1600) {l = l + framevar;
		fishhitbox.style.left = l + 'px';} else {l = l + 0;}
		fishrest1.className = ("playersprite");
				sl = sl - framevar;
				sb = sb - bgvar;
				bl = bl - framevar;
			sandbgfore.style.left = sl + 'px';
			sandbgback.style.left = sb + 'px';
			//brownrock.style.left = bl + 'px';
			bgcontainer.style.left = bl + 'px';
			enem2.moveleft();
		 }
		 else if (key =="KeyB") {
			fishrest1.src = attacks [a];
			if (a < 9) {a = a + 1} 
			else {a = 0};

		enem1.behit();
		enem2.behit();

			
		 }

			 else {}

	}

  document.onkeyup = function () {
	// back go idle animation when keys released
	 intervalId ??= setInterval(idle, 1000);

  }


    
}


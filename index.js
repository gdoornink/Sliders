var balls = document.getElementsByClassName("ball");
for (var i=0; i < balls.length; i++) {
	balls[i].setAttribute('onclick','ballClick()');
}

function ballClick() {
	var ball = event.target;
	if(!ball.ballcolor) {
		ball.ballcolor = "green";
	}
	if(ball.open = "yes") {
		switch (ball.ballcolor) {
			case "green":
				ball.style.backgroundColor = "rgba(0,0,0,0.9)";
				ball.style.borderColor = "rgba(0,0,0,0.2)";
				ball.innerHTML = "";
				ball.style.margin = "0px 0px 0px auto";
				ball.ballcolor = "black";
				if(window.innerHeight > window.innerWidth) {
					ball.style.margin = "auto 0px 0px 0px";
				} else {
					ball.style.margin = "0px 0px 0px auto";
				}
				break;
			case "black":
				ball.style.backgroundColor = "rgba(10,50,0,0.9)";
				ball.style.borderColor = "rgba(10,50,0,0.2)";
				ball.innerHTML = "";
				ball.ballcolor = "green";
				if(window.innerHeight > window.innerWidth) {
					ball.style.margin = "0px 0px auto 0px";
				} else {
					ball.style.margin = "0px auto 0px 0px";
				}
				break;
		}
	}
}

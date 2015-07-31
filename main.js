var stage,draging=false;
var cStep = -1;
var canvasPic = new Image();
var cPushArray = Array();
var canvastmp;
function Stage(ctx){
	this.ctx = ctx;
	this.position = [];
}
Stage.prototype.cleanPosition = function(){
	this.position = [];
};


function drawStart(){
	draging = true;
}

function drawline(x,y){
	position = this.position;
	position.push({"x":x,"y":y});

	canvasPic.src = canvastmp;
	canvasPic.onload = function(){ctx.drawImage(canvasPic,0,0);console.log("eeeeeeeeeeeeeeeee")};
	ctx.clearRect(0,0,800,800);
	ctx.beginPath();
	ctx.moveTo(position[0].x,position[0].y);
	var i=position.length;
	ctx.lineTo(position[i-1].x,position[i-1].y);
	ctx.strokeStyle="#000000";
	ctx.stroke();
}

Stage.prototype.draw=drawline;
function drawEnd(){
	draging = false;
	s.cleanPosition();
}

$(document).ready(function(){
stage = $("#stage");
ctx = document.getElementById("stage").getContext("2d");
s = new Stage(ctx);
stage.on("mousedown",function(oEvent){
	canvastmp = document.getElementById('stage').toDataURL();
	drawStart();
});


stage.on("mousemove",function(oEvent){
	if(draging){
		console.log("hello");
		var x0=oEvent.clientX;
		console.log(x0);
		var x = x0-($(this).offset().left);
		x+=window.pageXOffset;

		var y0=oEvent.clientY;
		var y = y0-($(this).offset().top);
		y+=window.pageYOffset;

	s.draw(x,y);
	}
	console.log(x+";"+y);
	});

stage.on("mouseup",function(oEvent){
	drawEnd();
	});
});

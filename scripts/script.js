function setup() 
{
	createCanvas(width, height);
//init plus button yo
	newinput = createButton("+");
	newinput.mousePressed(addLine);
	newinput.position(0,0);


	//angleMode(DEGREES);
}



function draw() 
{
	background(0);
	if (clickPoint != null)
	{
		stroke(255);
		text("(" + round(v2ts(new v2(clickPoint.x, 0)).x, 2).toString() + ", " + round(v2ts(new v2(0, clickPoint.y)).y, 2).toString() + ")", clickPoint.x+10, clickPoint.y-20);
		strokeWeight(10);
		point(clickPoint.x, clickPoint.y);
	}

//set (0,0) position at center of screen
	translate(width/2, height/2);


	showGridInfo();

//move to scroll position
	translate(cam.x, cam.y);

//flip screen so that positive values are up and left
	rotate(PI);

//zoom into the zoom value
	scale(zoom);

//draw the grid at the zoom level
	drawgrid();

//change the strokeweight of lines so that it does get bigger as you zoom
	strokeWeight((1/zoom)/5);

//zoom to the tile width for proper drawing things idk it works
	scale(tw);
	fill(255);
	color(255, 255, 0);
	stroke(255, 255, 0);

//draw all lines
	for (var i = 0; i < lines.length; i++)
		lines[i].show();


	noLoop();
}


//increase zoom on scroll
function mouseWheel(e)
{
//zoom scale
	var d = -1*((zoom/e.delta)/9);

//only zoom if it will not go under zero
	if ((zoom + d) > 0)
		zoom += d;
	redraw();
}



//if mouse down then scroll by change in mouse velocity
function mouseDragged()
{
	cam.x += movedX;
	cam.y += movedY;
	clickPoint = new v2(mouseX, mouseY);
	redraw();
}



//on click add point onto screen
function mousePressed()
{
	clickPoint = new v2(mouseX, mouseY);
	redraw();
}

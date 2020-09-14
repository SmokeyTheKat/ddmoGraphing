//dont remember what this does or is used for but may be needed later ??
function v2ts(v)
{
	var o = new v2(  ((v.x - width /2)-cam.x)/tw/zoom,
		      -1*((v.y - height/2)-cam.y)/tw/zoom   );
	return o;
}



//return float for edited camera position from screen points
//used for text
//(-3, "x") can return 0
function its(v, s)
{
	var o;
	if (s == "x")
	{ o = -1*((v - width/2)-cam.x); };
	if (s == "y")
	{ o = -1*((v - height/2)-cam.y); };
	return o;
}


//it just draws thae grid   this needs to be changes yo
function drawgrid()
{
	stroke(130);
	strokeWeight(0.6);
	for (var i = -1*round((gheight/tilewidth)); i < round((gheight/tilewidth)); i++)
	{
		line(i*tw,-1*(gheight/2), i*tw, gheight/2);
	}
	for (var i = -1*round((gwidth/tw)-46); i < round((gwidth/tw)-45); i++)
	{
		line(-1*(gwidth/2),i*tw,  gwidth/2,i*tw);
	}


	stroke(255);
	strokeWeight(2);
	line(0,-1*(height/2), 0, height/2);
	line(-1*(width/2),0,  width/2,0);
}


//function function for user inputed lines
function xx(x, v)
{
	var y = 1;
	v = evalReady(v);
	if (v.includes("x="))
	{
		return eval(v.replace("^", "**").replace("@", "^").replace("X", "x"));
	}
	else if (v.includes("y"))
	{
		console.log("y=" + (v.replace("^", "**").replace("@", "^").replace("X", "x")).split("=")[1]);
		console.log("y=" + evalInverse((v.replace("^", "**").replace("@", "^").replace("X", "x")).split("=")[0]));

		eval("y=" + (v.replace("^", "**").replace("@", "^").replace("X", "x")).split("=")[1]);
		eval("y=" + evalInverse((v.replace("^", "**").replace("@", "^").replace("X", "x")).split("=")[0]));
		return y;
	}
	else
		return eval(v.replace("^", "**").replace("@", "^").replace("X", "x"));
}


//test function for a taylor expansion for sin(x)
function gg(x, zzz)
{
	var o = 0;
	var s = true;
	for (var i = 1; i < zzz*2; i += 2)
	{
		if (!s)
		{
			o -= ((x**i)/fact(i));
		}
		else
		{
			o += ((x**i)/fact(i));
		}
		s = !s;
	}
	return o;
}


//draws grid info like mouse position and zoom level
function showGridInfo()
{
	var ts = 20;
	textSize(ts);
	var ij = 280;
	strokeWeight(1);
	text("Position: (" + -1*round((its(mouseX, "x")/tw)/zoom, 2).toString()
			   + ", "
			   + round((its(mouseY, "y")/tw)/zoom, 2).toString()
			   + ")"
				, -1*(width/2), (-1*(height/2))+(ij+=ts));
	text("Zoom: " + round(zoom, 2).toString(), -1*(width/2), (-1*(height/2))+(ij+=ts+5));
	text("yo", -1*(width/2), (-1*(height/2))+(ij+=ts+5));

}



//adds or edits line into the array
function updateLine(x, k)
{
//edit if exists else add new one
	if (k < lines.length)
		lines[k] = new ddline(0,0,0,0);
	else
		lines.push(new ddline());


	for (var i = -1*(itrs*s); i < itrs*s; i++)
	{
		var vv = x;
		lines[k].append(new v2line(-1*(i/s), xx((i/s), vv), -1*(((i+1)/s)), xx(((i+1)/s), vv)));
	}
}


//when you click the plus button call this
//inserts input and moves plus button down
function addLine()
{
	colorPickers.push(createColorPicker("#ffff00"));
	lineColors.push("#ffff00");
	inputs.push(createInput());
	let z = inputs.length-1;

	colorPickers[z].position(220, 35*(z));
	colorPickers[z].input(() => {  changeLineColor(z);  });
	
	inputs[z].position(0, 35*(z));
	inputs[inputs.length-1].input(() => {  editLine(z);  });


	newinput.position(0, (35*(inputs.length-1)) + 35)
	lines.push(new ddline());
}


function changeLineColor(k)
{
	console.log(colorPickers[k].value());
	lineColors[k] = colorPickers[k].value();
	redraw();
}



//on edit input update line function
function editLine(k)
{
	updateLine(inputs[k].elt.value, k);
	redraw();
}

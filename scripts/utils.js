//vector2 used for positions
class v2
{
//init pos
//takes 2 ints
	constructor(_x, _y)
	{
		this.x = _x;
		this.y = _y;
	}
}



//vector3 used for colors and whatnot
class v3
{
//init pos
//takes 3 ints
	constructor(_x, _y, _z)
	{
		this.x = _x;
		this.y = _y;
		this.z = _z;
	}
}





//vector2 holds 2 points that form a line
class v2line
{
//init pos's
//takes 4 ints
	constructor(_x1, _y1, _x2, _y2)
	{
		this.x1 = _x1;
		this.y1 = _y1;
		this.x2 = _x2;
		this.y2 = _y2;
	}
	show()
	{
/*
		push();
		stroke(255);
		if (!isFinite(this.x1) || !isFinite(this.x2) || !isFinite(this.y1) || !isFinite(this.y2))
			circle(this.x1, this.y1, (1/s)*5);
		pop();
		line(this.x1, this.y1, this.x2, this.y2);
*/
		vertex(this.x1, this.y1);
		vertex(this.x2, this.y2);

	}
}



//ddline holds an array of sub-lines 
class ddline
{
//init line array
	constructor()
	{
		this.lines = [];
	}

//draws all the sub-lines to the screen
	show()
	{
		beginShape(LINES);
		for (var i = 0; i < this.lines.length; i++)
		{
			//if (vts(this.lines[i].x) > 0 && vts(this.lines[i].x < width))
				this.lines[i].show();
		}
		endShape();
	}

//add sub-lines to the line array
//takes v2line
	append(v)
	{
		this.lines.push(v);
	}
}



//factorial function because the js one is weird yo
//takes int
function fact(v)
{
	var o = 1;
	for (var i = 2; i <= v; i++)
		o *= i;
	return o;
}


//gets distance between 2 pointes
//takes 2 v2's
function dddist(p1, p2)
{
	var o = 0;
	o = sqrt(sq(p2.x-p1.x)+sq(p2.y-p1.y));
	return o;
}


function replaceAll(s, m)
{
	s = evalInverseReady(s);
	var re = new RegExp(Object.keys(m).join("|"), "gi");
	var o = s.replace(re, function(mt)
	{
		return m[mt];
	});
	return o;
}

function evalInverseReady(v)
{
	return v.replace("+", "__vx_a").replace("-", "__vx_b").replace("*", "__vx_c").replace("/", "__vx_d")
}


let signs = {
	"__vx_a": "-",
	"__vx_b": "+",
	"__vx_c": "/",
	"__vx_d": "*"
}

//used it edit string to switch signs like "+" would output "-"
function evalInverse(v)
{
	return replaceAll(v, signs);
}


//formats user inputed function so its ready for eval
function evalReady(v)
{
	v = v.replace(" ", "");
	var l = 0;
	for (var n = -1; v.indexOf("x", n+1) >= 0;)
	{
		n = v.indexOf("x", n+1);
		if (n == -1) continue;
		if (!isNaN(v[n-1]) && v[n-1] != "(" && n-1 >= 0) 
		{
			v = v.slice(0, n) + "*(x)" + v.slice(n+1, v.length);
		}
	}
	return v;
}

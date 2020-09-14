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
		line(this.x1, this.y1, this.x2, this.y2);
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
		for (var i = 0; i < this.lines.length; i++)
		{
			this.lines[i].show();
		}
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

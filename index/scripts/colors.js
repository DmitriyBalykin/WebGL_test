var gl = null;
var c_width = 0;
var c_height = 0;
window.onkeydown = checkKey;
function checkKey(ev)
{
	switch(ev.keyCode)
	{
		case 49:
		{
			//1
			gl.clearColor(0.3,0.7,0.2,1.0);
			clear(gl);
			break;
		}
		case 50:
		{
			//2
			gl.clearColor(0.3,0.2,0.7,1.0);
			clear(gl);
			break;
		}
		case 51:
		{
			//3
			var color = gl.getParameter(gl.COLOR_CLEAR_VALUE);
			alert('clearColor = ('+
				Math.round(color[0]*10)/10 +
				',' + Math.round(color[1]*10)/10 +
				',' + Math.round(color[2]*10)/10 + ')');
			window.focus();
			break;
		}
	}
}
function getGLContext()
{
	var canvas = document.getElementById("canvas-element-id");
	if(canvas == null)
	{
		alert("There is no canvas on this page");
		return;
	}
	var names = ["webgl","experimental-webgl","webkit-3d","moz-webgl"];
	var ctx = null;
	for(var i = 0; i < names.length; ++i)
	{
		try
		{
			ctx = canvas.getContext(names[i]);
		}
		catch(e){}
		if(ctx)
			break;
	}
	if(ctx == null)
	{
		alert("WebGL is not available");
	}
	else
	{
		return ctx;
	}
}
function clear(ctx)
{
	ctx.clear(ctx.COLOR_BUFFER_BIT);
	ctx.viewport(0,0,c_width,c_height);
}
function initWebGL()
{
	gl = getGLContext();
	gl.canvas.width = window.innerWidth - 25;
	gl.canvas.height = window.innerHeight - 25;
}

var last_position_of_x, last_position_of_y, current_X, current_Y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(width<992)
{document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";}

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
console.log("my_touchstart");
      last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
       last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
console.log("my_touchmove")
         current_X = e.touches[0].clientX - canvas.offsetLeft;
         current_Y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_X + "y = " + current_Y);
        ctx.lineTo(current_X, current_Y);
        ctx.stroke();
        

        last_position_of_x = current_X; 
        last_position_of_y = current_Y;
    }
    function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }


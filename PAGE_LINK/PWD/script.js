function change_background(){
  var d1 = document.getElementById("HD");
  HD.style.background ="red";
}

function change_backgrounds(){
   var dd1 = document.getElementById("HD2");
 var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
    dd1.style.background = bgColor;
    }
change_backgrounds();

function color_picker_tool(){
   var dd1 = document.getElementById("HD1");
  var colorinput = document.getElementById("clr");
  var color = colorinput.value;
  dd1.style.backgroundColor = color;
}
function doSquare() {
  var dd1 = document.getElementById("HD");
  var sizeinput = document.getElementById("sldr");
  var size = sizeinput.value;
  var ctx = dd1.getContext("2d");
  ctx.clearRect(0,0,dd1.width,dd1.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,size,size);
}

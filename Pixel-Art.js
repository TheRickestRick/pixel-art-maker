

for(let x = 0; x < 1092; x++){
  createPixel();
}

function createPixel(){
const pixel = document.createElement("div");

pixel.setAttribute("style", "width: 1%; height:1%; float: left; padding-bottom:2%; background-color:grey; border-style:solid; border-color:black; border-width:2px");
document.body.appendChild(pixel);
};

const colorPicker = document.createElement("input");
document.body.appendChild(colorPicker);

var painting = false;
var color;
var imp = document.getElementsByTagName("input");

imp[0].onchange = function(){
    color = imp[0].value ;
}



document.onclick = function(e){

    if(painting === false){
      painting = true;
    }else{
      painting = false;
    }
}

document.onmouseover = function(e){
  if(painting === true){
    e.target.style.background = `${color}`;
  }
}




// var imp = document.getElementById("colorPick");
//
// imp.onchange = function(){
//   console.log(imp.value)
//
// }




//
// function pickColor(){
//   var color = document.createElement("input");
//   document.body.appendChild(color);
// }

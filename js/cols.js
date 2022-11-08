document.write("<div class='button-container' id='button' ");
document.write("<tr>");

const walls = []; 

let clicked_points = [];
let teAma = false;

if (window.innerWidth > 1200){
for (var j = 1; j <= 10000; j++) { 
    if (walls.includes(j)){
        document.write("<a class='wall' id='" + j + "' style='background: rgb(83, 78, 78); opacity: 100;'></a>");
        }
        else {
            document.write("<a onclick='select(this)' class='button' id='" + j + "'></a>");
        }
    }
    document.write("</div>");
}else{
    document.write("</div>");
    var elem = document.getElementById("button");
    elem.remove();
    document.write("<p>not available<br>for this screen size</p>");
}

const toCoords = function (number) {
    let coords = [];
    let num = 0;
    while (teAma == false){
        if (number > 100) {
            number -= 100;
            num += 1;
        }
        else{
            break;
        }
    }
    number--;
    coords.push(number);
    coords.push(num);
    return coords;
  }
        
select = (val) => {
    let color = "red";
    if (val.style.background != color) {
        val.style.background = color;
        val.style.opacity = "50%";

        let coord = toCoords(val.id);
        clicked_points.push(coord);
    }
    else{
        val.style = null;
        clicked_points.pop();
    }
    
    if (clicked_points.length == 2){
        //send clicked_points to fogo
        
        window.location.href = "/simulation.html";
    } 
}
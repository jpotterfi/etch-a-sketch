let pixelDimension = 50;
let gridDimension = 960;
//console.log(gridDimension * gridDimension);
//console.log(pixelDimension * pixelDimension);
//console.log((gridDimension * gridDimension) / (pixelDimension * pixelDimension));
//console.log(Math.sqrt((gridDimension * gridDimension) / (pixelDimension * pixelDimension)));
//let testDimension = Math.sqrt((gridDimension * gridDimension) / (pixelDimension * pixelDimension));
//console.log("test" + testDimension);
//console.log("current grid dimension" + gridBoxDimension);
let black = document.getElementById("black");
let randomColor = document.getElementById("random");
let eraser = document.getElementById("eraser");
let drawColor = "black";
let slider = document.getElementById("myRange");
let output1 = document.getElementById("demo1");
let output2 = document.getElementById("demo2");
let reset = document.querySelector(".reset");
const canvas = document.querySelector(".container")
output1.innerHTML = slider.value; // Display the default slider value
output2.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
createCanvas();







slider.oninput = function() {
output1.innerHTML = this.value;
output2.innerHTML = this.value;
}

slider.addEventListener("mouseup", function(){
    deleteCanvas();
    pixelDimension = this.value;
    createCanvas();

});

  // deleteCanvas();
    
    //pixelDimension = this.value;
    //createCanvas();


black.addEventListener("click", function(){
    drawColor = "black";
    console.log(drawColor);
});

randomColor.addEventListener("click", function(){
    drawColor = "random";
    console.log(drawColor);
});

eraser.addEventListener("click", function(){
    drawColor = "white";
    console.log(drawColor);
});






function createCanvas(){
for (i = 0; i < (pixelDimension * pixelDimension); i++){
    let gridBoxDimension = Math.sqrt((gridDimension * gridDimension) / (pixelDimension * pixelDimension));
    //console.log("In createCanvas loop, gridBoxDimension at:", + gridBoxDimension);
    const gridBox = document.createElement("p");
    
    //gridBox.style.border = "1px solid black";
    //console.log(gridBoxDimension);
    gridBox.style.width = gridBoxDimension + "px";
    gridBox.style.height = gridBoxDimension + "px";
    gridBox.style.minWidth = gridBoxDimension + "px";
    gridBox.style.minHeight = gridBoxDimension + "px";
    gridBox.style.backgroundColor = "white";
    gridBox.style.margin = 0;
    
    
    
    gridBox.addEventListener("mouseenter", function(){
        if (drawColor == "black") {
            this.style.backgroundColor = "black";
        } 
    });
    
    gridBox.addEventListener("mouseenter", function(){
        if (drawColor == "white") {
            this.style.backgroundColor = "white";
        } 
    });

    gridBox.addEventListener("mouseenter", function(){
        if (drawColor == "random") {
        console.log("in if statement, draw color is" + drawColor);
            let r = 0;
            let g = 0;
            let b = 0;
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            console.log("rgb(" + r + "," + g + "," + b + ")")
            this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";   
        } 
    });
    canvas.appendChild(gridBox);
};
};

function deleteCanvas(){
       let deleteBox = document.querySelector(".container");
       deleteBox.innerHTML = '';
}

function resetCanvas(){
    deleteCanvas();
    createCanvas();
}

reset.addEventListener("click", resetCanvas);

//function changeColor(e) {
  //  console.log("changeColor is triggering");
    //e.style.backgroundColor = "purple";
//}


//console.log(gridBoxBehavior);





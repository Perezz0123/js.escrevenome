function setup() {
    createCanvas(400, 400);
    background("blue");
  }
  
  function draw() {
    
    stroke("black");
    fill("lightblue")
  
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX,mouseY,20,35);
    }
  }
let i = 0;

function setup() {
    createCanvas(500,500);
    background(0, 0, 0);
    rectMode(CENTER);
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'black';
}

function draw() {
    noFill();
    stroke(255);
    if(i < 100){
        star();
        i = i + 1;
        if(i == 100){
            for (let j = 1; j < 5; j++) planet(j);
        }
    }
}

function planet() {
    let diameter = random(10,350);
    let xPos = random(0,width);
    let yPos = random(0,height);
    let i = random(0,3)
    if (i > 2) {
        fill(random(100,150),random(0,150),random(0,100));
    }
    else if (i < 1) {
        fill(random(0,50),random(0,100),random(100,150));
    }
    else {
        fill(random(150,200),random(150,200),random(150,200));
    }

    noStroke();
    ellipse(xPos,yPos,diameter,diameter);
}

function star() {
    let diameter = random(1,5);
    let xPos = random(0,width);
    let yPos = random(0,height);
    fill(random(220,255),random(220,255),random(220,255));
    noStroke();
    ellipse(xPos,yPos,diameter,diameter);
}
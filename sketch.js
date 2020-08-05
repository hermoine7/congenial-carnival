/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;*/
var position;
var penPositon;
var pen;
//var engine, world;
var database;

//var drawing = []

function setup(){
    //var canvas = createCanvas(1200,400);
   /* engine = Engine.create();
    world = engine.world;
    canvas.parent('canvascontainer');*/
    database = firebase.database()
    pen = createSprite(200, 200, 20, 20);
    penPosition = database.ref('pen/position');
    penPosition.on("value",readPosition,showError);
    //background(51)
}
var db_drawing = []

function draw(){
    drawSprites();
    if(keyCode == 81){
        pen.shapeColor = "red";
    }
    if(keyCode == 87){
        pen.shapeColor = "blue";
    }
    if(keyCode == 69){
        pen.shapeColor = "green";
    }
    if(keyCode == 82){
        pen.shapeColor = "yellow";
    }
    if(keyCode == 49){
        pen.scale = 0.5;
    }
    if(keyCode == 50){
        pen.scale = 0.7;
    }
    if(keyCode == 51){
        pen.scale = 0.9;
    }
    if(keyCode == 52){
        pen.scale = 1.1;
    }
    if(keyCode == 53){
        pen.scale = 1.3;
    }
    if(keyCode == 54){
        pen.scale = 1.5;
    }
    if(keyCode == 55){
        pen.scale = 1.7;
    }
    if(keyCode == 56){
        pen.scale = 1.9;
    }
    if(keyCode == 57){
        pen.scale = 2;
    }
    if(keyCode == 48){
        background("white");
    }
    if(keyCode == 8){
        pen.x = 200;
        pen.y = 200;
    }
}
/*function mouseDragged(){
    var point = {
        x: mouseX,
        y: mouseY
    }
    drawing.push(point);
    var drawingRef = database.ref('drawing')
    drawingRef.set({
        "d": drawing
    })
}

function readData() {
    database.ref('drawing/').on('value', (data) => {
        db_drawing = data.val().d
    })
}*/
function mouseDragged(){
    pen.x = mouseX;
    pen.y = mouseY;
    changePosition(pen.x, pen.y);
}

function readPosition(data){
    position = data.val();
    pen.x = position.x;
    pen.y = position.y;
}
function changePosition(x,y){
    database.ref('pen/position').set({
        'x' : mouseX , 
        'y' : mouseY
        });

    }
function showError(){
    console.log("error in writing database");
}



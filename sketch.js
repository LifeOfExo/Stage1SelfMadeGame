
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var title
var usernameInput;
var tagLine;
var rectangle;
var shake;
var question;

function preload(){
  ballimage = loadImage("ball.jpg")
  resultimage = loadImage("result.png")
}
function setup()
{
createCanvas(1901,965.1)

title = createElement("h1")
title.html("MAGIC 8 BALL")
title.position(800,10)

tagLine = createElement("h2")
tagLine.html("ASK ME ANYTHING")
tagLine.position(798,500)

engine = Engine.create()
world = engine.world;

  // createCanvas(displayWidth-4.01, displayHeight-121);
 usernameInput = createInput("").attribute("placeholder","Enter The Question") 
usernameInput.position(displayWidth/2-235, displayHeight/2+50 )
usernameInput.class("placeholder")

ball = createSprite(912,300)
ball.addImage(ballimage)

rectangle = Bodies.rectangle(920,300,400,400,{restitution:0.3,isStatic:false});

//ground = Bodies.rectangle(920,500,400,20,{isStatic:true})

shake = createButton("Shake")
shake.position(870, 655)
shake.class("button")
}

function draw() 
{
  background("white");


  //fill("cyan")
  shake.mousePressed(()=>{
    question=usernameInput.value()
   /* display1 = createElement('h2')
    display1.position(400,150)
    display1.style('color',"black")
    display1.html("Question:"+question)*/
    display = createElement('h1')
    display.position(displayWidth/2-75, displayHeight/2+5)
    display.style('color',"black")
    var rand = Math.round(random(1,4))
    switch(rand){
      case 1: display.html("yes you are")
      break;
      case 2: display.html("doing good")
      break;
      case 3:display.html("wow")
      break;
      case 4:display.html("you can't")
      break;
    }
    
    shake.hide()
    usernameInput.hide()
    tagLine.hide()
    button1=createButton("Reload")
    button1.position(870, 655)
    button1.class("button")
    button1.mousePressed(()=>{
      location.reload()
    })
    })
    drawSprites()
}


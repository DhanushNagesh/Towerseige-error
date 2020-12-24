const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var plat1, plat2, plat3
var ball
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20

var sling

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;


  plat1 = new Ground(70,320,100,20)
  plat2 = new Ground(400,300,200,20)
  plat3 = new Ground(650,230,200,20)
//row 1
  box1 = new Box(325,295,50,50)
  box2 = new Box(375,295,50,50)
  box3 = new Box(425,295,50,50)
  box4 = new Box(475,295,50,50)

//row 2
box5 = new Box(350,205,50,50)
box6 = new Box(400,205,50,50)
box7= new Box(450,205,50,50)

//row 3
box8 = new Box(375,120,50,50)
box9 = new Box(425,120,50,50)

box10 = new Box(400,70,50,50)

//stack2
//row 1
box11 = new Box(570,200,50,50)
box12 = new Box(620,200,50,50)
box13 = new Box(670,200,50,50)
box14 = new Box(720,200,50,50)

//row 2
box15 = new Box(595,140,50,50)
box16 = new Box(645,140,50,50)
box17= new Box(695,140,50,50)

//row 3
box18 = new Box(620,80,50,50)
box19 = new Box(670,80,50,50)

box20 = new Box(645,20,50,50)




  ball = new Poly(50,300,20)

  ball1=Bodies.circle(50,200,20);
  World.add(world,ball1);
  sling=new SlingShot(ball1,{x:100,y:200});
  //sling = new Slingshot(ball.body,{x:100,y:100})

}

function draw() {
  background(0); 
  Engine.update(engine);
     

  plat1.display();
  plat2.display();
  plat3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ball.display();
  //drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball.body);
  }

}
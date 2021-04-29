const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var enigne,world;

function preload(){
 backgroundImg=loadImage("bg.png");
}



function setup() {
  createCanvas(3000,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(600,600,1200,20);

  box1=new Box(700,100);
  box2=new Box(700,100);
  box3=new Box(700,100);
  box4=new Box(700,100);
  box5=new Box(700,100);
  box6=new Box(700,100);


  
  hero=new Hero(200,200,150);
  rope=new Rope(hero.body,{x:500,y:50});
  monster = new Monster(1000,300,100);
 
}

function draw() {
background(backgroundImg)
  
  Engine.update(engine);
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  
  hero.display();
  rope.display();
  monster.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

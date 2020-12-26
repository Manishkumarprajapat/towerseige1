const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const constraint = Matter.Constraint;
const body=Matter.Body;
var engine, world;
function preload() {
	polygon_img = loadImage("polygon.png");
}
 function setup() {
	var canvas = createCanvas(800,700);
	engine=Engine.create();
	world=engine.world;
	//create bodies here
	ground1=new Ground(375,400,220,20)
ground2=new Ground(400,365,50,50)
stroke ("red")
ground3=new Ground(350,365,50,50)
stroke ("red")
ground4=new Ground(300,365,50,50)
stroke ("red")
ground5=new Ground(450,365,50,50)
stroke ("red")
ground6=new Ground(425,315,50,50)
stroke ("black")
ground7=new Ground(375,315,50,50)
stroke ("black")
ground8=new Ground(325,315,50,50)
stroke ("black");
ground9=new Ground(350,265,50,50)
stroke ("black");
ground10=new Ground(400,265,50,50)
stroke ("black");
ground11=new Ground(375,215,50,50)
var options={
	isStatic:true
}
ball = Bodies.circle(50, 200, 20);
 World.add(world, ball);
 slingshot=new SlingShot(this.ball,{x:150,y:350})
//slingshot = new SlingShot(box.body,{x:200, y:50})
 }
 function draw() {
	background("green");
	Engine.update(engine);
	ground1.display();
	ground2.display();
	ground3.display();
	ground4.display();
	ground5.display();
	ground6.display();
	ground7.display();
	ground8.display();
	ground9.display();
	ground10.display();
	ground11.display();
	slingshot.display()
	fill("gold"); 
	imageMode(CENTER)
	 image(polygon_img, ball.position.x, ball.position.y, 40, 40);

 }
 function mouseDragged() 
 { Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY }); } 
 function mouseReleased() 
 { slingshot.fly();
 }

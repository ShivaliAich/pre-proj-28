var ground, tree, mango1, mango2,mango3,mango4,mango5,stone,treeIMG,boyIMG,mangoIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
treeIMG = loadImage("images/tree.png");
boyIMG = loadImage("images/boy.png");

}

function setup() {
	
	createCanvas(800, 700);
	tree = createSprite(600,500,50,200);
	tree.addImage("tree",treeIMG);
	tree.scale = 0.3;
	boy = createSprite(200,630,50,50);
	boy.addImage("tree",boyIMG);
	boy.scale = 0.1;
	engine = Engine.create()
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,30);
	mango1 = new Mango(600,400,50,50);
	
	mango2 = new Mango(650,400,50,50);
	
	mango3 = new Mango(800,400,50,50);
	
	mango4 = new Mango(600,300,50,50);
	
	mango5 = new Mango(700,300,50,50);
	

	
	stone = new Stone(150,580,30);
	string = new String(stone.body,{x:150,y:180});
	Engine.run(engine);
  
}


function draw() {
  background(rgb(118,233,255));
  rectMode(CENTER);
  
  ground.display();
  stone.display();
  tree.display();
  string.display();
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}
function mouseDragged (){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	string.fly();
}


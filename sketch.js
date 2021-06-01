const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var line1;
var ground;
var rope;
var myengine,myworld;
var bow,bowimage;
var e;
var enemy = [];
var hint,hintmessage;
var image1,image2,image3;
var gamestate = "attach";
var gameon = 0;
var login;
var backgroundimage;
var playername;
var ex;
var zombie,backgroundsound;
var form,holder=0,hold=0;
var chancesremaining = 3;
var lostimage

function preload(){

  bowimage = loadImage("images/bow.png");
  loadImage("images/enemy1.png");

  image2 = loadImage("images/enemy1.png");
  image2 = loadImage("images/enemy2.png");
  image3 = loadImage("images/enemy3.png");
  lostimage = loadImage("images/background1.jpg");

  backgroundimage = loadImage("images/lost.jpg");
  //zombiesound = loadSound("zombie.mp3");
  //backgroundsound = loadSound("backgroundsound.mp3");


} 


function setup() {
  createCanvas(displayWidth,displayHeight);

  myengine = Engine.create();
  myworld = myengine.world;

  //line1 = new Box(100,200,70);
  //rope = new Bow(line1.body, {x:200, y:400});
  //ground = new Ground(displayWidth/2,720,displayWidth,20);
  //ex = new Box(100,20,80);

  /*hint = createButton('Hint')
  hint.position(20, 20);
  hint.class("customButton");

  hintmessage = createElement('p');

  hint.mouseClicked(()=>{
    hintmessage.html('Welcome to the archery game.Compleately userly friendly game.Try to make the best of your high scores and share it with as many as possible') ;
    hintmessage.position(250,20);
    });

    hint.doubleClicked(()=>{
      //hintmessage.hide();
      hintmessage.position(250,-50);
    })   
 
  
*/
form = new Form();
}



function draw() {

  background(lostimage);  
  Engine.update(myengine);
  //frameRate(40);
  form.display();
  
  switch(holder){
    case 1: rope.display();
            line1.display();
            ground.display(); 
            hold = 3;
            
    break;
    case 2: 
            ex.display();
            ex.body.density = 3;
            ex.body.position.y = mouseY;
            ex.body.position.x  = mouseX;
            ground.display(); 
    break;
    default: 
    break;
  }


  if(holder === 1 || holder === 2){
  darts();
    for(var j =  0; j<enemy.length; j++ )
    {
      enemy[j].display();
    }
  }


}













function darts(){
  if(frameCount%150 === 0){
    e = enemy.push(new Line1(Math.round(random(displayWidth/2,1200)),0,100,100));
    }
  
}

function mouseDragged() {
  Matter.Body.setPosition(line1.body,{x: mouseX, y: mouseY});
  gamestate = "dragged";
}

function mouseReleased() {
if(gamestate === "dragged"){
  rope.fly();
  gamestate = "fly";
}
}

function keyPressed(){
  if(keyCode === 32){
    rope.reattach(line1.body);
    gamestate = "attach";
  }

 // if(keyCode === 65){
  //  Matter.Body.forceApply(ex.body,ex.body.poisitio,{x:40});
 // }
  
  if (keyCode === UP_ARROW) {
console.log("kjhkjhkj");
    Matter.Body.applyForce(ex.body,ex.body.position,{x:10,y:0});
  }
} 
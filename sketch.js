var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
//var particle=[];
var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gameState="play";
var touches1 = [];

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  particle1=new Particle(-20,10,10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);
 //text("Score : "+score,20,30);
gameState="play"
  Engine.update(engine);
 // mousePressed();
  particle1.display();
  
if(particle1.body.position.y>760){
  if(particle1.body.position.x<300){
    score=500;
  }else if(particle1.body.position.x>301&&particle1.body.position.x<600){
    score=100;
  }else if(particle1.body.position.x>601&&particle1.body.position.x<900){
    score=200;
  }
}
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
    //turn=0
   textSize(32);
   text("Turn's : "+turn,580,35);
   text("Score : "+score,280,35);
   text("500",20,528);
   text("500",100,528);
   text("500",180,528);
   text("500",260,528);

   text("200",340,528);
   text("200",420,528);
   text("200",500,528);

   text("500",580,528);
   text("500",660,528);
   text("500",740,528);

   
   stroke("green");
   line(-10,500,810,500);

}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
  Matter.Body.setPosition(particle1.body,{x:mouseX,y:10});

  //touches1=[];
  }
}

/*● if the particle's x position is less than 300 then the score is 500 points.
● If the particle's x position is more than 301 and less than 600 then the score is
100 points.
● If the particle's x position is more than 601 and less than 900 then the score is
200 points.
*/




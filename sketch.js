const Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var score=0;
var turn=0;
var play=1;
var end=0;
var gameState=play;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80) 
  {
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
  Engine.update(engine);
 
  
  for (var i = 0; i < plinkos.length; i++) 
  {
    plinkos[i].display();
  }

  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }

  textSize(20);
  //fill(225);
	//text(mouseX+","+mouseY,mouseX,mouseY);

  fill("white");
  text("Score : "+score,20,30);

  push();
  fill("white");
  text(500,25,580);
  text(500,105,580);
  text(500,185,580);
  text(100,185+80,580);
  text(100,185+160,580);
  text(100,185+240,580);
  text(100,185+320,580);
  text(200,185+400,580);
  text(200,185+480,580);
  text(200,185+560,580);
  pop();

  if(gameState!==end)
  {
    if(particle!=null)
    {
      particle.display();

      if(particle.body.position.y>780)
      {
        if(particle.body.position.x<=240 && particle.body.position.x>0)
        {
          score=score+500;
          particle=null;
        }
      }
    }

    if(particle!=null)
    {
      particle.display();

      if(particle.body.position.y>780)
      {
        if(particle.body.position.x<=560 && particle.body.position.x>240)
        {
          score=score+100;
          particle=null;
        }
      }
    }

    if(particle!=null)
    {
      particle.display();

      if(particle.body.position.y>780)
      {
        if(particle.body.position.x>560 && particle.body.position.x<800)
        {
          score=score+200;
          particle=null;
        }
      }
    }

    if(turn===6)
    {
      gameState=end;
    }
  }
  if(gameState===end)
  {
    fill("white");
    textSize(30);
    text("GAME OVER",300,235);
  }
  console.log(turn);
}




function mousePressed()
{
  if(gameState!=="end")
  {
    turn++;
    particle=new Particle(mouseX,10,10);
  }
}
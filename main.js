function preload(){
    clown_nose = loadImage("clone.png");
    moustache = loadImage("moustache.png");
    crown = loadImage("crown.png");
    lion = loadImage("lion.png");
    hair = loadImage("hair.png");
    dog = loadImage("dog.png");
    ghost = loadImage("ghost.png");
    jason = loadImage("jason.png");
    ninja = loadImage("ninja.png");
    mutant = loadImage("mutant.png");
    gogle = loadImage("Gogle.png");
    Cigar = loadImage("cigar.png");
    axe = loadImage("axe.png");
    lion_face = loadImage("lion_face.png");
    thug_life = loadSound("KGF.mp3");
}

noseX = 0;
noseY = 0;

x = document.getElementById("myAudio");

function setup()
{
    canvas = createCanvas(400,290);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    

    model = ml5.poseNet(video, modelLoaded);
    model.on("pose", showResult);
}

function modelLoaded(){
    console.log("Model is Linked");
}

function showResult(result){
    
   
        console.log(result);
        noseX = result[0].pose.nose.x-5;
        noseY = result[0].pose.nose.y-5;
        
}

function draw()
{   
    option = document.getElementById("slt").value;
    image(video, 0, 0, 400, 290);
     
    if(option == "Clown nose"){

        r = Math.floor(Math.random() *255) + 100;
        g = Math.floor(Math.random() *255) + 100;
        b = Math.floor(Math.random() *255) + 100;
        tint(r,g,b);

        image(clown_nose, noseX-140, noseY-130, 50,50);
    }
    if(option == "Moustache"){
        image(moustache, noseX-160, noseY-110, 100,50);
    }
    if(option == "Crown"){
        image(crown, noseX-210, noseY-320, 190,200);
    }
    if(option == "Lion"){
        image(lion, noseX-300, noseY-200, 150,200);
    }
    if(option == "Hair"){
        image(hair, noseX-240, noseY-245, 250,230);
    }
    if(option == "Dog"){
        image(dog, noseX-250, noseY-265, 250,260);
    }
    if(option == "Ghost"){
        image(ghost, noseX-220, noseY-200, 190,250);
    }
    if(option == "Jason"){
        image(jason, noseX-200, noseY-240, 150,200);
        image(axe, noseX-33.0, noseY-200, 140,200);
    }
    if(option == "Ninja"){
        image(ninja, noseX-300, noseY-250, 400,305);
    }
    if(option == "Mutant Monster"){
        image(mutant, noseX-230, noseY-240, 250,250);
    }
    if(option == "Thug life"){
        image(gogle, noseX - 190, noseY - 170, 150, 100);
        image(Cigar, noseX - 110, noseY - 80, 90, 80);
        
       
    }
    if(option == "Axe"){
        image(axe, noseX-310, noseY-200, 150,200);
    }

    if(option == "Lion Face"){
        image(lion_face, noseX-250, noseY-265, 250,260)
    }
}
function takepic(){
    save("snap.webp");
  }

  window.addEventListener("keydown", myKeydown);

  function myKeydown(e){
      ascii = e.keyCode;
      if(ascii == 32){
        thug_life.play()
      }
      
      if(ascii == 87){
        thug_life.stop();
      }
  }

//image(crown, noseX-210, noseY-320, 190,200);
//image(dog, noseX-260, noseY-265, 250,260);
//image(hair, noseX-250, noseY-265, 280,250);
//image(jason, noseX-220, noseY-200, 150,200);
//image(ghost, noseX-220, noseY-200, 190,250);
//image(clown_nose, noseX-140, noseY-130, 50,50);
//image(moustache, noseX-150, noseY-120, 100,50);
//image(lion, noseX-300, noseY-200, 150,200);
//image(ninja, noseX-300, noseY-250, 390,305);
//image(mutant, noseX-250, noseY-220, 250,250);
//image(gogle, noseX - 190, noseY - 170, 150, 100);
//image(Cigar, noseX - 110, noseY - 80, 90, 80);
//image(axe, noseX-300, noseY-200, 150,200);
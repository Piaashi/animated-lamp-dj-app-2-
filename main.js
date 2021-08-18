song="";

function setup()
{
   canvas=createCanvas(400,300);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
}


function draw()
{
 image(video,0,0,400,300);
}


function preload()
{
    song=loadSound("song1.mp3");
}


function play()
{
    song.play();
    console.log("song1 is playing");
}

function stop()
{
    song.stop();
}
function setup(){
    canvas = createCanvas(550,550);
    canvas.position(550,70);

    video = createCapture(VIDEO);
    video.size(550,500);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#00ffbb');
}

function modelLoaded(){
    console.log("Posenet is innisialised!");
}

function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
        
    }
}
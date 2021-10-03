function preload(){
    clown=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
    }
    function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    postNet=ml5.poseNet(video,modelloaded)
    postNet.on('pose',gotposes);
    }
    function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX,noseY,20);
    image(clown,noseX,noseY,30,30)
    }
    function take_snapshot(){
        save('myfilter.png');
    }
    function modelloaded(){
        console.log("postNet is intialized")
    }
    function gotposes(results){
        if(results.length>0){
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("nose x= "+noseX);
            console.log("nose y= "+noseY);
        }
    }
    noseX=0;
    noseY=0;
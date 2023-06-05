status = "";
results = "";

function setup(){
    canvas = createCanvas(380, 380)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
    if(objects[i].label == object_name)
    {
        utterThis = SpeechSynthesisUtterance()
    }
}

function draw(){
    image(video, 0, 0, 380, 380)
    if(status !=""){
        objectDetector.detect(video,gotResults);
        for(i=0; i<objects.label; i++){
            r = random(255);
            g = random(255);
            b = random(255);
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Object Detected Is... " + objects.label;
            fill(r,g,b);
            percent = floor(objects[i].confidence*100);
            text(objects [i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            video.stop();
        }
    }
}

function modelLoaded(){
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(video,gotResults);
}

gotResults(error, results){
    if (error){
        console.log(error);
    }
    console.log(results{
        objects = results;
    })
}
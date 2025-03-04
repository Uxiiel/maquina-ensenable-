Webcam.set ({
    height: 300,
    width: 350 ,
    image_format:"png",
    png_quality: 90    
});
camera = document.getElementById("camera");
Webcam.attach ("#camera"); 

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capturage_image' src='"+data_uri+"'>";
    });
}
console.log ("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4PlAYdLIs/model.json",modelLoaded);

function modelLoaded() {
    console.log ("modelo cargado");
}

function check() {
    img=document.getElementById("capturage_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log (results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
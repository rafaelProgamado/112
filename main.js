Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality: 90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="imagem capturada" src="'+data_uri+'"/>';
    });
}

 
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ttcauzsxy/model.json',modelLoaded());

console.log('ml5 version:', ml5.version);

function modelLoaded() {
    console.log('Model Loaded!');
  }


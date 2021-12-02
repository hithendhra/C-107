function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WcNMLM5qW/',modelready);
}

function modelready()
{
    classifier.classify(gotresults);
    
}
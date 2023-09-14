var carBtn = document.getElementById('carUpdate');
const cars = ["Volvo", "Dorran", "Xeronia"];
var playBtn = document.getElementById('music');
var audio = new Audio();
var url = "audio.flac";
audio.src = url;

playBtn.addEventListener('click', function() {
    audio.currentTime = 0;
    audio.play();
});

carBtn.addEventListener('click', function() {
    var definedCars = cars.filter(function(car)  {
        return car !== undefined;
    })

    if (definedCars.length > 0) {
        var randomIndex = Math.floor(Math.random() * definedCars.length);
        var randomCar = definedCars[randomIndex];
        var newText = document.createTextNode(randomCar);
        var newLine = document.createElement('br');
        document.body.appendChild(newText);
        document.body.appendChild(newLine);

    } else {
        console.log("nothing here");


    }
});
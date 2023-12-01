window.addEventListener('load', init);

var animales = ['cerdo', 'gato', 'perro', 'vaca', 'zorro', 'burro', 'rana', 'leon'];
var efectos = ['rota', 'grande', 'pequenio', 'baja', 'dev']

function init() {
    var contenedorAnimales = document.createElement("div");
    contenedorAnimales.id = "animales";
    document.body.appendChild(contenedorAnimales);

    for (let i = 0; i < animales.length; i++) {
        var animal = document.createElement("div");
        animal.id = animales[i];
        animal.className = "animal";
        animal.style.backgroundImage = 'url(images/' + animales[i] + '.png)';
        animal.addEventListener("click", manejadora);
        contenedorAnimales.appendChild(animal);
    }

    var audio = document.createElement('audio');
    audio.id = 'audio';
    audio.preload = 'auto';
    contenedorAnimales.appendChild(audio);

    var source = document.createElement('source');
    source.id = 'source';
    source.type = 'audio/wav';
    audio.appendChild(source);

    function manejadora(event) {
        document.querySelector('#source').src = 'sounds/' + event.target.id + '.wav';
        document.querySelector('#audio').load();
        document.querySelector('#audio').play();

        document.getElementById(event.target.id).className = 'animal ' + efectos[Math.floor(Math.random() * efectos.length)];
    }
}
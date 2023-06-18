        "use strict";

        //Audios
        const audios = {
            c : "audios/c.wav",
            d : "audios/d.wav",
            e : "audios/e.wav",
            f : "audios/f.wav",
            g : "audios/g.wav",
            a : "audios/a.wav",
            b : "audios/b.wav"
        };

        //PlayAudios
        var player = new Audio;
        
        function playAudio(note){
            console.log(note);
            switch (note) {
                case "C":
                    player.src = audios.c;
                    player.play();
                    break;
                
                case "D":
                    player.src = audios.d;
                    player.play();
                    break;

                case "E":
                    player.src = audios.e;
                    player.play();
                    break;

                case "F":
                    player.src = audios.f;
                    player.play();
                    break;

                case "G":
                    player.src = audios.g;
                    player.play();
                    break;

                case "A":
                    player.src = audios.a;
                    player.play();
                    break;

                case "B":
                    player.src = audios.b;
                    player.play();
                    break;
            };
        };

        //Onclick controller
        for(var i = 0 ; i<8 ; i++){
            document.getElementsByClassName('key')[i].onclick = function(){playAudio(this.innerHTML)};
        };

        //Play with keyboard
        //Start from key 'a' and end from key 'k'
        //a s d f g h j k
        document.addEventListener('keypress' , ev => {
            switch (ev.key) {
                case "a":
                    playAudio("C");
                    break;
                
                case "s":
                    playAudio("D");
                    break;

                case "d":
                    playAudio("E");
                    break;

                case "f":
                    playAudio("F");
                    break;

                case "g":
                    playAudio("G");
                    break;

                case "h":
                    playAudio("A");
                    break;

                case "j":
                    playAudio("B");
                    break;

                case "k":
                    playAudio("C");
                    break;
            }
        });
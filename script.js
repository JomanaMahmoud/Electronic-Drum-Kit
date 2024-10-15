let keys = document.getElementsByClassName("key");

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = function() {
            let sound = new Audio(keys[i].getAttribute("data-sound"));
            sound.play();
        };
    }

    document.addEventListener('keydown', function(event) {
        let keyPressed = event.key.toUpperCase();
        console.log("Key pressed: " + keyPressed);
        
        for (let i = 0; i < keys.length; i++) {
            
            if (keys[i].innerText === keyPressed) {
                let soundFile = keys[i].getAttribute("data-sound");
                console.log("Key matched: " + keyPressed + " Sound file: " + soundFile);
                
                if (soundFile) {
                    let sound = new Audio(soundFile);
                    sound.play();
                } else {
                    console.log("Sound file not found for this key");
                }
            }
        }
    });
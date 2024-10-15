let keys = document.getElementsByClassName("key");

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = function() {
            let sound = new Audio(keys[i].getAttribute("data-sound"));
            sound.play();
        };
    }

    document.addEventListener('keydown', function(event) {
        let keyPressed = event.key.toUpperCase();
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].getAttribute("data-key") === keyPressed) {
                let sound = new Audio(keys[i].getAttribute("data-sound"));
                sound.play();
            }
        }
    });
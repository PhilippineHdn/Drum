window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if (!audio) return; 
    audio.currentTime = 0;
    audio.play(); 
    
    const keyToChange = document.querySelector(`div[data-key="${event.keyCode}"]`)
    keyToChange.classList.add('playing');

    // this.setTimeout(function() {
    //     keyToChange.classList.remove('playing');
    // }, 500)

})

window.addEventListener('keyup', function(event) {
    const keyToChange = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!keyToChange) return;
    keyToChange.classList.remove('playing');
    
} )


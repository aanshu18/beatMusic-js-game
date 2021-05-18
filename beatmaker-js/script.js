const animationElement = document.querySelectorAll('.visual');
const cards = document.querySelectorAll('.soundCards div');
const audio = document.querySelectorAll('.audio');

let currentMusic = [];

function musicPlayer(music) {
    if (currentMusic.length) {
        currentMusic[0].pause();
        currentMusic[0].currentTime = 0;
        currentMusic.pop();
    }
    currentMusic.push(music);
    currentMusic[0].play();
}


function animation(color) {
    const visualElement = document.createElement('div');
    visualElement.style.backgroundColor = color;
    visualElement.style.animation = "myJump 5sec ease";
    animationElement.appendChild(visualElement);




}


cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        musicPlayer(audio[index]);
        console.log(card.getAttribute("background"));
        //animation(this.getAttribute("background"));
        //currentMusic.push(audio[index]);
    })
});
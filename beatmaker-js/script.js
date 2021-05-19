const animationElement = document.getElementById("visual");
const cards = document.querySelectorAll('.soundCards div');
const audio = document.querySelectorAll('.audio');

let currentMusic = [];
const color = ['#60d394', '#d36060', '#c060d3', '#d3d160',
    '#606bd3',
    '#60c2d3'
];

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
    const visualElement = document.createElement("div");
    visualElement.style.backgroundColor = color;
    visualElement.style.animation = "jump 1s ease";
    animationElement.appendChild(visualElement);
    visualElement.addEventListener("animationend", () => {
        animationElement.removeChild(this);
    })
}


cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        musicPlayer(audio[index]);
        animation(color[index]);

    })
});
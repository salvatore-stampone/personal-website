var words = [
    "Web & App Development Student",
    "Tech Enthusiast",
    "Passionate about Learning",
    "Major Time Management Skills",
    "Problem Solver",
    "Calm and Cheerful",
    "Great Listener",
    "Resilient",
]
var counter = 0;

var word = document.getElementById("typewriter-carousel");

setInterval(update_carousel_words, 4500);

function update_carousel_words() {
    word.innerHTML = words[counter];
    counter++;
    if (counter >= words.length) {
        counter = 0;
    }
}
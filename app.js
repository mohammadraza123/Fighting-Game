var players = document.getElementById("character", "character2");
var counting = 50;
var count = 50;
window.onkeydown = function () {
    console.log(event.keyCode)
    if (event.keyCode === 39) {
        character.src = "photos/PLAYER 1.gif"
        counting = counting + 50
        character.style.left = counting + "px"
        setTimeout(function () {
            character.src = "photos/PLAYER 1.gif"
        }, 100)
    }
    if (event.keyCode === 37) {
        character.src = "photos/PLAYER 1.gif"
        counting = counting - 50
        character.style.left = counting + "px"
        setTimeout(function () {
            character.src = "photos/PLAYER 1.gif"
        }, 100)
    }
    if (event.keyCode === 38) {
        character.src = "photos/player 2.gif"
        setTimeout(function () {
            character.src = "photos/player 2.gif"
        }, 100)
    }
    if (event.keyCode === 40) {
        character.src = "photos/PLAYER 1.gif"
        setTimeout(function () {
            character.src = "photos/player 3.gif"
        }, 100)
    }
    if (event.keyCode === 17) {
        character.src = "photos/player 4.gif"
        setTimeout(function () {
            character.src = "photos/player 4.gif "
        }, 100)
    }
    if (event.keyCode === 16) {
        character.src = "photos/player 5.gif"
        setTimeout(function () {
            character.src = "photos/player 5.gif"
        }, 100)
    }
    if (event.keyCode === 65) {
        character2.src = "photos/second player 1.gif"
        count = count - 50
        character2.style.left = count + "px"
        setTimeout(function () {
            character2.src = "photos/second player 1.gif"
        }, 100)
    }
    if (event.keyCode === 68) {
        character2.src = "photos/second player 1.gif"
        count = count + 50
        character2.style.left = count + "px"
        setTimeout(function () {
            character2.src = "photos/second player 1.gif"
        }, 100)
    }
    if (event.keyCode === 90) {
        character2.src = "photos/Second 2.gif"
        setTimeout(function () {
            character2.src = "photos/second 2.gif"
        }, 100)
    }
    if (event.keyCode === 67) {
        character2.src = "photos/second 3.gif"
        setTimeout(function () {
            character2.src = "photos/second 3.gif"
        }, 100)
    }
    if (event.keyCode === 88) {
        character2.src = "photos/second 4.gif"
        setTimeout(function () {
            character2.src = "photos/second 4.gif"
        }, 100)
    }
    if (event.keyCode === 81) {
        character2.src = "photos/second 5.gif"
        setTimeout(function () {
            character2.src = "photos/second 5.gif"
        }, 100)
    }
    if (event.keyCode === 87) {
        character2.src = "photos/second 6.gif"
        setTimeout(function () {
            character2.src = "photos/second 6.gif"
        }, 100)
    }
}
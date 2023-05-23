let music = new Audio("");
let turn = new Audio("turn.wav");
let gameover = new Audio("");
let chance = "X";
let isgameOver = false;

// Function to change turn
const changeTurn = () => {
    return chance === "X" ? "0" : "X";
}

// Function to check for a Win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, 135],
    ];

    wins.forEach(e => {
        if (
          (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
          (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
          (boxtext[e[0]].innerText !== "")
        ) {
          document.querySelector(".info").innerText =
            boxtext[e[0]].innerText + " WON";
            isgameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
        }
    })

}


// Game Logic:
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = chance;
            chance = changeTurn();
            turn.play();
            checkWin();
            if (!isgameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + chance;
            }
        }
    })
})


// Reset Button

// let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });

    chance = "X";
    isgameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + chance;
    document
      .querySelector(".imgbox")
      .getElementsByTagName("img")[0].style.width = "0px";
})

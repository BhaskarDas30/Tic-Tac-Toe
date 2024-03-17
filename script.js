let main = document.querySelector("main");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newgameBtn = document.getElementById("newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const WinPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        CheckWinner();
    });
});

const CheckWinner = () => {
    for(let pattern of WinPattern) {
        let pos1 = boxes[pattern[0]].innerText; 
        let pos2 = boxes[pattern[1]].innerText; 
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 == pos3) {
                console.log("Winner is", pos1);
                ShowWinner(pos1);
            }
        }
    }
};

const ShowWinner = (winner) => {
    msg.innerText = `Winner is ${winner}!`;
    msgContainer.classList.remove("hidden");
    main.innerHTML = "";
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

newgameBtn.addEventListener("click", () => {
    window.location.reload();
})

resetBtn.addEventListener("click", () => {
    window.location.reload();
})



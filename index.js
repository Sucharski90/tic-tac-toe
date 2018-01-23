let p1turn = true;

let turnCount = 1;
let currentPlayer = null;
let gameInProgress = true;
const boxs = document.getElementsByClassName("box");
console.log(boxs)

for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener('click', function(event) {
    //legal move
    if (event.target.innerHTML !== "") {
      alert("cant play here")
      return
    }
    //write x or o
    const player = turnCount %2 ? 'O' : 'X'
    event.target.innerHTML = player;
    //win
    if (checkWin(player)) {
      alert(`Player ${player} won!`)
      return
    }

    // draw
    if(checkDraw()) {
      alert('No one won')
      return
    }
    // change player
    //incrament turn counter
    turnCount++;

  })
}
function checkDraw() {
  //check if all boxes taken
  return false
}

//function taken from class review, minor edits
function checkWin(player) {
  let outerBox = [];
  console.log(boxs)
  for (let i = 0; i < boxs.length; i++) {
    outerBox.push(boxs[i].innerHTML);
  }
  console.log(outerBox)
  return (
    (outerBox[0] === player && outerBox[1] === player && outerBox[2] === player) ||
    (outerBox[3] === player && outerBox[4] === player && outerBox[5] === player) ||
    (outerBox[6] === player && outerBox[7] === player && outerBox[8] === player) ||
    (outerBox[0] === player && outerBox[3] === player && outerBox[6] === player) ||
    (outerBox[1] === player && outerBox[4] === player && outerBox[7] === player) ||
    (outerBox[2] === player && outerBox[5] === player && outerBox[8] === player) ||
    (outerBox[0] === player && outerBox[4] === player && outerBox[8] === player) ||
    (outerBox[2] === player && outerBox[4] === player && outerBox[6] === player)
  )
}

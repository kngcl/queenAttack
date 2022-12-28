const select = document.querySelectorAll(".row");
const alert = document.querySelector(".displayall");
const alerts = document.querySelector(".display");
const attack = document.getElementById("check");
attack.addEventListener("click", checkAttack);
let noSelected = 0;
let selectedCell = [];

function selectPosition() {
  let id = this.getAttribute("id");

  let selectedIndex = selectedCell.indexOf(id);

  if (selectedIndex >= 0) {
    this.style.border = "none";
    noSelected--;
    return;
  } else if (noSelected < 2) {
    this.style.border = "3px solid #adff2f";
    selectedCell.push(id);
    noSelected++;
  } else {
    alerts.textContent = " You can only make two moves!";
    alert.textContent = "";
  }
  return;
}

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener("click", selectPosition, false);
}

function attackFunction() {
  if (selectedCell.length !== 2) {
    alerts.textContent = "You will have to make two moves!";
    alert.textContent = "";
  } else {
    let position1 = selectedCell[0];
    let position2 = selectedCell[1];

    let cell11 = position1.split("", position1)[0];
    let cell12 = position1.split("", position1)[1];

    let cell21 = position2.split("", position2)[0];
    let cell22 = position2.split("", position2)[1];

    //horizontal check
    if (cell11 === cell21) {
      return true;
    }

    //vertical check
    if (cell12 === cell22) {
      return true;
    }

    //diagonal left to right
    if (cell11 - cell12 === cell21 - cell22) {
      return true;
    }

    let positionRightLeft = Math.abs(parseInt(position1) - parseInt(position2));

    let moduleRightLeft = positionRightLeft % 9 === 0 ? true : false;

    if (moduleRightLeft) {
      return true;
    }
    alerts.textContent = "A Queen cannot be attacked!";
    alert.textContent = "";
  }
}

function checkAttack() {
  let attack = attackFunction();
  if (attack) {
    alert.textContent = "A Queen has been attacked!!!";
    alerts.textContent = "";
  }
  alerts.style.display = "block";
  return;
}

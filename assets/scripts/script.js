const select = document.querySelectorAll('.row')
const alert = document.querySelector('.displayall')
const alerts = document.querySelector('.display')
const attack = document.getElementById('check')
attack.addEventListener('click', checkAttack)
let noSelected = 0
const selectedCell = []

function selectPosition () {
  const id = this.getAttribute('id')

  const selectedIndex = selectedCell.indexOf(id)

  if (selectedIndex >= 0) {
    this.style.border = 'none'
    noSelected--
  } else if (noSelected < 2) {
    this.style.border = '3px solid #adff2f'
    selectedCell.push(id)
    noSelected++
  } else {
    alerts.textContent = ' You can only make two moves!'
    alert.textContent = ''
  }
}

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener('click', selectPosition, false)
}

function attackFunction () {
  if (selectedCell.length !== 2) {
    alerts.textContent = 'You will have to make two moves!'
    alert.textContent = ''
  } else {
    const position1 = selectedCell[0]
    const position2 = selectedCell[1]

    const cell11 = position1.split('', position1)[0]
    const cell12 = position1.split('', position1)[1]

    const cell21 = position2.split('', position2)[0]
    const cell22 = position2.split('', position2)[1]

    // horizontal check
    if (cell11 === cell21) {
      return true
    }

    // vertical check
    if (cell12 === cell22) {
      return true
    }

    // diagonal left to right
    if (cell11 - cell12 === cell21 - cell22) {
      return true
    }

    const positionRightLeft = Math.abs(parseInt(position1) - parseInt(position2))

    const moduleRightLeft = positionRightLeft % 9 === 0

    if (moduleRightLeft) {
      return true
    }
    alerts.textContent = 'A Queen cannot be attacked!'
    alert.textContent = ''
  }
}

function checkAttack () {
  const attack = attackFunction()
  if (attack) {
    alert.textContent = 'A Queen has been attacked!!!'
    alerts.textContent = ''
  }
  alerts.style.display = 'block'
}

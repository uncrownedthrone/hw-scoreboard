// shorthand for document.querySelector
const qs = (element) => document.querySelector(element)
let teamOneScore = 0
let teamTwoScore = 0

const teamOneScoreText = qs('.team-1-score')
teamOneScoreText.textContent = teamOneScore

const teamTwoScoreText = qs('.team-2-score')
teamTwoScoreText.textContent = teamTwoScore

// creating a function to add 1 and return a new score
const teamOneAddOne = () => {
  teamOneScore += 1
  teamOneScoreText.textContent = teamOneScore
  if (teamOneScore === 21) {
    qs('.team-1-score').textContent = 'Winner!'
    qs('button.team-1-add-1-button').disabled = true
    qs('button.team-1-subtract-1-button').disabled = true
    qs('button.team-2-add-1-button').disabled = true
    qs('button.team-2-subtract-1-button').disabled = true
  }
  if (teamOneScore === 21) {
    qs('.team-1-score').textContent = 'You win!'
    console.log('player 1 wins')
  }
}

const teamTwoAddOne = () => {
  teamTwoScore += 1
  teamTwoScoreText.textContent = teamTwoScore
  if (teamTwoScore === 21) {
    qs('.team-2-score').textContent = 'Winner!'
    qs('button.team-1-add-1-button').disabled = true
    qs('button.team-1-subtract-1-button').disabled = true
    qs('button.team-2-add-1-button').disabled = true
    qs('button.team-2-subtract-1-button').disabled = true
  }
  if (teamOneScore === 21) {
    qs('.team-2-score').textContent = 'You win!'
    console.log('player 2 wins')
  }
}

// creating a function to subtract 1 and return new score
const teamOneSubtractOne = () => {
  teamOneScore -= 1
  teamOneScoreText.textContent = teamOneScore
  if (teamOneScore < 0) {
    qs('.team-1-score').textContent = 'No Negative Points'
    console.log('player 1 below 0')
  }
}

const teamTwoSubtractOne = () => {
  teamTwoScore -= 1
  teamTwoScoreText.textContent = teamTwoScore
  if (teamTwoScore < 0) {
    qs('.team-2-score').textContent = 'No Negative Points'
    console.log('player 2 below 0')
  }
}

// name of team 1 will update when update button is pressed
const updateTeamOneName = () => {
  const teamOneName = qs('input.team-1-input').value
  qs('.team-1-name').textContent = teamOneName
  qs('input.team-1-input').value = ''
}

// when someone reaches 21, display winning message

// name of team 2 will update when update button is pressed
const updateTeamTwoName = () => {
  const teamTwoName = qs('input.team-2-input').value
  qs('.team-2-name').textContent = teamTwoName
  qs('input.team-2-input').value = ''
}

// // add reset button to reset to 0 and enable buttons
const resetGame = () => {
  const theResetMode = 0
  teamOneScore = 0
  teamTwoScore = 0
  qs('button.team-1-add-1-button').disabled = false
  qs('button.team-2-add-1-button').disabled = false
  qs('button.team-1-subtract-1-button').disabled = false
  qs('button.team-2-subtract-1-button').disabled = false
  document.querySelector('.team-2-score').textContent = theResetMode
  document.querySelector('.team-1-score').textContent = theResetMode
}

qs('button.team-1-add-1-button').addEventListener('click', teamOneAddOne)
qs('button.team-1-subtract-1-button').addEventListener(
  'click',
  teamOneSubtractOne
)
qs('button.team-2-add-1-button').addEventListener('click', teamTwoAddOne)
qs('button.team-2-subtract-1-button').addEventListener(
  'click',
  teamTwoSubtractOne
)
qs('button.update-team-1-name').addEventListener('click', updateTeamOneName)
qs('button.update-team-2-name').addEventListener('click', updateTeamTwoName)
resetGame()
qs('button.reset-button').addEventListener('click', resetGame)
document.addEventListener('DOMContentLoaded', main)

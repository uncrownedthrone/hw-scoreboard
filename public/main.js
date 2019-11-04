// shorthand for document.querySelector
const qs = (element) => document.querySelector(element)
let teamOneScore = 0
let teamTwoScore = 0

const teamOneScoreText = document.querySelector('.team-1-score')
teamOneScoreText.textContent = teamOneScore

const teamTwoScoreText = document.querySelector('.team-2-score')
teamTwoScoreText.textContent = teamTwoScore

// creating a function to add 1 and return a new score
const teamOneAddOne = () => {
  teamOneScore += 1
  teamOneScoreText.textContent = teamOneScore
}

const teamTwoAddOne = () => {
  teamTwoScore += 1
  teamTwoScoreText.textContent = teamTwoScore
}

// creating a function to subtract 1 and return new score
const teamOneSubtractOne = () => {
  teamOneScore -= 1
  teamOneScoreText.textContent = teamOneScore
}

const teamTwoSubtractOne = () => {
  teamTwoScore -= 1
  teamTwoScoreText.textContent = teamTwoScore
}

// name of team 1 will update when update button is pressed
const updateTeamOneName = () => {
  const teamOneName = document.querySelector('input.team-1-input').value
  document.querySelector('.team-1-name').textContent = teamOneName
  document.querySelector('input.team-1-input').value = ''
}

// name of team 2 will update when update button is pressed
const updateTeamTwoName = () => {
  const teamTwoName = document.querySelector('input.team-2-input').value
  document.querySelector('.team-2-name').textContent = teamTwoName
  document.querySelector('input.team-2-input').value = ''
}

const main = () => {
  console.log(qs('.team-2-input'))
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
}

document.addEventListener('DOMContentLoaded', main)


var ProblemProvider = {}

var activeProblemNumber = 0
var activeProblem = { question:{ repeat:"first" }, answer:"first" }

ProblemProvider.currentProblem = function() {
  return activeProblem
}

ProblemProvider.markProblemSolved = function() {
  activeProblemNumber = activeProblemNumber + 1
  activeProblem = { question:{ repeat:"first" + activeProblemNumber }, answer:"first" + activeProblemNumber }
}

module.exports = ProblemProvider
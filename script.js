//Pseudo Code

//Harry to pick from 5 destinations:
//Hogsmeade, Hagrid's Hut, Quidditch Field, Forbidden Forest, Honey Dukes,
//Castle Grounds. Three Broomsticks are all possible locations
//CG -> 1 -> CG/Quest Incomplete
//CG -> 2 -> Chamber of Secrets/Quest Incomplete
//FF -> 1 -> FF/Quest Incomplete
//FF -> 2 -> HH/Quest Incomplete
//QF -> 1 -> QF/Lake
//QF -> 2 -> QF/FF
//HH -> 1 -> HH/Quest Incomplete
//HH -> 2 -> HH/Quest Incomplete
//HGM -> Three Broomsticks/ Honey Dukes/The Hog's Head Pub

const selectDest = (choice) => {
  switch (choice) {
    case 'HGM':
      alert(`Nice choice! You will journey to Hogsmeade, today.`)
      return 6
    case 'HH':
      alert(`Nice choice! You will journey to Hagrid's Hut, today.`)
      return 5
    case 'QF':
      alert(`Nice choice! You will journey to the Quidditch Field, today.`)
      return 4
    case 'FF':
      alert(`Nice choice! You will journey to the Forbidden Forest, today.`)
      return 3
    case 'CG':
      alert(`Nice choice! You will journey to the Castle Grounds, today.`)
      return 2
    default:
      alert(`Please input a valid response!`)
      return 1
  }
}

const selectDestPrompt = () => {
  while (1) {
    let valueOfPrompt = prompt(`Where will you choose to go, Harry?`)
    let numChoice = selectDest(valueOfPrompt)
    if (numChoice == 1) {
    } else {
      return numChoice
    }
  }
}

const firstQuestion = (numChoice) => {
  if (numChoice === 2) {
    let answer = prompt(
      `I should really meet up with Ron & Hermione at the school grounds. Should I go now (1), or wait to go in 15 minutes (2)?`
    )
    return answer
  } else if (numChoice === 3) {
    let answer = prompt(
      `I should go see the Centaur in the Forbidden Forest to see if he's heard anything about Lord Voldemort.  Should I bring my invisibility cloak - yes (1) or no (2)?`
    )
    return answer
  } else if (numChoice === 4) {
    let answer = prompt(
      `I should really head to quidditch practice at the field to be on time. Should I take the unfamiliar short cut by the lake (1) or follow the well-known path from the castle grounds (2)?`
    )
    return answer
  } else if (numChoice === 5) {
    let answer = prompt(
      `Haven't seen Hagrid in ages! Time for a visit. Bring him some butter beer (1) or bring nothing (2)?`
    )
    return answer
  } else if (numChoice === 6) {
    let answer = prompt(
      `Do I feel like grabbing a butter beer at Three Broomsticks (1), buying some candy from Honey Dukes(2), or meeting up with friends at The Hog's Head Pub(3) in Hogsmeade?`
    )
    return answer
  }
}

const secondQuestion = (numChoice) => {
  if (numChoice === 1 && value2 === 5) {
    let answer = prompt(
      `Should I stay here at Hagrid's hut or continue to Hogsmeade? Yes (1), No (2)`
    )
    if (parseInt(answer) == 1) {
      alert(`Let's go visit Hagrid!`)
    } else {
      alert(`I see Hogsmeade up ahead! Can't wait to grab a butter beer!`)
    }
  } else if (numChoice === 2) {
    let answer = prompt(
      `Dobby suddenly appeared and wants to apparate to Honey Dukes for candy. Join him? Yes (1), No (2)`
    )
    if (parseInt(answer) == 1 || 2) {
      alert(`Dobby would be upset if I don't go, let's head to Honey Dukes!`)
    }
  } else if (numChoice == 3) {
    let answer = prompt(
      `Should I just meet up with Ron & Hermione at the three broomsticks? Yes (1), No (2)`
    )
    if (parseInt(answer) === 1 || 2) {
      alert(`Let's call it a day and head to the Three Broomsticks!`)
    }
  }
}

const replayPrompt = () => {
  alert(`Replay Again?`)
  let valueOfPrompt = prompt(`Press '1' to play again or '0' to quit.`)
  valueOfPrompt = parseInt(valueOfPrompt)
  return valueOfPrompt
}

const startGame = () => {
  while (replay === 1) {
    alert(
      `Where will you choose to go, Harry? HGM - for Hogsmeade, HH - for Hagrid's Hut, QF - for Quidditch Field, FF - for Forbidden Forest, CG - for Castle Grounds`
    )
    //Select first
    let value = parseInt(selectDestPrompt())
    let value2 = firstQuestion(value)
    value2 = parseInt(value2)
    alert(`Your choice is ${value2}`)
    secondQuestion(value2)
    //value3 = parseInt(value3)
    //alert(`You choice is ${value3}`)
    //Replay Game update token
    replay = replayPrompt()
  }
}

let replay = 1
startGame()

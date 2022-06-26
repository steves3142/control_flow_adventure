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

//object containing user choices
let user = {
  destChoice: 0,
  firstChoice: 0,
  secondChoice: 0
}
//this function displays desination to the player
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
//this function loops continuously if invalid statement is in input of initial prompt
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
//this function asks the questions for question 1 and records user's response
const firstQuestion = (value1) => {
  if (value1 === 2) {
    let answer = prompt(
      `I should really meet up with Ron & Hermione at the school grounds. Should I go now (1), or wait to go in 15 minutes (2)?`
    )
    return answer
  } else if (value1 === 3) {
    let answer = prompt(
      `I should go see the Centaur in the Forbidden Forest to see if he's heard anything about Lord Voldemort.  Should I bring my invisibility cloak - yes (1) or no (2)?`
    )
    return answer
  } else if (value1 === 4) {
    let answer = prompt(
      `I should really head to quidditch practice at the field to be on time. Should I take the unfamiliar short cut by the lake (1) or follow the well-known path from the castle grounds (2)?`
    )
    return answer
  } else if (value1 === 5) {
    let answer = prompt(
      `Haven't seen Hagrid in ages! Time for a visit. Bring him some butter beer (1) or bring nothing (2)?`
    )
    return answer
  } else if (value1 === 6) {
    let answer = prompt(
      `Do I feel like grabbing a butter beer at Three Broomsticks (1), buying some candy from Honey Dukes(2), or meeting up with friends at The Hog's Head Pub(3) in Hogsmeade?`
    )
    return answer
  }
}
//this function asks the questions for question 2 and records user's response
const secondQuestion = () => {
  if (user.destChoice == 2 && user.firstChoice == 1) {
    let answer = prompt(
      `'I think I'll decide to go now--wouldn't want to keep them waiting for too long.' As you walk out of the common room and onto the stairwell you feel the steps start` +
        ` moving! You see another stairwell moving towards that looks like it leads onto a landing. Do you hop on (1) or stay put until the stairs re align so you go back (2)? `
    )
    return answer
  } else if (user.destChoice == 2 && user.firstChoice == 2) {
    let answer = prompt(
      `'I think I'll decide to go in a bit--they can wait a few extra minutes.' As you walk out of the common room and onto the stairwell you feel the steps start` +
        ` moving! You see another stairwell moving towards that looks like it leads onto a landing. Do you hop on (1) or stay put until the stairs re align so you go back (2)?`
    )
    return answer
  } else if (user.destChoice == 3 && user.firstChoice == 1) {
    let answer = prompt(
      `'I think I'll bring my invisibility cloak to avoid getting caught by Snape'. As you walk past the grounds you spot Hagrid's Hut. Should you stop in and say hi?` +
        `Yes (1) or No (2)`
    )
    return answer
  } else if (user.destChoice == 3 && user.firstChoice == 2) {
    let answer = prompt(
      `'I think I'll take my chances with Snape'--what's another detention going to do? As you walk towards the grounds you hear Filch's rustling keys. Suddenly you see` +
        `Filch's cat. Should you run? Yes (1) or No (2)`
    )
    return answer
  } else if (user.destChoice == 4 && user.firstChoice == 1) {
    let answer = prompt(
      `'I think I'll take the shortcut! Seems like a nice day for a lengthier walk'. As you make your way past the lake, you see Luna Lovegood skipping stones on the` +
        `lake. Should you stop and say hi? Yes (1) or No (2)`
    )
    return answer
  } else if (user.destChoice == 4 && user.firstChoice == 2) {
    let answer = prompt(
      `'I think I'll stick with the usual route. It's always to get there early'. As you make your way, you bump into Buckbeak who seems to be far from Hagrid. Do you` +
        `walk him back to Hagrid's? Yes (1) or No (2)`
    )
    return answer
  } else if (user.destChoice == 5 && user.firstChoice == 1) {
    let answer =
      prompt(`'I think I'll bring Hagrid some butter beer!' As you make your way to Hagrid's you Bump into Dobby and asks him to track down his sock. Do you help him?
    Yes (1) or No (2)`)
    return answer
  } else if (user.destChoice == 5 && user.firstChoice == 2) {
    let answer = prompt(
      `'I think Hagrid should have some wine from the last time I visited.' As you make your way to Hagrid's you Bump into Dobby and asks him to track down his sock.` +
        ` Do you help him? Yes (1) or No (2)`
    )
    return answer
  } else {
  }
}

const secondQuestionReply = () => {
  //This function takes user's responses for questions 1 & 2 selects and provides a reply for question 2
  switch (true) {
    case user.destChoice == 2 &&
      user.firstChoice == 1 &&
      (user.secondChoice == 1 || 2):
      return alert(
        `'I'm gonna hop off here!' As you make your way onto the landing you find your way safely to the Castle Grounds.`
      )
    case user.destChoice == 2 &&
      user.firstChoice == 2 &&
      (user.secondChoice == 1 || 2):
      return alert(
        `'I'm gonna wait till the stair realign so I can go back.' After what feels like ages, the stairs line up and you find yoursle in an abandoned girl's bathroom. 'Wait,` +
          ` is that the entrance to the Chamber of Secrets? And it's open? I should investigate!`
      )
    case user.destChoice == 3 &&
      user.firstChoice == 1 &&
      (user.secondChoice == 1 || 2):
      return alert(
        `'I need to stop and say hi to Hagrid.' You lose track of time recapping about the past few weeks with Hagrid and forget all about the centaur.`
      )
    case user.destChoice == 3 &&
      user.firstChoice == 2 &&
      (user.secondChoice == 1 || 2):
      return alert(
        `It looks like Filch has cornered you with his cat. Detention for you!`
      )
    case user.destChoice == 4 &&
      user.firstChoice == 1 &&
      (user.secondChoice == 1 || 2):
      return alert(
        `It looks like Luna has seen you already and approaches you. Beautiful day for the lake anyway!`
      )
    case user.destChoice == 4 &&
      user.firstChoice == 2 &&
      (user.secondChoice == 1 || 2):
      return alert(
        `You manage to find Hagrid and give him back Buckbeak with just enough time to spare to get to the Quidditch field.`
      )
    case user.destChoice == 5 &&
      (user.firstChoice == 1 || 2) &&
      (user.secondChoice == 1 || 2):
      return alert(
        `Dobby insists and you go off on a search around the castle to track down his most prized sock you gave him.`
      )
    default:
      return
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
    user.destChoice = parseInt(selectDestPrompt())
    user.firstChoice = firstQuestion(user.destChoice)
    user.firstChoice = parseInt(user.firstChoice)

    if (user.destChoice == 6) {
      if (user.firstChoice == 1 || 2) {
        alert(`You've arrived to the Three Broomsticks! Free butter beer hour!`)
      } else if (user.firstChoice == 6 && user.secondChoice == 2) {
        alert(`You've arrived to Honey Dukes! Where are those chocolate frogs?`)
      } else if (user.firstChoice == 6 && user.secondChoice == 3) {
        alert(`You've arrived to the Hog's Head Pub--time to join the gang!`)
      }
    }
    alert(`Your desination is ${user.destChoice}`)
    user.secondChoice = secondQuestion()
    user.secondChoice = parseInt(user.secondChoice)
    alert(`Your 2nd choice is ${user.secondChoice}`)
    secondQuestionReply()
    //let reply = 'WORKING!'
    //alert(reply)

    //Replay Game update token
    replay = replayPrompt()
    if (replay == 1) {
      user.destChoice = 0
      user.firstChoice = 0
      user.secondChoice = 0
    } else {
    }
  }
}

let replay = 1
startGame()

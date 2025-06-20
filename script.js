// JavaScript goes here.
// variables to decide which is the result
let rushDown = 0
let setUp = 0
let heavy = 0
let winCondition = 0
let answerFirst = document.querySelector(".first-answer")

//text used at the end screen
selectedOption = document.querySelector("#option-selected")
reason = document.querySelector("#reason")
factor = 0
const results = ["rushDown", "setUp", "heavy", "winCondition"]
place = 0
oneImg = document.querySelector(".imgOne")
twoImg = document.querySelector(".imgTwo")
questions = document.querySelector(".questions")

//move between the screens
//buttons to move
moveSecond = document.querySelector("#second-screen")
moveThird = document.querySelector("#third-screen")
moveLast = document.querySelector("#fourth-screen")
sumbittion = document.querySelector("#sumbittion")

//screens div
displayOneQuestion = document.querySelector(".question-display-one")
displayTwoQuestion = document.querySelector(".question-display-two")
displayThreeQuestion = document.querySelector(".question-display-three")
displayResult = document.querySelector(".result")

//buttons for the other questions screen
quick = document.querySelector(".quick")
extend = document.querySelector(".extend")
positive = document.querySelector(".positive")
negative = document.querySelector(".negative")

//first movement of screens
sumbittion.addEventListener("click", function() {
    let deny = document.querySelector(".deny")
    check = answerFirst.value

    if(check === "Wait for a mistake"){
        heavy++
        winCondition++
        moveSecond.style.display = "block"
        deny.innerHTML = ""
        sumbittion.style.display = "none"
    } else if (check === "Apply pressure") {
        rushDown++
        setUp++
        moveSecond.style.display = "block"
        deny.innerHTML = ""
        sumbittion.style.display = "none"
    } else {
        deny.innerHTML = "Please select one of the provided answer"
    }
})

moveSecond.addEventListener("click", function() {
    displayOneQuestion.style.display = "none"
    displayTwoQuestion.style.display = "block"
})

//second movement of screen

quick.addEventListener("click", function() {
    rushDown++
    heavy++
    moveThird.style.display = "block"
    quick.style.display = "none"
    extend.style.display = "none"
})

extend.addEventListener("click", function() {
    winCondition++
    setUp++
    moveThird.style.display = "block"
    quick.style.display = "none"
    extend.style.display = "none"
})

moveThird.addEventListener("click", function() {
    displayTwoQuestion.style.display = "none"
    displayThreeQuestion.style.display = "block"
})

//third movement of screen

positive.addEventListener("click", function() {
    rushDown++
    winCondition++
    positive.style.display = "none"
    negative.style.display = "none"
    moveLast.style.display = "block"
})

negative.addEventListener("click", function() {
    heavy++
    setUp++
    positive.style.display = "none"
    negative.style.display = "none"
    moveLast.style.display = "block"
})

moveLast.addEventListener("click", function() {
    displayThreeQuestion.style.display = "none"
    displayResult.style.display = "block"
    questions.style.display = "none"
    console.log(rushDown)
    console.log(setUp)
    console.log(heavy)
    console.log(winCondition)
    //helps decide which group won
    const score = [rushDown, setUp, heavy, winCondition]
    for (let y=0; y<score.length; y++){
        if (score[place] < score[y]){
            place = y
            console.log(y)
        }}
        console.log(place)
    
        //gets the highest number of the questions
    if (results[0] === results [place]){
        //rushdown
        selectedOption.innerHTML = "You should play a rushdown character"
        reason.innerHTML = "rush down character focuses on pressuring the enemy with their combo potentials so that they are able to win the game in a fast pace playstyle. This gameplay style requieres people to spend some time practicing the character. Some characters like: Kazuya, Zero Suit Samus, Pikachu, etc."
        oneImg.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJ4dzVtdXU3bzlyZ2E3cjc2YWtwbXAweWcxZ3YwOG14cGZsdDE0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T9JZXEqRPLMadn21ZF/giphy.gif"
        twoImg.src = "https://ssb.wiki.gallery/images/d/d7/Kirby_Up_B_SSBU.gif"    
    } else if (results[1] === results[place]){
        //setUp
        selectedOption.innerHTML = "You should play a set up character"
        reason.innerHTML = "Set up characters focuses on keeping the stage under their control, with them putting traps on the field for the opponent to fall on it. Characters: like Snake, Simon/Richter, Link, etc. Fit this game style"
        oneImg.src = "https://ssb.wiki.gallery/images/7/7c/Snake_Down_B_SSBU.gif"
        twoImg.src = "https://ssb.wiki.gallery/images/thumb/9/98/Link_Down_B_SSBU.gif/450px-Link_Down_B_SSBU.gif"
    } else if (results[2] === results[place]){
        //heavy
        selectedOption.innerHTML = "You should play a heavy character"
        reason.innerHTML = "Heavy characters focuses on their raw damage potential without relying on learning the combos needed to dominate the game. Characters like: Ganondork, King DeDeDe, Ridley, etc. Are all examples of heavy characters"
        oneImg.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDJzanpzMG01bThsMTBvdGN5ZHAzY24xbjVtMDNhaW80YW1xMXBhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Pvf8szcWOxdwp7a4g/giphy.gif"
        twoImg.src = "https://ssb.wiki.gallery/images/9/94/Ganondorf_Neutral_B_SSBU.gif"
    } else{
        //winCondition
        selectedOption.innerHTML = "You should play a win condition character"
        reason.innerHTML = "Win condition characters rely on their strategy to prolong the game as much as they need to have their win condition activated. Characters like: Wario, Joker, Little Mac, etc. Take notice that these characters are good without the condition activated but once it is activated their kill potential increases by a lot."
        oneImg.src = "https://ssb.wiki.gallery/images/f/f3/Wario_Down_B_SSBU.gif"
        twoImg.src = "https://ssb.wiki.gallery/images/d/d0/SSBUJokerTaunt4.gif"
    }
})
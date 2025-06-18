// JavaScript goes here.
// variables to decide which is the result
let rushDown = 0
let setUp = 0
let heavy = 0
let winCondition = 0
let answerFirst = document.querySelector(".first-answer")


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
    console.log(rushDown)
    console.log(setUp)
    console.log(heavy)
    console.log(winCondition)
})
const question1title = document.querySelector("#question-1-title")
const question2title = document.querySelector("#question-2-title")
const question3title = document.querySelector("#question-3-title")
const question4title = document.querySelector("#question-4-title")

const question1answer = document.querySelector("#question-1-answer")
const question2answer = document.querySelector("#question-2-answer")
const question3answer = document.querySelector("#question-3-answer")
const question4answer = document.querySelector("#question-4-answer")

let isQuestion1Open = true
let isQuestion2Open = true
let isQuestion3Open = true
let isQuestion4Open = true

question1title.addEventListener("click", () => {
   isQuestion1Open ? question1answer.style.display = "none" : question1answer.style.display = "block"
   isQuestion1Open = !isQuestion1Open
})

question2title.addEventListener("click", () => {
    isQuestion2Open ? question2answer.style.display = "none" : question2answer.style.display = "block"
    isQuestion2Open = !isQuestion2Open
 })


 question3title.addEventListener("click", () => {
    isQuestion3Open ? question3answer.style.display = "none" : question3answer.style.display = "block"
    isQuestion3Open = !isQuestion3Open
 })

 question4title.addEventListener("click", () => {
    isQuestion4Open ? question4answer.style.display = "none" : question4answer.style.display = "block"
    isQuestion4Open = !isQuestion4Open
 }) 
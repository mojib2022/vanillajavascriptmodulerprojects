document.title = "Quiz App"
//Quiz Array
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:"d",
    },
    {
        question: "What does CSS stands for?",
        a:"Central style sheets",
        b:"Cascading style sheets",
        c:"Cascading simple Sheets",
        d:"Car SUVS Sailboats",
        correct:"b",
    },
    {
        question: "What does HTML stands for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Helicopter Terminals Motorboats Lamborginis",
        correct:"a",
    },
    {
        question: "What year was javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"None of the above",
        correct:"b",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a:"<js>",
        b:"<javascript>",
        c:"<script>",
        d:"<scripting>",
        correct:"c",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a:"The <head> Section",
        b:"The <body> Section",
        c:"Both of the above are correct answers",
        d:"None of the Above are correct Answers",
        correct:"c",
    },
    {
        question: "The External Javascript file must contain the <Script> tag.?",
        a:"True",
        b:"False",
        c:"Both of the above are correct answers",
        d:"None of the Above are correct Answers",
        correct:"b",
    },
    {
        question: "How do you write hello World in an Alert Box?",
        a:"msgBox('Hello World')",
        b:"alertBox('Hello World')",
        c:"alert('Hello World')",
        d:"msg('Hello World')",
        correct:"c",
    },
    {
        question: "How do you create a function in JavaScript?",
        a:"function:myFunction()",
        b:"function myFunction()",
        c:"function=myFunction()",
        d:"myFunction",
        correct:"b",
    },
    {
        question: "How do you call a function named 'myFunction'?",
        a:"myFunction()",
        b:"call function myFunction()",
        c:"function=myFunction()",
        d:"call myFunction",
        correct:"a",
    },
]

//End of Quiz Array

//Declaring and assigning variable 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let currentQuiz = 0
let score = 0
//End of Declaring variable 

//Load Quiz
loadQuiz()
function loadQuiz(){
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText  =  currentQuizData.a
    b_text.innerText  =  currentQuizData.b
    c_text.innerText  =  currentQuizData.c
    d_text.innerText  =  currentQuizData.d
}
//End of Load Quiz

//Deselect the Quiz
function deselectAnswer(){
    answerEls.forEach(answerEl=>answerEl.checked = false)
}
//End of Deselect the Quiz

// Get the Selected Answer
function getSelected(){
    let answer

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
//End of the Selected Quiz


//Submit the Answer
submit.addEventListener('click', ()=>{
    const answer = getSelected()
    if(answer ===quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++

    if(currentQuiz >= quizData.length){
        quiz.innerHTML = `
        <h2> You Answered  ${score}/${quizData.length}
        questions correctly.
        <button onclick="location.reload()">Reload</button>
        `
    }
    else{
        loadQuiz()
    }
})
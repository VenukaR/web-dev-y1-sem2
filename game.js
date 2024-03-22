const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressTest = document.querySelector('#progressTest');
const scoreTest = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availablequestions = []

let questions = [
    {
        question: "Who is the most Streamed rapper in year 2022?",
        choice1: "21 Savage",
        choice2: "Drake",
        choice3: "Kendrick Lamar",
        choice4: "Future",
        answer: 2,
    },
    {
        question: "Who has won the most Grammy Awards?",
        choice1: "Beyonce",
        choice2: "Kanye West",
        choice3: "Adele",
        choice4: "Taylor Swift",
        answer: 1,
    },
    {
        question: "What is the world's most listened song of all time?",
        choice1: "'Believer' by Imagine Dragons",
        choice2: "'Shape of You' by Ed sheeran",
        choice3: "'Dance Monkey' by Tones and I",
        choice4: "'Blinding Lights' by the Weeknd ",
        answer: 4,
    },
    {
        question:  "Who is the youngest artist to win Album of the Year in Grammy Awards?",
        choice1: "Taylor Swift",
        choice2: "Adele",
        choice3: "Billie Eilish",
        choice4: "Sam Smith",
        answer: 3,
    },
    {
        question: "What is Michael Jackson's most popular song?",
        choice1: "Smooth Criminal",
        choice2: "Billie Jean",
        choice3: "They Don't Care About Us",
        choice4: "Bad",
        answer: 2,
    },
    {
        question: "Who is the best music composer in the world?",
        choice1: "Wolfgang Amadeus Mozart",
        choice2: "Joseph Haydn",
        choice3: "Ludwig van Beethoven",
        choice4: "Claude Debussy",
        answer: 3,
    },
    {
        question: "who is the king of pop?",
        choice1: "Michael Jackson",
        choice2: "Weekend",
        choice3: "Elton Jhon",
        choice4: "Bruno Mars",
        answer: 1,
    },
    {
        question: "Who was not a member of the N.W.A? ",
        choice1: "Dr. Dre",
        choice2: "Ice Cube",
        choice3: "Snoop Dogg",
        choice4: "Eazy-E",
        answer: 3,
    },
    {
        question: "Which band sings the song Hotel California?",
        choice1: "AC/DC",
        choice2: "Eagles",
        choice3: "Nirvana",
        choice4: "Queen",
        answer: 2,
    },
    {
        question: "The movie 8 Mile is based on the life of which artist?",
        choice1: "Freddie Mercury",
        choice2: "Dr. Dre",
        choice3: "Elton John",
        choice4: "Eminem",
        answer: 4,
    }
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 11
let timeValue =  60;

startQuiz = () => {
    questionCounter = 0
    score = 0
    var widthValue=1
    availablequestions = [...questions]
    getNewQuestion()
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
}

getNewQuestion = () => {
    
    if (availablequestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore',score)
        // alert(getNewQuestion);

        return window.location.assign('end.html')
    }

    questionCounter ++
    progressTest.innerText = `Question ${questionCounter} of ${'10'}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}% `

    const questionsindex =Math.floor(Math.random() * availablequestions.length)
    currentQuestion = availablequestions[questionsindex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availablequestions.splice(questionsindex,1)

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        // alert(classToApply);

        if (classToApply == 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
 
        setTimeout(() => {
	
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
            
        },1000)
    })
})

incrementScore = num =>{
    score += num
    scoreTest.innerText = score
}
startTimer = time => {
    const countDown = setInterval(() => {
        time -= 1
        timeCount.textContent = time
        if (time <= 0 || questionCounter >= MAX_QUESTIONS) {
            clearInterval(countDown)
            localStorage.setItem('mostRecentScore',score)
            return window.location.assign('end.html')
        }
    }, 1000)
}

startTimerLine = time => {
    const countDown = setInterval(() => {
        time += 1
        time_line.style.width = time + "px"
        if (time > 549) { //549px is the width of the time_line div
            clearInterval(countDown)
            localStorage.setItem('mostRecentScore',score)
            return window.location.assign('end.html')
        }
    }, 1000)
}
function startTimer(time){
    
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
    
}

startQuiz()
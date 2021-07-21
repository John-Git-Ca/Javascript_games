const quizData = [
    {
        question: 'how old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: c
    },
    {
        question: 'what is the best programming language in 2021?',
        a:'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'who is the president of US',
        a: 'Forin',
        b: 'Donald Trump',
        c: 'Ivan',
        d: 'Obama',
        correct: 'b'
    },
    {
        question: 'what does HTML stand for?',
        a:'Hypertext Markup Language',
        b: 'Cacading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    },
    {
        question: 'what year was JavaScript launched?',
        a: '2020',
        b: '2021',
        c: '2022',
        d: '1994',
        correct:'d'
    }
]

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

var currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected(){
    const answersEls = document.querySelectorAll(".answer");
    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            return answerEl.id;
        }

        return undefined;
    })
}

submitBtn.addEventListener("click", () =>{
    currentQuiz++;
    const answer = getSelected();

    if(answer ){
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            //TODO: Show results
            alert("you finished");
        }
    }
})
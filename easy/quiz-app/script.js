import {quizData} from './data.js'
var q = quizData;
var currentQuestionIndex = 0;
var score = 0;

document.addEventListener("DOMContentLoaded", () => {
    renderQuestion();
});

document.getElementById("submitBtn").addEventListener("click", () => {
    const selectedOption = document.querySelector(`input[name="answer"]:checked`);
    
    if(!selectedOption){
        alert("Please select An option");
        return;
    };

    var theOption = selectedOption.value;

    if(theOption == q[currentQuestionIndex].correct){
        score = score + 1;
    }

    currentQuestionIndex++;

    if(currentQuestionIndex < q.length){
        renderQuestion();
    }else{
        submit();
    }
})

function renderQuestion() {
    const section = document.getElementById("questionSection");
    section.innerHTML = ""
    const newDivEl = document.createElement("div");
    const mainQuestionDiv = document.createElement("div");
    const answersDiv = document.createElement("div");
    mainQuestionDiv.textContent= q[currentQuestionIndex].question;
    answersDiv.innerHTML = 
    `   
                <label>
                    <input type="radio" name="answer" value="a"> ${q[currentQuestionIndex].a}
                </label><br>
                <label>
                    <input type="radio" name="answer" value="b"> ${q[currentQuestionIndex].b}
                </label><br>
                <label>
                    <input type="radio" name="answer" value="c"> ${q[currentQuestionIndex].c}
                </label><br>
                <label>
                    <input type="radio" name="answer" value="d"> ${q[currentQuestionIndex].d}
                </label><br>
    `
    newDivEl.appendChild(mainQuestionDiv);
    newDivEl.appendChild(answersDiv);
    document.getElementById("questionSection").appendChild(newDivEl);
};

function submit(){
    const section = document.getElementById("questionSection");
    section.innerHTML = ""
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<h4>You have ${score}/${q.length} answers right!</h4>`
    section.appendChild(newDiv);
}
const quiz = document.getElementById("quiz");

const getQuestionOptions = (index) => {
    const question = questions[index];
    let options = [];
    for (let i = 0; i < question.answers.length; i += 1) {
        options.push(document.getElementById(`answer-${index}-${i}`));
    }
    return options;
}

const getQuestionCorrectAnswer = (index) => {
    const question = questions[index];
    for (let i = 0; i < question.answers.length; i += 1) {
        if (question.answers[i].isCorrect) return i;   
    }
    throw new Error(`Question ${index} is invalid!`);
}

const checkAnswers = () => {
    let points = 0;
    const max = question.length;
    for (let q = 0; q < questions.length; q += 1) {
        const correctAnwser = getQuestionCorrectAnswer(q);
        const options = getQuestionOptions(q);
        let checked = undefined;
        for (let i = 0; i < options.length; i += 1) {
            if (options[i].checked) {
                checked = options[i];
                break;
            }
        }
        
        options[correctAnwser].labels[0].classList.add("success");
        
        if (!checked) continue;
        const correct = options[correctAnwser].checked;

        if (correct) {
            points += 1;
        } else {
            checked.labels[0].classList.add("failed");
        }
    }
    window.alert(Math.floor(points / max * 100) + "%");
}

const createHTMLQuestion = (question, index) => {
    const container = document.createElement("div");
    
    const title = document.createElement("h2");
    title.innerText = question.question;
    container.appendChild(title);

    question.answers.forEach((answer, answerIndex) => {
        const answerHTML = document.createElement("input");
        answerHTML.type = "radio";
        answerHTML.name = `q${index}`;
        const id = `answer-${index}-${answerIndex}`; 
        answerHTML.id = id;
        answerHTML.setAttribute("answer-index", answerIndex);

        const label = document.createElement("label");
        label.innerHTML = answer.text;
        label.setAttribute("for", id);

        container.appendChild(answerHTML);
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });
    
    return container;
}

questions.forEach((question, index) => {
    quiz.appendChild(createHTMLQuestion(question, index));    
});

questions.forEach((question, index) => {

});

document.getElementById("submit-quiz").addEventListener("click", () => {
    checkAnswers();
});
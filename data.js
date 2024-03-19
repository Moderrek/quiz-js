const answer = (text, isCorrect) => {
    return {
        text: text,
        isCorrect: isCorrect || isCorrect !== undefined,
    };
}

const question = (question, answers) => {
    return {
        question: question,
        answers: answers
    }
}

const newQuestion = (title, answers) => {
    questions.push(question(title, answers));
}

const questions = [
    question(
        "W Obiektowym Modelu Dokumentu obiektem stojącym najwyżej w hierarchii jest obiekt:",
        [
            answer("document"),
            answer("innerHTML"),
            answer("window", true),
        ]
    ),
    question(
        "Zdarzenie w skrypcie HTML umieszcza się:",
        [
            answer("jako atrybut o nazwie zdarzenia w znaczniku, którego zdarzenie dotyczy", true),
            answer("jako atrybut o nazwie zdarzenia w znaczniku &ltSCRIPT&gt"),
            answer("jako oddzielny znacznik o nazwie zdarzenia"),
        ]
    ),
    question(
        "Aby kilka kontrolek typu radio stanowiły jedną grupę należy każdej z nich",
        [
            answer("nadać atrybut ID o identycznej nazwie"),
            answer("nadać atrybut NAME o identycznej nazwie", true),
            answer("nadać atrybut VALUE o identycznej nazwie"),
        ],
    ),
    question(
        "ontrolka tekstowa, w której podczas wpisywania znaki są zastępowane kropkami jest typu:",
        [
            answer("hidden"),
            answer("password", true),
            answer("pwd"),
        ],
    ),
    question(
        "Kontrolka mająca kształt przesuwalnego suwaka jest typu:",
        [
            answer("range", true),
            answer("ruler"),
            answer("slider"),
        ],
    ),
    question(
        "Które polecenie spowoduje pobranie do zmiennej a zawartości z pola tekstowego login:",
        [
            answer("a = document.getElementById('login')"),
            answer("a = document.getElementById('login').id"),
            answer("a = document.getElementById('login').value", true),
        ],
    ),
    question(
        "Czy w nazwach zmiennych w języku JavaScript są rozróżniane wielkie i małe litery?",
        [
            answer("nie"),
            answer("tak", true),
            answer("zależnie od używanego systemu operacyjnego"),
        ],
    ),
    question(
        "Funkcję w języku JavaScript definiuje słowo kluczowe:",
        [
            answer("def"),
            answer("fun"),
            answer("function", true),
        ],
    ),
    question(
        "polecene write() jest przypisane do obiektu:",
        [
            answer("document", true),
            answer("window"),
            answer("nie jest przypisane do żadnego obiektu"),
        ],
    ),
    question(
        "polecene alert() jest przypisane do obiektu:",
        [
            answer("document"),
            answer("window", true),
            answer("nie jest przypisane do żadnego obiektu"),
        ],
    ),
    question(
        "Blok &ltSCRIPT&gt na stronie html może być umieszczony:",
        [
            answer("na początku strony"),
            answer("w części &ltHEAD&gt"),
            answer("w dowolnym miejscu na stronie", true),
        ],
    ),
    question(
        "Ternary operator zastępuje:",
        [
            answer("pętlę for"),
            answer("pętlę while"),
            answer("warunek if/else", true),
        ],
    ),
    question(
        "Ternary operator ma postać:",
        [
            answer("[test_logiczny] : [wyrażenie_1] : [wyrażenie_2]"),
            answer("[test_logiczny] : [wyrażenie_1] ? [wyrażenie_2]"),
            answer("[test_logiczny] ? [wyrażenie_1] : [wyrażenie_2]", true),
        ],
    ),
    question(
        "W poleceniu a = document.body.style.color, słowo color reprezentuje:",
        [
            answer("obiekt"),
            answer("właściwość", true),
            answer("zdarzenie"),
        ],
    ),
    question(
        "W poleceniu a = document.body.style.color, słowo style reprezentuje:",
        [
            answer("obiekt"),
            answer("właściwość", true),
            answer("zdarzenie"),
        ],
    ),
    question(
        "Który zapis jest poprawny?",
        [
            answer("document.body.style.background-color"),
            answer("document.body.style.backgroundcolor"),
            answer("document.body.style.backgroundColor", true),
        ],
    ),
]
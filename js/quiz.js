const questions = [
    {
        question: "Bagaimana cara kupu-kupu membedakan apa yang berupa makanan dan apa yang bukan?",
        optionA: "Dengan menggunakan Antena",
        optionB: "Dengan menggunakan Sayap",
        optionC: "Dengan menggunakan Palp Labial",
        optionD: "Dengan menggunakan Kaki",
        correctOption: "optionC"
    },
    {
        question: "Daerah mana yang bukan merupakan tempat tinggal kupu-kupu?",
        optionA: "Padang Pasir",
        optionB: "Kebun",
        optionC: "Taman",
        optionD: "Hutan",
        correctOption: "optionA"
    },
    {
        question: "Apa nama siklus perubahan bentuk kupu-kupu dalam alur hidupnya?",
        optionA: "Hibernasi",
        optionB: "Kamuflase",
        optionC: "Fragmentasi",
        optionD: "Metamorfosis",
        correctOption: "optionD"
    },
    {
        question: "Terdapat berapa fase dalem siklus perubahan bentuk dalam kehidupan kupu-kupu?",
        optionA: "2 Fase",
        optionB: "6 Fase",
        optionC: "4 Fase",
        optionD: "8 Fase",
        correctOption: "optionC"
    },
    {
        question: "Bagaimanakah urutan yang benar dalam sikuls perubaham bentuk kupu-kupu?",
        optionA: "Imago-Ulat-Telur-Kepompong",
        optionB: "Telur-Ulat-Kepompong-Imago",
        optionC: "Telur-Imago-Ulat-Kepompong",
        optionD: "Ulat-Telur-Kepompong-Imago",
        correctOption: "optionB"
    },
    {
        question: "Manakah yang bukan merupakan peran kupu-kupu dalam kehidupan?",
        optionA: "Pembasmi serangga kecil",
        optionB: "Penyerbuk bunga",
        optionC: "Indikator ekosistem sehat",
        optionD: "Menjaga keseimbangan ekosistem",
        correctOption: "optionA"
    },
    {
        question: "Berapa jumlah sayap yang dimiliki kupu-kupu?",
        optionA: "2 Sayap",
        optionB: "6 Sayap",
        optionC: "8 Sayap",
        optionD: "4 Sayap",
        correctOption: "optionD"
    },
    {
        question: "Kapankah kupu-kupu diperkirakan telah hidup pertama kalinya?",
        optionA: "140-150 juta tahun yang lalu",
        optionB: "40-50 juta tahun yang lalu",
        optionC: "10-20 juta tahun yang lalu",
        optionD: "1000-2000 juta tahun yang lalu",
        correctOption: "optionB"
    },
    {
        question: "Berikut ini manakah yang bukan merupakan cara kupu-kupu bertahan hidup?",
        optionA: "Kamuflase",
        optionB: "Berlindung di sarangnya",
        optionC: "Hibernasi",
        optionD: "Aposematic Coloration",
        correctOption: "optionB"
    },
    {
        question: "Berapakah jumlah bagian tubuh dari kupu-kupu?",
        optionA: "3 Bagian",
        optionB: "1 Bagian",
        optionC: "2 Bagian",
        optionD: "4 Bagian",
        correctOption: "optionA"
    },
    {
        question: "Apa saja nama bagian tubuh utama kupu-kupu?",
        optionA: "Kepala, Dada, Kaki",
        optionB: "Sayap, Dada, Thorax",
        optionC: "Kepala, Dada, Thorax",
        optionD: "Dada, Sayap, Kaki",
        correctOption: "optionC"
    },
    {
        question: "Berapa jumlah kaki yang dimiliki oleh kupu-kupu?",
        optionA: "6 Kaki",
        optionB: "4 Kaki",
        optionC: "2 Kaki",
        optionD: "8 Kaki",
        correctOption: "optionA"
    },
    {
        question: "Bagian apa yang diambil kupu-kupu dari bunga?",
        optionA: "Akar",
        optionB: "Nektar",
        optionC: "Kelopak Bunga",
        optionD: "Tangkai Daun",
        correctOption: "optionB"
    },
    {
        question: "Berapa perkiraan jumlah total spesies kupu-kupu di seluruh dunia?",
        optionA: "18.000 Spesies",
        optionB: "10.000 Spesies",
        optionC: "8.000 Spesies",
        optionD: "100.000 Spesies",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] 

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = `A. &nbsp  ${currentQuestion.optionA}`;
    document.getElementById("option-two-label").innerHTML = `B. &nbsp  ${currentQuestion.optionB}`;
    document.getElementById("option-three-label").innerHTML = `C. &nbsp  ${currentQuestion.optionC}`;
    document.getElementById("option-four-label").innerHTML = `D. &nbsp  ${currentQuestion.optionD}`;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
   
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#7ECD8D";
            document.getElementById(correctOption).style.borderRadius = "8px"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#CD7E7E";
            document.getElementById(correctOption).style.backgroundColor = "#7ECD8D";
            document.getElementById(correctOption).style.borderRadius = "8px"
            document.getElementById(wrongLabelId).style.borderRadius = "8px"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Novice"
        remark_note = "Mungkin ada beberapa hal yang terlewat, coba kembali lagi dan pastikan ya!"
        remarkColor = "#7ECD8D"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Enthusiast"
        remark_note = "Pengetahuanmu sudah cukup luas! Cek lagi di Virtual Exhibition ya!"
        remarkColor = "#7ECD8D"
    }
    else if (playerScore >= 7) {
        remark = "Expert"
        remark_note = "Semua informasi tentang kupu-kupu sudah kamu punyai!Bagikan pengetahuan barumu ke teman-temanmu ya!"
        remarkColor = "#7ECD8D"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('remarks-note').innerHTML = remark_note
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
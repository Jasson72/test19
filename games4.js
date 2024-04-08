const quizData = [
    {
        question: "Adi menjumpai orang yang menghalangi jalanya, harus bagaimanakah Adi?",
        a: "Menonjoknya",
        b: "Mengatakan permisi",
        c: "Cuek dan tabrak",
        d: "Menjegalnya",
        correct: "b",
    },
    {
        question: "Adi disapa oleh Ketua Osis, harus bagaimanakah Adi?",
        a: "Menjegalnya",
        b: "Cuek",
        c: "Membalas dengan ramah",
        d: "Memaki makinya",
        correct: "c",
    },
    {
        question: "Adi menemukan kartu pelajar terjatuh, harus bagaimanakah Adi?",
        a: "Simpan dan laporkan pada Bu Lilies",
        b: "Menjualnya di pasar gelap",
        c: "Memakainya untuk pinjaman online",
        d: "Buang ke tempat sampah",
        correct: "a",
    },
    {
        question: "Adi harus menelewati sekumpulan orang yang membuat video, harus bagaimanakah Adi?",
        a: "Melewati tanpa rasa bersalah",
        b: "Gabung dalam video dan melakukan hal aneh",
        c: "Memaki maki",
        d: "Menunggunya hingga selesai",
        correct: "d",
    },
    {
        question: "Adi mendengarkan gibahan dari sekumpulan orang, harus bagaimanakah Adi?",
        a: "Mengupingnya hingga ketahuan",
        b: "Cuek dan melewatinya",
        c: "Melempari mereka buku",
        d: "Gabung dan bereaksi aneh",
        correct: "b",
    },
    {
        question: "Adi bosen dikelas, harus bagaimanakah Adi?",
        a: "Berkomunikasi positif dengan temanya",
        b: "Menonjok temanya",
        c: "Melakukan hal senonoh",
        d: "Menyobek buku temanya",
        correct: "a",
    },
    {
        question: "Gebetan Adi baru saja upload foto di sosmed, harus bagaimanakah Adi?",
        a: "Mengatakan hal tidak senonoh",
        b: "Merespon dengan kebencian",
        c: "Merespon dengan positif",
        d: "Memajang fotonya di papan hijau",
        correct: "c",
    },
    {
        question: "Adi sedang mengantri wastafel, harus bagaimanakah Adi?",
        a: "Menyerobotnya",
        b: "Menunggu dengan sabar",
        c: "Memaki maki",
        d: "Mematikan aliran air",
        correct: "b",
    },
    {
        question: "Adi sedang bekerja kelompok, harus bagaimanakah Adi?",
        a: "Aktif dan kontributif",
        b: "Pasif dan bermain roblox",
        c: "Mengacaukanya",
        d: "Berantem dengan guru",
        correct: "a",
    },
    {
        question: "Teman Adi sedang curhat kepada Adi, hsrus bagaimanakah Adi?",
        a: "Mendengarkan dan merespon dengan positif",
        b: "Menghakiminya",
        c: "Menertawakanya",
        d: "Meninggalkanya",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.jawaban')
const quizEl= document.getElementById('pertanyaan')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('Selesai')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    quizEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer = null
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="window.location.reload()">Reload</button>
            `
        }
    }
})

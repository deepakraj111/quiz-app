
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Hemingway", "Tolkien", "Austen"],
    answer: "Shakespeare",
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Saturn", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
    {
    question: "What language has the most native speakers in the world?",
    options: ["English", "Hindi", "Nepali", "Mandarin Chinese"],
    answer: "Mandarin Chinese",
  },
    {
    question: "What is the smallest prime number?",
    options: ["1", "0", "4", "2"],
    answer: "2",
  },
     {
    question: "Who painted the Mona Lisa?",
    options: ["pablo picassio", "Leonardo da Vinci", "frida kahlo", "vinci"],
    answer: "Leonardo da Vinci",
  },
   {
    
      question:"What is the largest mammal in the world?",
    options: ["Shark", "Blue Whale", "Elephant", "Whale"],
    answer: "Blue Whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  resetState();
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;

  current.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(button, current.answer));
    optionsEl.appendChild(button);
  });
}

function resetState() {
  nextBtn.classList.add("hide");
  optionsEl.innerHTML = "";
}

function selectOption(selectedBtn, correctAnswer) {
  const isCorrect = selectedBtn.textContent === correctAnswer;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(optionsEl.children).forEach(button => {
    button.disabled = true;
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    }
  });

  nextBtn.classList.remove("hide");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.classList.add("hide");
  optionsEl.classList.add("hide");
  nextBtn.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreDisplay.textContent = `${score} / ${questions.length}`;
}


showQuestion();


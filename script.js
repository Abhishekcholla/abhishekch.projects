const quizData = [
    {
      question: "Which of the following is NOT a basic component of a robot?",
      options: ["End effector", "Controller", "Memory", "Sensor"],
      answer: "Memory"
    },
    {
      question: "Which of the following is NOT a basic part of a robot?",
      options: ["Controller", "Actuator", "Sensor", "Human operator "],
      answer: "Human operator "
    },
    {
      question: " What is a SCARA robot particularly well-suited for?",
      options: ["Complex assembly operations", "Welding", "Painting", "Heavy lifting "],
      answer: "Complex assembly operations"
    },
    {
      question: "What does the term 'TeleOperation' mean in robotics?",
      options: ["Controlling a robot from a distance", "Programming a robot's movements.", "Allowing a robot to operate autonomously.", " Building robots with human-like features"],
      answer: "Controlling a robot from a distance"
    },
    {
      question: "Which of the following is an example of a sensor used in robotics? ",
      options: ["A motor", "A camera", "A gripper", "An actuator"],
      answer: "A camera"
    },
    {
      question: "In which continent is the Sahara Desert located?",
      options: ["Asia", "Africa", "Australia", "Europe"],
      answer: "Africa"
    },
    {
      question: "What does the acronym 'AI' stand for in robotics?",
      options: ["Advanced Interface", "Artificial Intelligence", "Automated Input", "Analog Interface"],
      answer: "Artificial Intelligence"
    },
    {
      question: "Which language is primarily spoken in Brazil?",
      options: ["Spanish", "Portuguese", "English", "French"],
      answer: "Portuguese"
    },
    {
      question: "What is H2O commonly known as?",
      options: ["Salt", "Water", "Hydrogen", "Oxygen"],
      answer: "Water"
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
  
    current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = score;
  }
  
  nextBtn.addEventListener("click", () => {
    loadQuestion();
    nextBtn.classList.add("hidden");
  });
  
  window.onload = () => {
    loadQuestion();
  };
  
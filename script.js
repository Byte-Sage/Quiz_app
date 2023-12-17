const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Mercury", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the tallest mammal?",
      options: ["Giraffe", "Elephant", "Rhino", "Hippo"],
      answer: "Giraffe"
    },
    // Add more questions following the same format
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options");
    const currentQuizQuestion = questions[currentQuestion];
  
    questionText.textContent = currentQuizQuestion.question;
    optionsContainer.innerHTML = "";
  
    currentQuizQuestion.options.forEach(option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuizQuestion = questions[currentQuestion];
  
    if (selectedOption === currentQuizQuestion.answer) {
      score++; // Increase the score for each correct answer
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      displayScore();
    }
  }
  
  function displayScore() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h2>Your final score is: ${score} out of ${questions.length}</h2>`;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      displayScore();
    }
  }
  
  // Load the first question when the page loads
  window.onload = loadQuestion;
  
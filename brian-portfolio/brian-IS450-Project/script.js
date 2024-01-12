// Define an array of scenarios and questions
const scenarios = [
    "Two people are arguing about project management...",
    // Add more scenarios here
  ];
  
  const questions = [
    "What should be the approach to resolve their argument?",
    // Add more questions here
  ];
  
  let currentScenarioIndex = 0;
  let currentQuestionIndex = 0;
  
  // Function to display the next scenario and question
  function displayNext() {
    document.querySelector('.argument p').textContent = scenarios[currentScenarioIndex];
    document.querySelector('.question p').textContent = questions[currentQuestionIndex];
  
    // Increment scenario and question indices for the next iteration
    currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  }
  
  // Initial display on page load
  window.onload = displayNext;
  
  // Function to handle clicking "Next Question" button
  function nextQuestion() {
    displayNext();
  }
  
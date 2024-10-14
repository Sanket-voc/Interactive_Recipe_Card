document.getElementById('toggle-ingredients').addEventListener('click', function() {
    const ingredientsList = document.getElementById('ingredients-list');
    const ingredientsHeading = document.getElementById('ingredients-heading');
    ingredientsList.style.display = ingredientsList.style.display === 'block' ? 'none' : 'block';
    ingredientsHeading.style.display = ingredientsList.style.display === 'block' ? 'block' : 'none';
});

document.getElementById('toggle-steps').addEventListener('click', function() {
    const stepsList = document.getElementById('steps-list');
    const stepsHeading = document.getElementById('steps-heading');
    stepsList.style.display = stepsList.style.display === 'block' ? 'none' : 'block';
    stepsHeading.style.display = stepsList.style.display === 'block' ? 'block' : 'none';
});

let currentStep = 0;
const steps = document.querySelectorAll('.step');
const progressBar = document.getElementById('progress-bar');
const timerDisplay = document.getElementById('time');
let timerInterval;

document.getElementById('start-cooking').addEventListener('click', function() {
    currentStep = 0;
    progressBar.style.width = '0%'; // Reset progress bar
    showNextStep();
    document.querySelector('.progress-container').style.display = 'block'; // Show progress bar
    startTimer(3600); // Start 60 minutes timer
    document.getElementById('next-step').style.display = 'block'; // Show next step button
});

document.getElementById('next-step').addEventListener('click', function() {
    showNextStep();
});

function showNextStep() {
    if (currentStep < steps.length) {
        steps[currentStep].classList.add('highlight'); // Highlight current step
        const progressPercentage = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = progressPercentage + '%';
        currentStep++;
    } else {
        alert('Gulab Jamun Prepared ✨,Savor the sweetness🥣!!');
        progressBar.style.width = '100%'; // Complete progress
        clearInterval(timerInterval); // Stop timer when completed
        timerDisplay.textContent = "60:00"; // Reset timer display
        document.getElementById('next-step').style.display = 'none'; // Hide next step button
        
    }

}

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            alert('Time is up!'); // Alert when time is up
        }
    }, 1000);
}

document.getElementById('print-recipe').addEventListener('click', function() {
    window.print();
});

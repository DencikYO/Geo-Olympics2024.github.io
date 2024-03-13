let score = 0;

function submitGuess() {
    const guess = document.getElementById('cityGuess').value.trim().toLowerCase();

    // Object containing correct answers and corresponding image URLs
    const correctAnswers = {
        'rio de janeiro': 'city1.jpg',
        'tokyo': 'city2.jpg',
        'london': 'city3.jpg',
        'athens': 'city4.jpg',
        'paris': 'city5.jpg',
        'new york': 'city6.jpg',
        'los angeles': 'city7.jpg',
        'innsbruck': 'city8.jpg',
        'stockholm': 'city9.jpg',
        'st. moritz': 'city10.jpg',
    };

    // Check if the guess is a correct answer
    if (guess in correctAnswers) {
        // Display success message
        document.getElementById('resultMessage').textContent = 'Correct guess!';
        document.getElementById('resultMessage').style.color = 'green';
        // Display corresponding image
        document.getElementById('cityImage').src = correctAnswers[guess];
        // Increment score
        score++;
    } else {
        // Display failure message
        document.getElementById('resultMessage').textContent = 'Incorrect guess. Try again!';
        document.getElementById('resultMessage').style.color = 'red';
        // Decrement score (if it's not already 0)
        score = Math.max(0, score - 1);
    }

    // Update score display
    document.getElementById('score').textContent = score;

    // Check if the user has won
    if (score === 7) {
        document.getElementById('resultMessage').textContent = 'Congratulations! You win!';
        document.getElementById('resultMessage').style.color = 'blue';
        // Optionally, you can disable the input field and submit button here
    }

    // Clear the input field
    document.getElementById('cityGuess').value = '';
}
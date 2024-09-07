// Selección de elementos del DOM
const choices = document.querySelectorAll('.choice');
const resultDiv = document.getElementById('result');

// Opciones posibles
const options = ['rock', 'paper', 'scissors'];

// Función para elegir la opción de la computadora
function computerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Función para determinar el ganador
function determineWinner(player, computer) {
    if (player === computer) {
        return 'Empate!';
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win! 🎉';
    } else {
        return 'La computadora gana! 😢';
    }
}

// Evento de clic para cada botón
choices.forEach(choice => {
    choice.addEventListener('click', function () {
        const playerChoice = this.id;
        const computerChoiceResult = computerChoice();

        // Mostrar el resultado
        const result = determineWinner(playerChoice, computerChoiceResult);
        resultDiv.textContent = `Tu elegiste: ${playerChoice} | La computadora elige: ${computerChoiceResult}. ${result}`;
    });
});

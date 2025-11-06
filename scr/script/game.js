document.addEventListener('DOMContentLoaded', function () {
    const question = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const btnResponder = document.getElementById('btnResponder');
    const feedback = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score');
    const keys = document.querySelectorAll('.numKeyboard .key');

    let resultado;
    let score = 0;

    function questions() {
        const operations = ['+', '-', '*', '/', '^'];
        const operator = operations[Math.floor(Math.random() * operations.length)];

        let num1, num2, textQuestion;

        switch (operator) {
            case '+':
                num1 = Math.floor(Math.random() * 15) + 1;
                num2 = Math.floor(Math.random() * 15) + 1;
                resultado = num1 + num2;
                textQuestion = `${num1} + ${num2} = ?`;
                break;

            case '-':
                num1 = Math.floor(Math.random() * 15) + 1;
                num2 = Math.floor(Math.random() * 15) + 1;
                resultado = num1 - num2;
                textQuestion = `${num1} - ${num2} = ?`;
                break;

            case '*':
                num1 = Math.floor(Math.random() * 15) + 1;
                num2 = Math.floor(Math.random() * 15) + 1;
                resultado = num1 * num2;
                textQuestion = `${num1} * ${num2} = ?`;
                break;

            case '/':
                num2 = Math.floor(Math.random() * 9) + 1;
                resultado = Math.floor(Math.random() * 10) + 1;
                num1 = num2 * resultado;
                textQuestion = `${num1} ÷ ${num2} = ?`;
                break;

            case '^':
                num1 = Math.floor(Math.random() * 10) + 1;
                num2 = Math.floor(Math.random() * 4) + 1;
                resultado = Math.pow(num1, num2);
                textQuestion = `${num1} ^ ${num2} = ?`;
                break;
        }

        question.textContent = textQuestion;
        answerInput.value = '';
        feedback.textContent = '';
    }

    function checkAnswer() {
        const answ = Number(answerInput.value);
        const correct = Math.abs(answ - resultado) < 0.01;

        if (correct) {
            feedback.textContent = '✅ Correto!';
            feedback.style.color = 'green';
            score++;
        } else {
            feedback.textContent = `❌ Errado! A resposta era ${resultado.toFixed(2)}`;
            feedback.style.color = 'red';
        }

        scoreDisplay.textContent = `Pontuação: ${score}`;
        setTimeout(questions, 1800);
    }

    btnResponder.addEventListener('click', checkAnswer);

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const value = key.textContent.trim();
            answerInput.value += value;
        });
    });

    questions();
});

// Função principal para resolver o enigma do cofre
function solveMageSafe(numbers) {
  // Ordena os números em ordem crescente
  const sorted = [...numbers].sort((a, b) => a - b);

  // Calcula a soma total de todos os números
  const totalSum = sorted.reduce((sum, num) => sum + num, 0);

  // A menor soma é a soma total menos o maior número
  const minSum = totalSum - sorted[sorted.length - 1];

  // A maior soma é a soma total menos o menor número
  const maxSum = totalSum - sorted[0];

  return [minSum, maxSum];
}

// Função para formatar o resultado
function formatResult([minSum, maxSum], numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const totalSum = sorted.reduce((sum, num) => sum + num, 0);

  return `
        <p>Menor soma: ${minSum} (${totalSum} - ${sorted[sorted.length - 1]})</p>
        <p>Maior soma: ${maxSum} (${totalSum} - ${sorted[0]})</p>
        <p>Sequência ordenada: [${sorted.join(', ')}]</p>
    `;
}

// Função para validar a entrada
function validateInput(input) {
  const numbers = input.split(',').map(num => parseInt(num.trim()));

  if (numbers.length !== 5 || numbers.some(isNaN) || numbers.some(num => num <= 0)) {
    return { isValid: false, error: 'Por favor, insira exatamente 5 números positivos separados por vírgula.' };
  }

  return { isValid: true, numbers };
}

// Evento para o botão DESVENDAR
document.getElementById('solve').addEventListener('click', () => {
  const input = document.getElementById('numbers').value;
  const resultDiv = document.getElementById('result');
  const calculationDiv = document.getElementById('calculation');

  const { isValid, error, numbers } = validateInput(input);

  if (!isValid) {
    resultDiv.innerHTML = `<p style="color: #ff0044">${error}</p>`;
    calculationDiv.innerHTML = '';
    return;
  }

  const solution = solveMageSafe(numbers);
  resultDiv.innerHTML = `<p>Solução: (${solution[0]}, ${solution[1]})</p>`;
  calculationDiv.innerHTML = formatResult(solution, numbers);
});

// Evento para o botão RETORNAR
document.getElementById('reset').addEventListener('click', () => {
  document.getElementById('numbers').value = '';
  document.getElementById('result').innerHTML = '';
  document.getElementById('calculation').innerHTML = '';
});

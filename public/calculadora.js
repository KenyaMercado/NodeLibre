document.addEventListener('DOMContentLoaded', function () {
  const numero1Input = document.getElementById('numero1');
  const numero2Input = document.getElementById('numero2');
  const operacionSelect = document.getElementById('operacion');
  const calcularButton = document.getElementById('calcular');
  const resultadoDiv = document.getElementById('resultado');

  calcularButton.addEventListener('click', function () {
    const numero1 = parseFloat(numero1Input.value);
    const numero2 = parseFloat(numero2Input.value);
    const operacion = operacionSelect.value;
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
      // Mostrar mensaje de "Campos Vacíos"
      alert('Por favor, completa ambos campos.');
    } else if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
      // Mostrar mensaje de "Ingresa Solo Números"
      alert('Por favor, ingresa solo números válidos.');
    } else {
      switch (operacion) {
        case 'suma':
          resultado = numero1 + numero2;
          break;
        case 'resta':
          resultado = numero1 - numero2;
          break;
        case 'multiplicacion':
          resultado = numero1 * numero2;
          break;
        case 'division':
          if (numero2 === 0) {
            resultado = 'No se puede dividir por cero.';
          } else {
            resultado = numero1 / numero2;
          }
          break;
        default:
          resultado = 'Operación no válida.';
      }

      resultadoDiv.innerHTML = `El resultado de la ${operacion} es: ${resultado}`;
    }
  });
});

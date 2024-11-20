/* Time */
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Nov 22, 2024 15:15:00').getTime(),
  x = setInterval(function () {

    let now = new Date().getTime(),
      distance = countDown - now;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('dias').innerText = 0;
      document.getElementById('horas').innerText = 0;
      document.getElementById('minutos').innerText = 0;
      document.getElementById('segundos').innerText = 0; 
      return; // Termina la ejecución de la función
    }

    const dias = Math.floor(distance / day);
    const horas = Math.floor((distance % day) / hour);
    const minutos = Math.floor((distance % hour) / minute);
    const segundos = Math.floor((distance % minute) / second);

    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

   /*  console.log(dias, horas, minutos, segundos); */

  }, second);


if (segundos == 0) {
  document.getElementById('dias').innerText = "00",
    document.getElementById('horas').innerText = "00",
    document.getElementById('minutos').innerText = "00",
    document.getElementById('segundos').innerText = "00";
}

 

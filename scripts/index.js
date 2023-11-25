const serverURL = 'http:://ip'
console.log('Hola Mundo')
/*  Método Para obtener la temperatura y humedad del dispositivo  */
/* setInterval(() => {
  fetch(`${serverURL}/weather`)
    .then(response => response.text())
    .then(data =>  {
      document.getElementById('hum').innerText = data.hum;
      document.getElementById('temp').innerText = data.temp;
    })
}, 10000); */


/* Método para encender y apagar la luces   */

const turnLights = (id) => {
  const switchState = document.getElementById(id).checked;
  console.log(switchState ? 'on' : 'off')
  console.log(id)
/*   fetch(`${serverURL}/light?${id}=${switchState}` , { method: 'POST' })
    .then(response => response.text())
    .then(data =>  {
      console.log(data)
    }) */
}

const doors = (id) => {
  const switchState = document.getElementById(id).checked;
  console.log(switchState ? 'open' : 'closed')
  console.log(id)
/*   fetch(`${serverURL}/doors?${id}=${switchState}` , { method: 'POST' })
    .then(response => response.text())
    .then(data =>  {
      console.log(data)
    }) */
}


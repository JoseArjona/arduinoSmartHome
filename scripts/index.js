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
  const status = switchState ? 'on' : 'off'
  console.log(status)
  console.log(id)
/*   fetch(`${serverURL}/light?${id}=${status}` , { method: 'POST' })
    .then(response => response.text())
    .then(data =>  {
      console.log(data)
    }) */
}

const doors = (id) => {
  const switchState = document.getElementById(id).checked;
  const status = switchState ? 'open' : 'closed'
  console.log(status)
  console.log(id)
/*   fetch(`${serverURL}/door?${id}=${status}` , { method: 'POST' })
    .then(response => response.text())
    .then(data =>  {
      console.log(data)
    }) */
}


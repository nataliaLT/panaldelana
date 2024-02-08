function cargarJson() {
    const url = 'http://127.0.0.1:5502/js/app.json'
    fetch(url)
   .then((response)=> {
        return response.json()
   })
   .then((data)=> {
    const containerColor1 = document.querySelector('.colores.uno');
    const containerColor2 = document.querySelector('.colores.dos');
    const containerColor3 = document.querySelector('.colores.tres');
    const containerColor4 = document.querySelector('.colores.cuatro');
    containerColor1.innerHTML = `
    <li><a href="" class="color" style='background:${data[2].color1}'></a></li>
    `
    containerColor2.innerHTML = `
    <li><a href="" class="color" style='background:${data[2].color1}'></a></li>
    <li><a href="" class="color" style='background:${data[2].color2}'></a></li>
    <li><a href="" class="color" style='background:${data[2].color3}'></a></li>
    <li><a href="" class="color" style='background:${data[2].color4}'></a></li>
    `
    containerColor3.innerHTML = `
    <li><a href="" class="color" style='background:${data[3].color1}'></a></li>
    <li><a href="" class="color" style='background:${data[3].color2}'></a></li>
    <li><a href="" class="color" style='background:${data[3].color3}'></a></li>
    <li><a href="" class="color" style='background:${data[3].color4}'></a></li>
    `
    containerColor4.innerHTML = `
    <li><a href="" class="color" style='background:${data[4].color1}'></a></li>
    <li><a href="" class="color" style='background:${data[4].color2}'></a></li>
    <li><a href="" class="color" style='background:${data[4].color3}'></a></li>
    <li><a href="" class="color" style='background:${data[4].color4}'></a></li>
    `
    console.log()
   })
   .catch((error)=> {
    console.log(error)
   });
}

cargarJson()
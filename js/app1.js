const btnCarrito = document.querySelector('.btn-carrito');
const carroCompra = document.querySelector('.carro-compra');
const btnRealizarPedido = document.querySelector('.btn-realizar-pedido');

const carroCompraWrapper = document.querySelector('.carro-compra .wrapper');

let llenarCarro = JSON.parse(localStorage.getItem('carrito'))  || [];
let tarjetaCarro = '';
let cards = '';
let precio = [];
const wrapperSubtotal = document.querySelector('.wrapper-subtotal');
//let btnCarro = document.querySelectorAll('.carrito');
creacionTarjetaCarro()

btnRealizarPedido.addEventListener('click', function() {
    carroCompraWrapper.innerHTML = '';
    wrapperSubtotal.innerHTML = '';
    localStorage.clear()
    alert('Su pedido a sido realizado. Muchas gracias por comprar con nosotros :). ')
})

btnCarrito.addEventListener('click', function() {

    if(carroCompra.classList.contains('activo')) {
        carroCompra.classList.remove('activo');
    }else {
        carroCompra.classList.add('activo');
    }
});


/*********************PAGINA DE TIENDA***********************/
const contenedor = document.querySelectorAll('.container .tarjeta');
const btnVaciar = document.querySelector('.btn-vaciar');
//evento para boton vaciar carrito
btnVaciar.addEventListener('click', function() {
    carroCompraWrapper.innerHTML = '';
    wrapperSubtotal.innerHTML = '';
    localStorage.clear()
});

contenedor.forEach((element)=> {
    element.addEventListener('click', function() {
        objetoTarjeta(element)  
    });
})

//funcion que guarda datos
function objetoTarjeta(card) {
    let datosTarjeta = {
        image : card.querySelector('img').src,
        producto : card.querySelector('h3').textContent,
        precio : card.querySelector('.precio').textContent,
    }
  
    llenarCarro.push(datosTarjeta); 
    precio.push(datosTarjeta.precio)
    console.log(precio)
    creacionTarjetaCarro()
    compraTotal(precio)
}

//Funcion que arma el html en el carrito
function creacionTarjetaCarro() {
   //creo objeto con datos que seran utilizados para armar mi card en el carro de compras
   carroCompraWrapper.innerHTML = '';
   llenarCarro.forEach((card)=> {
    tarjetaCarro = document.createElement('div');
    tarjetaCarro.classList.add('card-carrito')
    tarjetaCarro.innerHTML = `
    <figure class="imagen"><img src=${card.image} alt="" srcset=""></figure>
    <div class="data">
      <div class="producto">${card.producto}</div>
      <div class="precio">$${card.precio}</div>
    </div>`
    carroCompraWrapper.appendChild(tarjetaCarro);
   
});
guardarDatos(llenarCarro);
}
//Guardo los datos en localStorage
function guardarDatos (llenarCarro) {
    localStorage.setItem('carrito', JSON.stringify(llenarCarro));
}
//Funcion para calcular total de compra
function compraTotal(precio) {
    wrapperSubtotal.innerHTML = '';
    let total = 0;
    console.log(precio)
    precio.forEach((e)=> {
        numeroParseado = parseFloat(e);
        console.log(numeroParseado)
        total += numeroParseado;
    });
    let totalPrecio = document.createElement('div');
    totalPrecio.innerHTML =  `
    <div class="subtotal">Subtotal:</div>
    <div class="precio-total">$${total}</div>
    `
    wrapperSubtotal.appendChild(totalPrecio);
}





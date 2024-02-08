
let buttonEnviar = document.querySelector('#enviarMensaje');
let mensajeContacto = document.querySelector('.mensajeContacto');

buttonEnviar.addEventListener('click',()=> {
    let inputNombre = document.querySelector('#inputName').value;
    let inputMail = document.querySelector('#inputEmail').value;
    let textarea = document.querySelector('#exampleFormControlTextarea1').value;
    
console.log(inputNombre)
    if((inputNombre != '' ) && (inputMail != '') && (textarea != '') ) {
        crearTextoFinalizacion(inputNombre);
    }else{
        mensajeContacto.innerHTML = 'Debes llenar todos los campos'
        console.log('debes ingresar todos los campos ')
    }

});

function crearTextoFinalizacion(nombre) {
    mensajeContacto.innerHTML =  `
    Muchas gracias ${nombre} !!.
    Tu mensaje a sido enviado
    `
    buttonEnviar.disabled = true;
}

class Formulario {
    constructor(nombre, mail , textarea) {
        this.nombre = nombre;
        this.mail = mail;
        this.textarea = textarea
    }
}
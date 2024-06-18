const categorias = ["Hamburguesa vegetariana", "Hamburguesa vegana"]

const saludoInicial = alert("Bienvenido a nuestra tienda virtual!!")
const saludoSecundario = alert("En nuestra tienda encontrará hamburguesas vegetarianas y veganas. \n Por favor seleccione la categoría de productos que desea visualizar.")



function filtrarProductosPorCategoria (productos, parametros) {
        
    let productosFiltrados = productos.filter(producto => parametros.includes(producto.categoria))
    return productosFiltrados
}

function ordenarProductos(productos){
      return productos.sort((x, y) => x.titulo.localeCompare(y.titulo))  
}


const productosFiltrados = filtrarProductosPorCategoria(productos, categorias)

ordenarProductos(productosFiltrados)


function mostrarLista (listaDeProductos) {
    let listaA = []
    for (let i = 0; i < listaDeProductos.length; i++){

        let pair = `${i} : ${listaDeProductos[i].titulo}`
        listaA.push(pair)
    }

    return listaA.join('\n');
}


let listaFinal = mostrarLista(productosFiltrados)


let productoSeleccionado = prompt(`Puede elegir entre las siguientes produtos, seleccione el número que corresponda con el producto que desee camprar. \n ${listaFinal }` )



function validacionProductoElegido(listaFinal, value) {
    
    let listaFiltrada = listaFinal.filter((_, index) => index == value);
    
    
    if (listaFiltrada ==[] ) {
        alert("El valor ingresado no es valido, por favor vuelva a seleccionar un número correspondiente al producto deseado.")
        let segundoValor = prompt(`Puede elegir entre las siguientes produtos, seleccione el número que corresponda con el producto que desee camprar. \n ${listaFinal }` )
        listaFiltrada = listaFinal.filter((_, index) => index == segundoValor);
        if (listaFiltrada===[]) {
            return alert("El producto seleccionado no se encuentra disponible. Gracias por su visita.");
        }

    } else {
        return listaFiltrada[0]

    }    
}


const validadoProductoSeleccionado = validacionProductoElegido(productosFiltrados, productoSeleccionado)

const respuestaCliente = confirm(`El producto seleccionado es: ${validadoProductoSeleccionado.titulo}.\n Se trata de un ${validadoProductoSeleccionado.descripcion_corta}
Su valor es de ${validadoProductoSeleccionado.precio}.\n Su producto llegará en 3 días hábiles. Desea continuar con la compra? `)

const direccionCliente = prompt("Por favor ingrese su dirección de envío")

const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];


function fechaDeEnvio(periodoDeEspera) {

    let fechaActual = new Date()
    let diaDeLaSemana = fechaActual.getDay()

    
    for (let i = 0 ; i < periodoDeEspera; i++) {

        if(diaDeLaSemana === 0 || diaDeLaSemana === 6 ) {
            diaDeLaSemana = diaDeLaSemana + 1
        }
         
        diaDeLaSemana = diaDeLaSemana + 1
    }

    return alert(`Su producto será enviado a ${direccionCliente} y llegará el dia ${diasSemana[diaDeLaSemana]}`)

}

fechaDeEnvio(3)
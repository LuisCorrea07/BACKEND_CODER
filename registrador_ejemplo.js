class TicketManager {
    #precioBaseGanancias = 500

    constructor (){
        this.eventos = []
    }
    getEventos() {
        this.eventos.forEach((evento)=>{
            console.log(eventos)
        })
    }

    agregarEvento(nombre, lugar,precio,capacidad,fecha) {
        const eventoNuevo = {
            id: 'autoincrement',
            nombre: nombre,
            lugar: lugar,
            precio: precio,
            capacidad: capacidad || 50,
            fecha: fecha || new Date().toLocaleString()
        }
        console.log(eventoNuevo)
    }

    

}

const manager = new TicketManager()
manager.agregarEvento('Evento 1', 'Rafaela', 3000, 100)
import http from 'http';

// Creacion del server
const vigia = http.createServer((peticion, respuesta) => {

    respuesta.setHeader('Content-Type', 'application/json');

    // Inicio, endpoint principal
    if (peticion.url === '/') {
        respuesta.writeHead(200);
        respuesta.end(JSON.stringify({
            mensaje: "Bienvenido al servidor central"
        }));
    }

    // Inventario
    else if (peticion.url === '/inventario') {
        // Simulacion de datos de una base de datos
        const equipos =[
        { serie : 'MX-001', tipo: 'Laptop'},
        { serie : 'MX-002', tipo: 'Impresora'}
        ];

        respuesta.writeHead(200);
        respuesta.end(JSON.stringify({
            mensaje: 'Datos de inventario recuperados',
            datos: equipos
        }));
    }

    // Ruta no encontrada (Error 404)
    else {
        respuesta.writeHead(404);
        respuesta.end(JSON.stringify({
            error: 'Error URL no existe'
        }));
    }

});

vigia.listen(3000, () => {
    console.log('Servidor escuchando ');
    
})
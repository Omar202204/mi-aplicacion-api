import http from 'http';

// Creacion del server
const vigia = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {'Content-Type': 'application/json'});

    // Paquete de respuesta
    const paquete = {mensaje: 'El servidor esta en linea'};
    respuesta.end(JSON.stringify(paquete));
});

vigia.listen(3000, () => {
    console.log('Servidor escuchando ');
    
})
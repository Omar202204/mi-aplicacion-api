import express, {Request, response, Response} from 'express';
import reporteRoutes from './routes/reporte.routes.js'; // Importamos el mapa de rutas de PDFs
import cors from 'cors';

// Inicializamos la aplicaion de Express
const app = express();

// Configuracion del puerto (puerto del entorno del servidor real o el 3000 por defecto)
const PORT = process.env.PORT || 3000;

app.use(cors());
// MIDDLEWARE - Permite que el servidor entienda datos en formato JSON que le mande Angular
app.use(express.json());

// La ruta física final que el cliente debe consultar en su navegador se compone de:
// http://localhost:3000 + /api/reportes + /descargar -> http://localhost:3000/api/reportes/descargar
app.use('/api/reportes', reporteRoutes);


// Endpoint de prueba global
app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 'success',
        mensaje: 'API respondiendo correctamente'
    });
});

// Encendemos el servidor en el puerto indicado escuchando permanentemente
app.listen(PORT, () => {
    console.log('[SERVER] Inicializado con exito');
    console.log(`[SERVER] Escuchando peticiones en http://localhost:${PORT}`);
});

// Exportamos la app por si en el futuro se necesitan hacer pruebas automatizadas
export default app;


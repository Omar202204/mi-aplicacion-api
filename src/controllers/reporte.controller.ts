import { Request, Response } from "express";
import { generarPdfInventario } from "../services/reporte.services.js";
import { Equipo } from "../interfaces/equipo.interfaces.js";

export const descargarReporte = async (req: Request, res: Response): Promise<void> => {
    const equipos: Equipo[] = [
        { serie: '001', tipo: 'Laptop Dell', activo: true},
        { serie: '002', tipo: 'Impresora HP', activo: false},
        { serie: '003', tipo: 'Teclado Machenike', activo: false}
    ];

    try {
        const pdfStream = await generarPdfInventario(equipos);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="Archivo.pdf"');

        pdfStream.pipe(res);
        pdfStream.end();

    }catch(error){
        console.error('Error en el backend - reporte.controller.ts', error);
        res.status(500).json({ error: 'Error interno al procesar el archivo'});
    }
};

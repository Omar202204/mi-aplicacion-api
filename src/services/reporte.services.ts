// Aqui creamos la funcion que crea el PDF y lo exportamos a controller 

import pdfmake from 'pdfmake';
import { TDocumentDefinitions, TDocumentInformation } from 'pdfmake/interfaces.js';
import { Equipo } from '../interfaces/equipo.interfaces.js';

export const generarPdfInventario = async (equipos: Equipo[]) => {
    const fuentes = { 
        Helvetica: {
            normal: 'Helvetica',
            bold: 'Helvetica-Bold',
            italics: 'Helvetica-Oblique',
            boldItalics: 'Helvetica-BoldOblique'
        }
    };

    pdfmake.addFonts(fuentes);
    
    const docDefinition: TDocumentDefinitions = {
        defaultStyle: {font: 'Helvetica'},
        content: [      // Impresion en el pdf
            { text: 'Reporte Oficial', style: 'header'},
            { text: 'Subtitulo mamalonnn\n\n', style: 'subheader'},
            { 
                ul: equipos.map(equipo => `${equipo.serie} - ${equipo.tipo} (Activo: ${equipo.activo ? 'Si' : 'No'})`)
            }
        ],
        styles: {
            header: { fontSize: 18, bold: true, color: '#1e3a8a'},
            subheader: { fontSize: 12, italics: true, margin: [0, 0, 0, 10]}
        }
    };


    const pdfDoc = pdfmake.createPdf(docDefinition);
    return await pdfDoc.getStream();
}
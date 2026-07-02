import fs from 'fs';

const equipos = [
    { id: 1, serie: '001', area: 'Sistemas', activo: false},
    { id: 2, serie: '002', area: 'Finanzas', activo: true},
    { id: 3, serie: "003", area: "Sistemas", activo: false },
    { id: 4, serie: "004", area: "Finanzas", activo: false },
    { id: 5, serie: "005", area: "Sistemas", activo: true }
];

const equiposActivos = equipos.filter((equipo) => equipo.activo === false);

const folios = equipos.map(equipo => 'Folio-' + equipo.serie);

console.log(equiposActivos);
console.log(folios);

//                          null y 2 hacen que el texto tenga saltos de linea
const textoParaGuardar = JSON.stringify(equipos, null, 2);
console.log(textoParaGuardar);

fs.writeFileSync('baseDeDatos.json', textoParaGuardar)






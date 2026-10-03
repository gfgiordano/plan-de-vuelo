// Datos con los que arranca la app la primera vez (tomados de aerodromos.db).
// La unidad de velocidad figuraba como 'M' (millas): se cargó como mph y se puede cambiar.
window.DATOS_INICIALES = {
  aeronaves: [
    { matricula: 'LV-CHU', fabricante: 'Cessna', modelo: 'C-150', velocidad: 90, unidadVel: 'mph', consumo: 20, unidadComb: 'L', capacidad: 96, reservaMin: 30 },
    { matricula: 'LV-JWS', fabricante: 'Cessna', modelo: 'C-150', velocidad: 90, unidadVel: 'mph', consumo: 20, unidadComb: 'L', capacidad: 96, reservaMin: 30 },
    { matricula: 'LV-JTQ', fabricante: 'Cessna', modelo: 'C-150', velocidad: 90, unidadVel: 'mph', consumo: 20, unidadComb: 'L', capacidad: 96, reservaMin: 30 },
    { matricula: 'LV-RRD', fabricante: 'Piper', modelo: 'PA-11', velocidad: 70, unidadVel: 'mph', consumo: 18, unidadComb: 'L', capacidad: 64, reservaMin: 30 }
  ],
  vuelos: [
    { id: 1, fecha: '2025-06-07', aeronave: 'LV-CHU', ruta: ['BGI', 'BOS'], distNm: 53.72, tiempoMin: 66, combustible: 22.1, unidadComb: 'L', obs: 'Adaptación' },
    { id: 2, fecha: '2025-06-07', aeronave: 'LV-JTQ', ruta: ['BOS', 'BGI'], distNm: 53.72, tiempoMin: 41, combustible: 13.7, unidadComb: 'L', obs: 'Adaptación' }
  ]
};

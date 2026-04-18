// PRODUCTO
db.productos.insertOne({
  id: 1,
  nombre: "Zapato deportivo",
  descripcion: "Zapato cómodo para correr",
  imagen: "https://ejemplo.com/zapato.jpg",
  dimensiones: {
    ancho: 10,
    alto: 12,
    profundidad: 30,
    peso: 0.8
  },
  categoria_id: 101,
  precio: 120000,
  fecha_publicacion: "2026-04-18",
  fecha_actualizacion: "2026-04-18",
  cantidad_stock: 50,
  disponible_venta: true,
  descuentos: null,
  manual: null,
  videos: []
});


// COMPRADOR / VENDEDOR
db.usuarios.insertOne({
  id: 1,
  nombre: "Juan Pérez",
  documento: "123456789",
  fecha_nacimiento: "1995-05-10",
  direccion: {
    departamento: "Santander",
    ciudad: "Bucaramanga",
    direccion: "Calle 10 #20-30"
  },
  correo_electronico: "juan@email.com",
  telefono: "3001234567",
  redes_sociales: {
    twitter: { url: "x.com/juan", usuario: "juan" },
    facebook: { url: "fb.com/juan", usuario: "juan" },
    instagram: { url: "ig.com/juan", usuario: "juan" }
  }
});


// VALORACIÓN
db.valoraciones.insertOne({
  id: 1,
  producto_id: 1,
  calificacion_estrellas: 5,
  comentario: "Excelente producto",
  fecha: "2026-04-18",
  anonima: false,
  nombre_usuario: "Juan Pérez"
});


// PREGUNTA
db.preguntas.insertOne({
  id: 1,
  producto_id: 1,
  comprador_id: 1,
  pregunta: "¿Es resistente al agua?",
  fecha: "2026-04-18",
  anonima: false,
  nombre_comprador: "Juan Pérez",
  hilo_interacciones: [
    {
      autor_id: 1,
      rol: "comprador",
      comentario: "¿Tiene garantía?",
      fecha: "2026-04-18"
    },
    {
      autor_id: 2,
      rol: "vendedor",
      comentario: "Sí, tiene 1 año de garantía",
      fecha: "2026-04-18",
      nombre_vendedor: "Tienda XYZ"
    }
  ]
});

//Insertar un documento en cada modelo de datos implementado.
//MODELO NORMALIZADO
// PRODUCTO
db.productos.insertOne({
  id: 1,
  nombre: "Laptop ASUS ROG Zephyrus G14",
  descripcion: "Laptop gamer de alto rendimiento",
  imagen: "https://ejemplo.com/laptop.jpg",
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
  rol:"vendedor",
  fecha_nacimiento: "1995-05-10",
  direccion: {
    departamento: "Santander",
    ciudad: "Bucaramanga",
    direccion: "Calle 10 #20-30"
  },
  correo_electronico: "juan@email.com",
  telefono: "3001234567",
  redes_sociales: {
    twitter: { url: "x.com/juan" },
    facebook: { url: "fb.com/juan" },
    instagram: { url: "ig.com/juan" }
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

//MODELO EMBEBIDO
db.productos.insertOne({
  id: 1,
  nombre: "Laptop ASUS ROG Zephyrus G14",
  descripcion: "Laptop gamer de alto rendimiento",
  imagen: "https://ejemplo.com/lapto.jpg",
  dimensiones: {
    ancho: 10,
    alto: 12,
    profundidad: 30,
    peso: 0.8
  },
  categoria: {
    id: 101,
    nombre: "Tecnología"
  },
  precio: 120000,
  fecha_publicacion: "2026-04-18",
  fecha_actualizacion: "2026-04-18",
  cantidad_stock: 50,
  disponible_venta: true,

  valoraciones: [
    {
      id: 1,
      calificacion_estrellas: 5,
      comentario: "Excelente producto",
      fecha: "2026-04-18",
      anonima: false,
      nombre_usuario: "Juan Pérez"
    }
  ],

  preguntas: [
    {
      id: 1,
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
    }
  ]
});

//Insertar 3 documentos en una misma sentencia en cada modelo de datos implementado.
//MODELO NORMALIZADO
db.productos.insertMany([
  {
    id: "2",
    vendedor_id: 3,
    categoria_id: "Tecnología",
    nombre: "Tablet Xiaomi Pad 6",
    descripcion: "Tablet gamer de alto rendimiento",
    imagen: "https://cdn.tienda.com/img/tablet-makita.webp",
    dimensiones: { ancho_cm: 28, alto_cm: 12, profundidad_cm: 9, peso_kg: 1.7 },
    precio: 310000,
    fecha_publicacion: "2024-11-21",
    fecha_actualizacion: "2024-11-21",
    cantidad_stock: 18,
    disponible_venta: true,
    descuentos_ids: ["DESC-01"],
    manual_instrucciones: "https://cdn.tienda.com/manuales/makita-9557pb.pdf",
    videos_ids: []
  },
  {
    id: "3",
    vendedor_id: 1,
    categoria_id: "Deporte",
    nombre: "Raqueta de Pádel Babolat Technical Veron",
    descripcion: "Raqueta de pádel de fibra de carbono para jugadores intermedios",
    imagen: "https://cdn.tienda.com/img/raqueta-babolat.webp",
    dimensiones: { ancho_cm: 26, alto_cm: 46, profundidad_cm: 3.8, peso_kg: 0.37 },
    precio: 480000,
    fecha_publicacion: "2024-11-21",
    fecha_actualizacion: "2024-11-21",
    cantidad_stock: 14,
    disponible_venta: true,
    descuentos_ids: [],
    manual_instrucciones: null,
    videos_ids: []
  },
  {
    id: "4",
    vendedor_id: 6,
    categoria_id: "Escolar",
    nombre: "Maletín Executivo Samsonite Classic",
    descripcion: "Maletín de cuero genuino con compartimento para portátil de 15.6 pulgadas",
    imagen: "https://cdn.tienda.com/img/maletin-samsonite.webp",
    dimensiones: { ancho_cm: 40, alto_cm: 30, profundidad_cm: 8, peso_kg: 1.3 },
    precio: 560000,
    fecha_publicacion: "2024-11-21",
    fecha_actualizacion: "2024-11-21",
    cantidad_stock: 11,
    disponible_venta: true,
    descuentos_ids: [],
    manual_instrucciones: null,
    videos_ids: []
  }
]);

// MODELO EMBEBIDO
db.productos_embebido.insertMany([
  {
    id: "5",
    vendedor: { id: 3, nombre: "Jorge Iván Moreno", correo: "jorge.moreno@email.com" },
    categoria: { id: "501", nombre: "Herramientas" },
    nombre: "Pulidora Angular Makita 9557PB",
    descripcion: "Pulidora de 4.5 pulgadas",
    imagen: "https://cdn.tienda.com/img/pulidora-makita.webp",
    dimensiones: { ancho_cm: 28, alto_cm: 12, profundidad_cm: 9, peso_kg: 1.7 },
    precio: 310000,
    fecha_publicacion: "2024-11-21",
    fecha_actualizacion: "2024-11-21",
    cantidad_stock: 18,
    disponible_venta: true,
    descuentos_compras_grandes: [
      { cantidad_minima: 5, porcentaje: 10, descripcion: "Descuento mayorista básico" }
    ],
    manual_instrucciones: { url: "https://cdn.tienda.com/manuales/makita-9557pb.pdf", tipo: "PDF" },
    videos: [],
    valoraciones: [],
    preguntas: []
  },
  {
    id: "6",
    vendedor: { id: 1, nombre: "Carlos Andrés Ruiz", correo: "carlos.ruiz@email.com" },
    categoria: { id: "504", nombre: "Deportes" },
    nombre: "Raqueta de Pádel Babolat Technical Veron",
    descripcion: "Raqueta de pádel de fibra de carbono para jugadores intermedios",
    imagen: "https://cdn.tienda.com/img/raqueta-babolat.webp",
    dimensiones: { ancho_cm: 26, alto_cm: 46, profundidad_cm: 3.8, peso_kg: 0.37 },
    precio: 480000,
    fecha_publicacion: "2024-11-21",
    fecha_actualizacion: "2024-11-21",
    cantidad_stock: 14,
    disponible_venta: true,
    descuentos_compras_grandes: [],
    manual_instrucciones: null,
    videos: [],
    valoraciones: [],
    preguntas: []
  },
  {
    id: "7",
    vendedor: { id: 6, nombre: "Paola Andrea Suárez", correo: "paola.suarez@email.com" },
    categoria: { id: "021", nombre: "Ropa" },
    nombre: "Maletín Samsonite Classic",
    descripcion: "Maletín de cuero genuino con compartimento para portátil de 15.6 pulgadas",
    imagen: "https://cdn.tienda.com/img/maletin-samsonite.webp",
    dimensiones: { ancho_cm: 40, alto_cm: 30, profundidad_cm: 8, peso_kg: 1.3 },
    precio: 560000,
    fecha_publicacion: "2024-11-21",
    fecha_actualizacion: "2024-11-21",
    cantidad_stock: 11,
    disponible_venta: true,
    descuentos_compras_grandes: [],
    manual_instrucciones: null,
    videos: [],
    valoraciones: [],
    preguntas: []
  }
]);

// Realice una población de la base de datos con datos de prueba para al menos 20 documentos.
// Generar 10 usuarios
var usuarios = [];
for (var i = 1; i <= 10; i++) {
  usuarios.push({
    "nombre": "Usuario " + i,
    "documento": "1000000" + i,
    "fecha_nacimiento": new Date(1980 + i % 20, i % 12, i % 28),
    "direccion": {
      "departamento": i % 2 == 0 ? "Cundinamarca" : "Antioquia",
      "ciudad": i % 2 == 0 ? "Bogota" : "Medellin",
      "direccion": "Calle " + i + " # " + (i*2) + "-" + (i*3)
    },
    "email": "usuario" + i + "@gmail.com",
    "telefono": "300000000" + i,
    "twitter": "@usuario" + i,
    "facebook": "usuario" + i,
    "instagram": "usuario" + i
  });
}
db.usuarios.insertMany(usuarios);

// Obtener los ids de los usuarios insertados
var usuariosIds = db.usuarios.find({}, {_id: 1}).toArray();

// Generar 20 productos
var nombresProductos = [
  "Laptop HP Pavilion 15",
  "Smartphone Samsung Galaxy S23",
  "Tablet iPad Air M2",
  "Monitor LG UltraGear 27\"",
  "Auriculares Sony WH-1000XM5",
  "Smartwatch Apple Watch Series 9",
  "Teclado Mecánico Logitech G915",
  "Mouse Inalámbrico Razer Basilisk X",
  "Cámara GoPro Hero 12",
  "Consola PlayStation 5",
  "Router ASUS RT-AX88U",
  "Proyector Epson Full HD",
  "Micrófono Blue Yeti X",
  "Disco SSD Samsung 980 PRO 1TB",
  "Memoria RAM Corsair Vengeance 32GB",
  "Tarjeta Gráfica NVIDIA RTX 4070",
  "Cargador Inalámbrico Belkin Boost",
  "Parlante Bluetooth JBL Charge 5",
  "Tablet Samsung Galaxy Tab S9",
  "Laptop Dell XPS 13"
];

var categorias = [
  "Computadores",
  "Smartphones",
  "Tablets",
  "Monitores",
  "Audio",
  "Relojes Inteligentes",
  "Periféricos",
  "Periféricos",
  "Cámaras",
  "Consolas",
  "Redes",
  "Proyectores",
  "Audio",
  "Almacenamiento",
  "Componentes",
  "Componentes",
  "Accesorios",
  "Audio",
  "Tablets",
  "Computadores"
];

var productos = [];

for (var i = 0; i < 20; i++) {
  var vendedor_index = i % usuariosIds.length;

  productos.push({
    "nombre": nombresProductos[i],
    "descripcion": "Producto tecnológico de alta calidad: " + nombresProductos[i] + ". Ideal para profesionales y entusiastas de la tecnología.",
    "imagen": "https://example.com/tecnologia" + (i + 1) + ".jpg",
    "dimensiones": {
      "alto": 10 + (i % 5),
      "ancho": 20 + (i % 10),
      "profundidad": 1.5 + (i % 3)
    },
    "categoria": categorias[i],
    "precio": 500000 + (i * 200000),
    "fecha_publicacion": new Date(2024, (i % 12), (i % 28) + 1),
    "fecha_actualizacion": new Date(2025, (i % 12), (i % 28) + 1),
    "stock": 5 + (i * 2),
    "disponible": i % 2 === 0,
    "descuentos": i % 4 === 0 ? 10 : 0, // Descuento 10% cada 4 productos
    "manual_instrucciones": i % 3 === 0 ? "https://example.com/manual" + (i + 1) + ".pdf" : "",
    "videos": i % 2 === 0 ? ["https://example.com/video" + (i + 1) + ".mp4"] : [],
    "vendedor_id": usuariosIds[vendedor_index]._id,
    "calificaciones": [
      {
        "estrellas": (i % 5) + 1,
        "comentario": i % 2 === 0 ? "Excelente producto, cumple con lo esperado." : "Buen rendimiento, aunque podría mejorar el diseño.",
        "fecha": new Date(2025, (i % 12), (i % 28) + 1),
        "anonimo": i % 2 === 0,
        "comprador_nombre": i % 2 === 0 ? "" : "Comprador " + (i + 1)
      }
    ],
    "preguntas": [
      {
        "pregunta": "¿Este producto incluye garantía oficial?",
        "fecha": new Date(2025, (i % 12), (i % 28) + 1),
        "anonimo": i % 2 === 0,
        "comprador_nombre": i % 2 === 0 ? "" : "Comprador " + (i + 1),
        "interacciones": [
          {
            "comentario": "Sí, tiene garantía de 1 año directamente con el fabricante.",
            "fecha": new Date(2025, (i % 12), (i % 28) + 1),
            "vendedor_nombre": "Vendedor " + vendedor_index,
            "comprador_nombre": i % 2 === 0 ? "" : "Comprador " + (i + 1)
          }
        ]
      }
    ]
  });
}

db.productos.insertMany(productos);




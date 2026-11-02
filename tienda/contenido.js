/* ============================================================
   CONTENIDO EDITABLE DE LA TIENDA aura.mgta
   Todo el texto de "Nosotros" y "Nuestra historia" vive aqui.
   Edita libremente; no hace falta tocar index.html.
   ============================================================ */
window.AURA_CONTENIDO = {
    // Numero de WhatsApp de la tienda en formato internacional, solo digitos. Ej: '584121234567'
    whatsapp: '',
    instagram: '',

    hero: {
        etiqueta: 'aura.mgta',
        titulo: 'Ropa que se siente como tu mejor versión.',
        subtitulo: 'Ropa de mujer y de hombre, seleccionada con cuidado para quienes se visten para sí mismos.'
    },

    manifiesto: [
        'Creemos que vestirse bien no es una obligación, es una forma de hablar sin decir nada.',
        'Elegimos cada prenda una por una: su caída, su tela, la manera en que te hace sentir al ponértela.',
        'No hacemos mucho. Hacemos lo que nos gustaría usar.'
    ],

    // "Quiénes somos"
    nosotros: {
        titulo: 'Quiénes somos',
        parrafos: [
            'aura.mgta es una marca de ropa para mujer y hombre, hecha con criterio: pocas piezas, bien elegidas, con un estilo propio.',
            'Cuidamos el detalle desde que seleccionamos la prenda hasta que llega a tus manos, y acompañamos a cada cliente como si fuera de la casa.',
            'Detrás de la marca hay personas reales que responden tus mensajes, te ayudan a elegir talla y celebran contigo cuando estrenas.'
        ],
        valores: [
            { titulo: 'Selección, no cantidad', texto: 'Cada pieza entra al catálogo porque la usaríamos nosotros.' },
            { titulo: 'Trato cercano', texto: 'Hablas con personas, no con un formulario.' },
            { titulo: 'Comunidad', texto: 'Crecemos de la mano de nuestros embajadores y de quienes confían en nosotros.' }
        ]
    },

    // "Por qué nacimos" -- borrador: reemplazar con la historia real de la marca
    historia: {
        titulo: 'Por qué nacimos',
        intro: 'Toda marca empieza con una incomodidad. La nuestra fue no encontrar la ropa que queríamos usar.',
        capitulos: [
            {
                titulo: 'El comienzo',
                texto: 'Empezamos con una idea sencilla: reunir en un solo lugar prendas que se vean bien, se sientan bien y duren.'
            },
            {
                titulo: 'La primera colección',
                texto: 'Elegimos pocas piezas y las probamos nosotros mismos antes de ofrecerlas. Si no las usaríamos, no entraban.'
            },
            {
                titulo: 'La comunidad',
                texto: 'Los primeros clientes se convirtieron en los primeros embajadores. Hoy aura.mgta crece por recomendación, de una persona a otra.'
            }
        ]
    },

    embajadoras: {
        titulo: 'Embajadores Aura',
        texto: 'Si alguien te recomendó aura.mgta, su código te da un beneficio de bienvenida en tu primera compra. Y si te encanta, tú también puedes tener tu propio código y ganar premios cuando tus conocidos compran.',
        pasos: [
            { titulo: 'Tu código', texto: 'Cada embajador tiene un código personal con sus iniciales y los últimos dígitos de su teléfono.' },
            { titulo: 'Tus conocidos compran', texto: 'Reciben un descuento de bienvenida usando tu código.' },
            { titulo: 'Tú ganas', texto: 'Al completar tu meta de referidos desbloqueas tu premio.' }
        ]
    },

    // Catalogo de prendas y galerias de estudio unificadas (fondo #141416, formato 4:5)
    catalogoEstudio: [
        {
            id: 1793641003024,
            nombre: 'Baggy - Styles',
            categoria: 'Baggy',
            costo: 16.00,
            pvp: 25.00,
            stock: 6,
            genero: 'Unisex',
            tallas: 'S, M, L, XL',
            destacado: true,
            imagen_url: '/tienda/fotos/baggy-styles-1.jpg',
            imagenes: [
                '/tienda/fotos/baggy-styles-1.jpg',
                '/tienda/fotos/baggy-styles-2.jpg',
                '/tienda/fotos/baggy-styles-3.jpg'
            ],
            colores: ['Taupe', 'Crema', 'Gris'],
            descripcion: 'Pantalón corte baggy de caída amplia y cintura elástica con cordón ajustable. Disponible en tonos neutros de alta versatilidad.'
        },
        {
            id: 1793646300001,
            nombre: 'Baggy Jeans - OEN',
            categoria: 'Jeans',
            costo: 18.00,
            pvp: 35.00,
            stock: 6,
            genero: 'Unisex',
            tallas: '28, 30, 32, 34',
            destacado: true,
            imagen_url: '/tienda/fotos/baggy-jeans-oen-1.jpg',
            imagenes: [
                '/tienda/fotos/baggy-jeans-oen-1.jpg',
                '/tienda/fotos/baggy-jeans-oen-2.jpg',
                '/tienda/fotos/baggy-jeans-oen-3.jpg',
                '/tienda/fotos/baggy-jeans-oen-4.jpg'
            ],
            colores: ['Negro Whiskers', 'Gris Acid Wash', 'Gris Claro', 'Negro Sólido'],
            descripcion: 'Denim pesado de corte baggy relajado con lavado de carácter y estructura firme. Diseñado para un fit urbano limpio.'
        },
        {
            id: 1793646300002,
            nombre: 'Baggy Pants Premium - OEN',
            categoria: 'Baggy',
            costo: 15.00,
            pvp: 30.00,
            stock: 6,
            genero: 'Unisex',
            tallas: 'S, M, L',
            destacado: true,
            imagen_url: '/tienda/fotos/baggy-premium-oen-1.jpg',
            imagenes: [
                '/tienda/fotos/baggy-premium-oen-1.jpg',
                '/tienda/fotos/baggy-premium-oen-2.jpg',
                '/tienda/fotos/baggy-premium-oen-3.jpg',
                '/tienda/fotos/baggy-premium-oen-4.jpg'
            ],
            colores: ['Rosa / Vivo Blanco', 'Gris / Vivo Negro', 'Crema / Vivo Negro', 'Negro / Vivo Blanco'],
            descripcion: 'Baggy jogging premium con costuras curvas en contraste (piping) y pretina elástica con cordón.'
        },
        {
            id: 1793383598668,
            nombre: 'Baggy Pants Unicolor - OEN',
            categoria: 'Baggy',
            costo: 12.50,
            pvp: 28.00,
            stock: 6,
            genero: 'Unisex',
            tallas: 'S, M, L, XL',
            destacado: false,
            imagen_url: '/tienda/fotos/baggy-unicolor-oen-1.jpg',
            imagenes: [
                '/tienda/fotos/baggy-unicolor-oen-1.jpg',
                '/tienda/fotos/baggy-unicolor-oen-2.jpg',
                '/tienda/fotos/baggy-unicolor-oen-3.jpg',
                '/tienda/fotos/baggy-unicolor-oen-4.jpg'
            ],
            colores: ['Gris Melange', 'Vinotinto', 'Marrón Camel', 'Negro'],
            descripcion: 'Baggy unicolor de algodón suave con caída fluida y bota ancha. Un esencial diario para combinar sin esfuerzo.'
        },
        {
            id: 1793383575598,
            nombre: 'Sueter Boxy Fit - OEN',
            categoria: 'Sueter/Sudadera',
            costo: 15.00,
            pvp: 30.00,
            stock: 6,
            genero: 'Unisex',
            tallas: 'S, M, L',
            destacado: true,
            imagen_url: '/tienda/fotos/sueter-boxy-oen-1.jpg',
            imagenes: [
                '/tienda/fotos/sueter-boxy-oen-1.jpg',
                '/tienda/fotos/sueter-boxy-oen-2.jpg',
                '/tienda/fotos/sueter-boxy-oen-3.jpg'
            ],
            colores: ['Gris Melange', 'Marrón Camel', 'Negro'],
            descripcion: 'Suéter cuello redondo con silueta boxy fit de hombros caídos y puños acanalados. Ideal en conjunto o por separado.'
        },
        {
            id: 1793646300003,
            nombre: 'Mom Jeans - OEN',
            categoria: 'Jeans',
            costo: 17.00,
            pvp: 34.00,
            stock: 6,
            genero: 'Mujer',
            tallas: '26, 28, 30, 32',
            destacado: false,
            imagen_url: '/tienda/fotos/mom-jeans-oen-1.jpg',
            imagenes: [
                '/tienda/fotos/mom-jeans-oen-1.jpg',
                '/tienda/fotos/mom-jeans-oen-2.jpg'
            ],
            colores: ['Azul Clásico', 'Negro'],
            descripcion: 'Mom jeans de tiro alto con entalle favorecedor en cintura y pierna recta relajada.'
        },
        {
            id: 1793646300004,
            nombre: 'Track Pants - Style',
            categoria: 'Track Pants',
            costo: 15.00,
            pvp: 28.00,
            stock: 6,
            genero: 'Unisex',
            tallas: 'S, M, L',
            destacado: false,
            imagen_url: '/tienda/fotos/track-pants-style-1.jpg',
            imagenes: [
                '/tienda/fotos/track-pants-style-1.jpg',
                '/tienda/fotos/track-pants-style-2.jpg',
                '/tienda/fotos/track-pants-style-3.jpg',
                '/tienda/fotos/track-pants-style-4.jpg'
            ],
            colores: ['Beige / Negro', 'Gris / Blanco', 'Negro / Blanco', 'Blanco / Negro'],
            descripcion: 'Track pants de corte recto con líneas laterales en contraste e inspiración streetwear.'
        },
        {
            id: 1793646300005,
            nombre: 'Track Pants - ARAC',
            categoria: 'Track Pants',
            costo: 16.00,
            pvp: 30.00,
            stock: 6,
            genero: 'Unisex',
            tallas: 'S, M, L',
            destacado: false,
            imagen_url: '/tienda/fotos/track-pants-arac-1.jpg',
            imagenes: [
                '/tienda/fotos/track-pants-arac-1.jpg',
                '/tienda/fotos/track-pants-arac-2.jpg'
            ],
            colores: ['Línea Vibrante (Verde / Rojo / Azul / Negro)', 'Línea Tierra (Terracota / Marrón / Beige / Gris)'],
            descripcion: 'Track pants ligeros con doble franja lateral en contraste y ajuste cómodo.'
        },
        {
            id: 1793646300006,
            nombre: 'KIT 5 NIKE - CCS',
            categoria: 'Kits',
            costo: 22.00,
            pvp: 40.00,
            stock: 6,
            genero: 'Unisex',
            tallas: 'S, M, L, XL',
            destacado: false,
            imagen_url: '/tienda/fotos/kit-5-nike-ccs-1.jpg',
            imagenes: [
                '/tienda/fotos/kit-5-nike-ccs-1.jpg',
                '/tienda/fotos/kit-5-nike-ccs-2.jpg'
            ],
            colores: ['Pack Surtido Neutro', 'Pack Blanco Clásico'],
            descripcion: 'Kit de 5 franelas básicas con logo bordado en pecho y cuello redondo reforzado.'
        },
        {
            id: 1793646300007,
            nombre: 'KIT PERCHADO - CCS',
            categoria: 'Kits',
            costo: 25.00,
            pvp: 45.00,
            stock: 6,
            genero: 'Unisex',
            tallas: 'S, M, L, XL',
            destacado: false,
            imagen_url: '/tienda/fotos/kit-perchado-ccs-1.jpg',
            imagenes: [
                '/tienda/fotos/kit-perchado-ccs-1.jpg'
            ],
            colores: ['Pack Dúo Negro + Blanco'],
            descripcion: 'Kit de 2 hoodies perchados con capucha ajustable y bolsillo canguro en negro y blanco.'
        }
    ]
};

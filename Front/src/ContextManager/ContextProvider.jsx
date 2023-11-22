import React,{createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {

    const products =[

        {
            nombre : 'Monitor gamer Samsung F24T35 led 24" azul y gris oscuro 100V/240V',
            tag : 'Monitor',
            precio : 79000,
            stock : 10,
            id : 1,
            descripcion : 
            [
                'Pantalla led de 24".',
                'Tiene una resolución de 1920px-1080px.',
                'Relación de aspecto de 16:9.',
                'Panel IPS.',
                'Su brillo es de 250cd/m².',
                'Tipos de conexión: D-Sub, HDMI 1.4.',
                'Es reclinable.',
                'Comodidad visual en todo momento.'
            ],
            imagen : 'image-product (5).jpg'
        },
        {
            nombre: 'Monitor gamer Samsung F22T35 led 22" dark blue gray 100V/240V',
            tag : 'Monitor',
            precio: 70000,
            stock : 10,
            id:2,
            descripcion: 
            [
                'Pantalla led de 22".',
                'Tiene una resolución de 1920px-1080px.',
                'Relación de aspecto de 16:9.',
                'Panel IPS.',
                'Su brillo es de 250cd/m².',
                'Tipos de conexión: HDMI 1.4, D-Sub.',
                'Es reclinable.',
                'Comodidad visual en todo momento.'
            ],
            imagen : "image-product (4).jpg"
        },
        {
            nombre: 'Monitor gamer Philips V 221V8 LCD 21.5" negro 100V/240V',
            tag : 'Monitor',
            precio: 45000,
            stock : 10,
            id:3,
            descripcion: 
            [
                'Pantalla LCD de 21.5".',
                'Posee pantalla antirreflejo.',
                'Tiene una resolución de 1920px-1080px.',
                'Relación de aspecto de 16:9.',
                'Panel VA.',
                'Su brillo es de 200cd/m².',
                'Tipos de conexión: HDMI, Jack 3.5 mm, VGA/D-Sub.',
                'Es reclinable.',
                'Comodidad visual en todo momento.'
            ],
            imagen : "image-product (3).jpg"
        },
        {
            nombre: 'Monitor Samsung Odyssey G4 S25BG40 25 " - Negro - 100V/240V',
            tag : 'Monitor',
            precio: 157000,
            stock : 10,
            id:4,
            descripcion: 
            [
                'Pantalla Full HD de 25" con resolución 1920x1080 para imágenes nítidas y colores vibrantes',
                'Posee pantalla antirreflejo.',
                'Frecuencia de actualización de 240 Hz y tiempo de respuesta GTG de 1 ms para fluidez en juegos',
                'Tecnologías FreeSync Premium, GSync y AdaptiveSync para experiencia de juego sin interrupciones',
                'Diseño giratorio y reclinable con montaje VESA para ajustar ángulo de visión y optimizar espacio',
                'Su brillo es de 200cd/m².',
                'Reducción de luz azul para proteger tus ojos durante largas sesiones de juego',
                'Conexiones DisplayPort 1.2, 2 HDMI 2.0 y Jack 3.5 mm para conectar dispositivos fácilmente'
            ],
            imagen : "image-product (6).jpg"
        },
        {
            nombre: 'Monitor Asus VA24E VA24EHE 23.8 " - Negro - 100V/240V',
            tag : 'Monitor',
            precio: 125000,
            stock : 10,
            id:5,
            descripcion: 
            [
                'Pantalla Full HD de 23.8" para imágenes nítidas y colores vibrantes',
                'Tecnologías FreeSync y AdaptiveSync para una jugabilidad fluida',
                'Conexiones HDMI 1.4, DVID y VGA para mayor versatilidad',
                'Diseño reclinable y compatible con montaje VESA para ajuste personalizado',
                'Pantalla antirreflejo y ángulos de visión amplios para mayor comodidad'
            ],
            imagen : "image-product (2).jpg"
        },
        {
            nombre: 'Mouse De Juego Gamer Norcel N Series N271 8 Botones Rgb Negro',
            tag : 'Mouse',
            precio: 1300,
            stock : 10,
            id:6,
            descripcion: 
            [
                'Utiliza cable.',
                'Con sensor óptico.',
                'Resolución de 6400dpi.'
            ],
            imagen : "image-product (8).jpg"
        },
        {
            nombre: 'Mouse Xinua M8 Gamer Recargable Luz Rgb 6 Botones Usb Pc',
            tag : 'Mouse',
            precio: 8000,
            stock : 10,
            id:7,
            descripcion: 
            [
                'Es inalámbrico.',
                'Con sensor óptico.',
                'Incluye batería recargable.',
                'Resolución de 1600dpi.'
            ],
            imagen : "image-product (1).jpg"
        },
        {
            nombre: 'Mouse De Juego Gamer Luz Rgb Retroiluminada Ergonomico',
            tag : 'Mouse',
            precio: 3200,
            stock : 10,
            id:8,
            descripcion: 
            [
                'Utiliza cable.',
                'Con sensor óptico.',
                'Resolución de 2400dpi.'
            ],
            imagen : "image-product (7).jpg"
        },
        {
            nombre: 'Mouse gamer de juego Razer DeathAdder Essential negro',
            tag : 'Mouse',
            precio: 23000,
            stock : 10,
            id:9,
            descripcion: 
            [
                'Utiliza cable.',
                'Con sensor óptico.',
                'Con luces para mejorar la experiencia de uso.',
                'Resolución de 6400dpi.'
            ],
            imagen : "image-product (9).jpg"
        },
        {
            nombre: 'Mouse Gamer Xtrike Me Gm-510 Backlit - Gaming Pc Notebook',
            tag : 'Mouse',
            precio: 2800,
            stock : 10,
            id:10,
            descripcion: 
            [
                'Utiliza cable.',
                'Con sensor óptico.',
                'Resolución de 4800dpi.'
            ],
            imagen : "image-product (10).jpg"
        },
    ]

    const getProductById = (id) => {
        return products.find(producto => producto.id === Number(id))
    }

    const getProductCartById = (id) => {
        return cart.find(producto => producto.id === Number(id))
    }

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(producto => producto.id === Number(id))

    const addProductCart = (id, quantity) => { 
        if(isInCart(id)){
            setCart (cart.map(product => {
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart ([...cart, {...getProductById(id), quantity: quantity}])
        }
        
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    };


  return (
    <Context.Provider value={{products, getProductById, cart, setCart, addProductCart, isInCart, getProductCartById, getTotal}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider
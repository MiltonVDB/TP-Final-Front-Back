Es un Ecommerce que vende porductos de computacion. Se conforma de dos partes, el Front-end y el Back-end.

En el apartado del Fornt-end esta desarrollado con: 

react-router-dom para manejar la navegabilidad,
Se utilizan Hooks para el manejo de variables como Context, State, Effect y una libreria extra react-hook-form para poder manipular los datos de los formularios con mayor facilidad,
Para el estilo de la pagina se utilizo Bootstrap, al igual que Flexbox,
Se uso la libreria de js-cookies para poder trabajar con estos en el front,
y Axios para poder hacer las solicitudes al servidor.
El programa esta compuesto por 8 paginas:
El HOME donde se pueden visualizar todos los productos, al seleccionar uno de estos te lleva a la pagina de DETALLE del producto, donde se brindara mas datos sobre este,
el CARRITO donde por el momento no tiene funcionalidad, al entrar tiene un mensaje para poder redireccionar a la pagina de CONTACTO.
Al selecionar de la barra de Navegacon el icono del maletin iria a la pagina de ADMINISTRADOR, donde podra ver todos los productos pero con la posibilidad de poder modificarle el stock y el precio o eliminarlo,
a su vez la primera tarjeta le permite crear un nuevo producto, redirecionandolo a la pagina de CREACION DE PRODUCTO.
Para poder acceder a todas estas paginas primero debe loguearse en la pagina de LOG IN, si no, siempre lo redirrecionara a esta misma pagina, en el caso de que no tenga cuenta puede crearsela en la pagina de REGISTRO.

En el apartado Back-end se desarrollo con:

Primero tenemos a Express que se utilizo para crear el servidor y las rutas, Bcrypt para poder encriptar contraseñas, Jsonwebtoken para la creacion de TOKENs para poder hacer las validaciones de usuarios,
en la cual se trabajan a traves de Cookies gracias a cookie-parser.
La libreria de Dotenv se utilizo para crear variables de entorno, en la cual guarda ciertas variables para la configuracion del Back.
Tambien se utilizo la libreria de Cors para permitir las solicitudes de dos dominios distintos, ya que el back y el fornt no comparten el mismo.
El servidor utilizado en este proyecto fue MongoDB.
Las solicitudes que se pueden utilizar son:
Tipo GET para poder traer todos los productos o uno en especifico.
Tipo POST para la creacion de productos, crecion de usuarios o para el ingreso de usuarios.
Tipo PUT para la modificacion de los productos.
Y tipo DELETE para la eliminacion de los productos.

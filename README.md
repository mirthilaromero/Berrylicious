# Blog de cocina

En el presente proyecto desarrollaré un Blog de cocina el cual pretenderá que los usuario se registren y  suban sus recetas con imagenes y el resto de los usuarios lo comenten y valoren.

Dado que este proyecto se pensó para ser escalable pertendo para la entrega final  llegar  hasta el regirtro de usuarios dado que la idea es seguir desarrollando el posteo de recetas en el siguiente curso de backend donde generaré una base de datos (NoSQL) que alimente los posteos de las recetas y asi desarrollar y alimentar el Nav y el buscador de recetas.

 -----------------*Entrega Final*--------------------

 En esta instancia del proyecto para las alertas las mejoré con la librería Sweet alert, los datos de suscripcion se siguen guardando en el local storage, y mantengo el JSON para validar el inicio de sesion de los usuarios.

 También creé un nuevo simulador de posteo de recetas con un nuevo HTML y JS que se encarga de agregar los nuevos Item al local storage(esto es un simulador de posteo que será mejorado en el backend cuando se genere una base de Datos para la página). 

 NOTA: Los elementos que se encuentran comentados en el HTML (buscador y Nav) igualmente  se trabajarán el backend en futuras entregas.

 -----------------*Tercera Pre-entrega*--------------------

 En esta instancia del proyecto para la simulacion  del algoritmo cree 2 HTML, para suscripción y para login, cada uno de ellos tiene su archivo JS; para la lógica a su vez cree un archivo .JSON para validar el inicio de sesión de los usuarios existentes.

 También cree el archivo recetas.JS  para mostrar dinámicamente los elemenntos en el DOM.

 Los datos de suscripción se guardan en el Local Storage. y
 
 Por el momento uso el alert para saludar al usuario, en la próxima iteración pretendo saludar a través de alguna librería (no definida hasta ver la clase de librerias)

>>Cabe destacar que ya que realicé modificaciones importantes no dejé el código anterior, por lo que sugiero que de ser necesario ver el  simulador de las entregas anteriores hacerlo a través de GIT.

>> Aun debo trabajar en mejorar el HTML y CSS.


_____________________________________________________________________________________________________________________________________________________________
 
 
 -----------------*Segunda Pre-entrega*--------------------

 En esta segunda pre-entrega cambié la manera de validar el correo usando arrays, objetos y funciones de orden superior. También mejoré los alert permitiendo saludar al usuario por su nombre.

    Arrays:

    "letrasPermitidas": es un arreglo que contiene todas las letras permitidas en la dirección de correo electrónico que se va a validar. Se utiliza para verificar si cada letra del correo ingresado es permitida o no.

    "usuariosRegistrados": es un arreglo que contiene objetos de usuario registrados, cada uno de los cuales tiene un correo electrónico y un nombre asociado. Este arreglo se utiliza para buscar si un usuario ya está registrado con el correo electrónico ingresado. Si no está registrado se adicionará mediante el método push al array y se  saludará con el alert generado en la primera entrega mas la concatenación del nombre ingresado en el promp (¡Bienvenido a Berrylicious Jose!)


    Objetos:

    "usuarioRegistrado": es un objeto que contiene un correo electrónico y un nombre asociado. Este objeto se utiliza para buscar si un usuario ya está registrado con el correo electrónico ingresado.


    Función de orden superior:

    "Find": se utiliza para buscar un objeto específico dentro del arreglo "usuariosRegistrados" que tenga el correo electrónico ingresado y saber si ya está registrado.

    -------------Nota para el profesor / Tutor 2-----------------

En esta oportunidad fui mejorando algunas partes del css y adicioné ele un logo, nav y buscador al HTML. 

dejé comentado el código anterior.

____________________________________________________________________________________________________________________________________________________________________

-----------------Primera Pre-entrega--------------------

En esta primera pre-entrega realicé un simulador de petición de correo electrónico a través de una función (usé arrow function) llamada validarCorreo.

Declaré una variable llamada correo que contiene un promp que solicita al usuario ingresar el correo electrónico.

Luego inicialicé tres variables de tipo Boolean (tieneArroba, tienePunto y tieneLetras) que serviran más adelante de criterio de validación

También inicialicé una variable llamada  letrasPermitidas que contienen las letras del alfabeto en minúsculas y mayúscula que serviran también de criterio de validación

Para iterar sobre el string ingresado por el usuario usé un bucle del tipo for. En cada iteración verifica si tiene @, los carácteres ingresados en mayúsculas y minúsculas y si ambas condiciones se cumplen verifica que tenga punto si los resultados son true sale del bucle con un break.

Para finalizar utilicé un bucle while para verificar que el string ingresado cumple con todos los criterios de validación establecidos. Si alguno de los parámetros resulta false se genera un alert que dice "Mail inválido, por favor inténtalo de nuevo." y vuelve a arrojar el promp de solicitud.

Si las tres validaciones resultan true se hace un break  en el bucle y genera un alert que dice ¡Bienvenido a Berrylicious!

Por último llamamos a la función validarCorreo

-------------Nota para el profesor / Tutor-----------------

 El diseño del proyecto está en construcción, al no haber realizado el curso de desarrollo web no tengo proyecto base así que los HTML y CSS presentados van a ser modificado a lo largo del curso. 









/* let x=5
let y=13
let z=28
let a=31
let i=25 */


/* let variables=[5,8,9,3,7]
let valor1=["x","y","z","a","i",variables] */

/* for(valores1 in variables){
    document.write(valores1)+"<br>";
}
document.write("<br>")
for (valores1 of variables){
    document.write(valores1)+"<br>";
} */
/* forTremendaLocura:
for(let valorReal in valor1){
    if(valorReal == 5){
    
        for(let valorReal of variables){
            if(valorReal==7){
                continue forTremendaLocura
            }
            document.write(valorReal+"<br>");
            
            
        }
    } else {
        document.write(valor1[valorReal]+"<br>");
        
    }
} */
/* function respuestas () { 
    let respuestaDeLaPagina = prompt("hola! fuiste al partido?");
        if (respuestaDeLaPagina == "si"){
                alert("Como estuvo?");
}       else {
                alert("Que malo que no lo pudiste ver.");
}
}
respuestas() */

/* Poo */

/* class Animales{
    constructor(especie,color,edad){
        this.esp = especie;
        this.color = color;
        this.edad = edad;
        this.info = ` Soy ${this.esp}, soy ${this.color} y tengo ${this.edad} anos`;
}verinfo(){
    document.write(this.info + "<br>");
}ladrar(){
    if(this.esp == "perro"){
        alert("waow");
    }else{
        document.write(`No puedo ladrar soy un ${this.esp}! <br>`)
    }
}
}


class Perro extends Animales{
    constructor(especie, edad, color,raza){
        super(especie, edad, color);
        this.raza = raza;
    }ladrar(){
        alert(`!wow!`);
    }
}



const perro = new Perro("perro", "negro", "5","Doberman");
const pajaro = new Animales("pajaro", "negro", "2");
const gato = new Animales ("gato", "blanco", "2");

perro.verinfo();
perro.ladrar(); */


/* let cadena = "cadena de prueba";
let cadena1 = "cadena1";

let resultado = cadena.concat(cadena1);

document.write(resultado);

concat- sirve para concatenar cadenas de textos */


/* let cadena = "cadena de prueba";
let cadena1 = "cadena1";

let resultado = cadena.startsWith(cadena1);

document.write(resultado);

startsWith-sirve para saber si la segunda cadena empieza con los caracteres de la primera cadena */

/* let cadena = "cadena de prueba";
let cadena1 = "cadena1";

let resultado = cadena.endsWith(cadena1);

document.write(resultado);

endsWith-sirve para lo mismo q startsWith pero al final de las cadenas de texto */

/*let cadena = "cadena de prueba";
let cadena1 = "cadena";

let resultado = cadena.includes(cadena1);

document.write(resultado); /*

includes-sirve para encontrar si la segunda cadena esta dentro de cualquier parte de la primera cadena,
no importa si es al inicio o al final */

/* let cadena = "cadena de prueba";
let cadena1 = "cadena";

let resultado = cadena.indexOf(cadena1);

document.write(resultado);

indexOf-sirve si la segunda cadena de texto esta incluida en la primera cadena, devuelve un numero en la pocicion
donde esa segunda cadena empieza en la primera. Si devuelve -1 es q la cadena de texto no esta iincluido en la 
primera. 
lastIndexOf-hace lo mismo pero te devuelve el numero de la ultima palabra q encuentra en la cadena de texto*/

/* let cadena = "cadena de prueba";
let cadena1 = "cadena1";

let resultado = cadena.padStart(49,"_");

document.write(resultado);

padStart-sirve para rellenar mi cadena de texto cuantos numeros le diga y con el caracter q yo le diga
padEnd- hace lo mismo pero al final */
/* 
let cadena = "cadena de prueba ";
let cadena1 = "cadena1";

let resultado = cadena.repeat(2);

document.write(resultado);

repeat-sirve para repetir la cadena cuantas veces le digamos  */

/*let cadena = "cadena,de,prueba";
let cadena1 = "cadena1";

let resultado = cadena.split(",");

document.write(resultado);

 split-sirve para dividir mi cadena en el caracter q yo le diga y me devuelve la cadena como un array */
/* 
let cadena = "cadena de prueba";
let cadena1 = "cadena1";

let resultado = cadena.substring(0,8);

document.write(resultado);

substring- sirve para empezar la cadena en la posicion q le diga hasta la posicion del valor q le de */

/* let cadena = "cadena de prueba";
let cadena1 = "cadena1";

let resultado = cadena.toLowerCase();

document.write(resultado);
toUpperCase-sirve para poner toda la cadena de texto en mayuscula
toLowerCase-convierte todo la cadena de string en minuscula */
/* 
let cadena = ["Pedro", "Matias"];
let cadena1 = "cadena1";

let resultado = cadena.toString();

document.write(resultado[3]);

toString-convierte todo a una cadena de texto (objetos o cualquier cosa) */

/* let cadena = "cadena de prueba";
let cadena1 = "cadena1";

let resultado = cadena.trim();

document.write(resultado.length);

.trim - lo q hace es q me quita todo los espacios de una cadena de textos
.length - lo q hace es q me dice la cantidad de caracteres de un cadena de texto
trimStar- es logico lo q hace
trimEnd-igual */
/* 
Aqui termina los metodo de Cadenas de textos */
/* 
AQUI COMIENZA LOS METODO DE LOS ARRAYS */
/* 
let cadena = ["pedro", "maria", "Jose"];
let cadena1 = "cadena1";

let resultado = cadena.pop();

document.write(resultado);

pop - nos elimina el ultimo elemento del arrays y nos lo ensena */
/* 
let cadena = ["pedro", "maria", "Jose"];
let cadena1 = "cadena1";

let resultado = cadena.shift();

document.write(resultado);

shift-este elimina el primero y lo ense;a */

/* let cadena = ["pedro", "maria", "Jose"];
let cadena1 = "cadena1";

let resultado = cadena.push("Manuel");

document.write(resultado); /*

push-agrega un elemento al arrays y nos devuelve el numero actual de la cantidad de elementos del arrays */
/* 
let cadena = ["pedro", "maria", "Jose"];
let cadena1 = "cadena1"; 

let resultado = cadena.reverse();

document.write(resultado);

reverse- invierte los elementos del arrays */
/*
let cadena = ["pedro", "maria", "Jose"];
let cadena1 = "cadena1";

let resultado = cadena.unshift("Filipo", "manuel");

document.write(cadena);/*

unshift-nos agrega nuevos elementos al arrays en el principio y nos devuelve el nuevo valor de la cantidad 
del arrays */
/* 
let cadena = ["pedro", "maria", "Jose"];
let cadena1 = "cadena1";

let resultado = cadena.sort();

document.write(resultado);

sort - te ordena los elementos del arrays por distintas formas */
/* 
let cadena = ["pedro", "maria", "Jose","manuel","miguel"];
let cadena1 = "cadena1";

cadena.splice(0,5,"Manolo");

document.write(cadena);

splice-sirve para eliminar elementos desde la posicion q le digamos hasta el valor de la posicion q le demos
y tambien puede agregar elementos al array en la posicion q le dijismos*/

/* let cadena = ["pedro", "maria", "Jose","manuel","miguel"];
let cadena1 = "cadena1";

let resultado = cadena.join("-");

document.write(resultado);

/* join-convierte todo el array en una cadena de texto, la diferencia con toStrin es q puedo utilizar el caracteres
q quiera como separador */ 

/*let cadena = ["pedro", "maria", "Jose","manuel","miguel"];
let cadena1 = "cadena1";

let resultado = cadena.slice(0,3);/*

document.write(resultado);

slice- devuelve una cadena de texto comenzando desde los valores q le digo hasta el valor final q le digo
(no incluido). */
/* 
let cadena = ["pedro", "maria", "Jose","manuel","miguel"];
let cadena1 = "cadena1";

resultado = cadena.filter( cadena => cadena.length > 5);

document.write(resultado);

filter -Nos crea un nuevo arrays solamente con los elementos q se cumplan en la condicion de la function
q le demos */
/* 
Metodos del objeto Math */
/* 
numero = Math.sqrt(25);

document.write(numero);

Math.sqrt()- devuelve la raiza positiva de un numero */
/* 
numero = Math.cbrt(25);

document.write(numero);

Math.cbrt()- nos da la raiz cubica positiva de un numero; */
/* /* 
numero = Math.max(25);

document.write(numero);

Math.max()- nos devuelve el numero mas grande de un arrays */
/*Math.min- hace lo mismo con el minimo */

/* numero = Math.random()*100;
numero = numero.toString();
numero = numero[0] + numero[1];
document.write(numero); */

/* Math.random()-nos devuelve un numero random entre 0 y 1  */
/* 
let numero = Math.random()*100;
numero = Math.round(numero);

document.write(numero);

Math.round()-nos devuelve el numero mas cercano entre los valores contando los limites */
/* 
let numero = Math.random()*100;
numero = Math.floor(numero);

document.write(numero);

Math.floor()- nos devuelve un numero redondeado mas cercano o el mismo numero pero con limite inferior
, o sea si tengo 4.9 nos va devolver 4*/

/* numero = Math.trunc(numero);

document.write(numero);

Math.trunc()- Etso elimina los decimales de un numero y no devuelve el entero
 */
/* 

Math.PI-Nos devuelve el valor de PI
Math.E-nos devuelve el valo de la constante de euler
Math.LN10-Nos devuelve el valor de logaritmo de 10
Math.LN2-Nos devuelve el valor natural del logaritmo de 2
Math.LOG10E-Nos devuelve el valor del logaritmo de euler en base 10
Math.LOG2E-Nos devuelve el valor del logaritmo de euler en base 2
Math.SQRT2-Nos devuelve el valor de la raiz cuadrada de 2
Math.SQRT1_2-Nos devuelve el valor de la raiz de 1/2.
/* /* /*  *//*
Aqui empieza las funciones de la Consola

Funciones de Registro para la consola

-asserts()- nos devuelve un error en consola si la afirmacion es falsa, si la afirmacion es verdadera, no nos devuelve nada.
-console.clear()- nos borra todo lo q tenga la consola
-error()- nos devuelve un error en consola de la pag web.
-info()-nos devuelve un  mensaje informativo en consola (muy parecido a console.log()).
-log()- nos devuelve un  mensaje informativo pero de depuracion en consola (muy parecido a console.info()).
-table()- Esta funcion toma un argumento obligatorio: data, q debe ser un objeto, y un parametro adicional: columns y nos muestra una tabla en consola
-console.warn();- imprime mensajes de advertencia en la consola
-dir()-desplieaga una lista interactiva de las propiedades del objeto Js especificado.

Fuciones de Conteo

-count()- nos devuelve el numero de veces q se llama a count().Esta funcion tiene como argumento opcional una etiqueta.
-countReset()- nos resetea la cuenta de la funcion count()

Funciones de agrupacion

-group()- nos crea un nuevo grupo en consola donde reunir la informacion
-groupEnd()-remueve el grupo anterior 
-console.groupCollapsed()- hace lo mismo q console.group() pero inicia el grupo cerrado

Funciones de temporizador

-console.time()- nos inicia un cronometro 
-console.timeEnd-nos cierra la funcion console.time()
-console.timeLog-Nos devuelve la posicion del cronometro desde q se inicio
 */


/* DOM

Definicion
Concepto Extendido

Nodo- Un nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las
diferentes etiquetas de una lista.

document- el nodo raiz a partir derivan el resto de los nodos.
Element- nodos definidos por etiquetas html.
Text- el texto dentro de un nodo ELement se considera un nodo hijo de tipo text.
Attribute- los atributos de las etiquetas definen nodos(en js no los veremos como nodo sino como informacion
asociada al nodo tipo Element)
Comentarios y otros . los comentario y otras declaraciones como las de tipo doctype en la cabecera generan 
otros nodos. 

document - Metodos de selecion de los elementos

- getElementById() - Seleciona un elemento por el Id. 
- getElementsByTagName() - seleciona todos los elementos q coincidan con el nombre de la etiqueta especificada
- querySelector() - devuelve el primer elemento q coincida con el grupo especificado de selectores
- querySelectorAll() - desvuelve todos los elementos q coincidan con el grupo especificado de selectores

Metodos para definir. Obtener y eliminar valores de atributos

- setAttribute() - Modifica el valor de un atributos
- getAttribute() - Obtiene el valor de un atributo
- removeAttribute() - ELimina el valor de un tributo

Atributos Globales

- class - lista de elementos separados por espacios
-contentEditable - indica si elemento puede ser modificado por el usuario(bool)
-dir - indica la direcionalidad del texto
-hidden - indica se elelemento aun  es , o ya no es , relevante
-id - define un identificador unico
-style - contiene declaraciones de tipo Css para ser aplicados al elemento
-tabindex - indica si el elemento puede obtener un focus de input
-title - contiene un texto con informacion relacionada al elemento q pertenece 

Atributos de Inputs
-className
-value
-type
-accept
-form
-minlegth
-placeholder
-required

Clases,classList y metodos de classlist
-definicion y usos
-add() - a;ade una clase
-remove() - remueve una clase
-item() - devuelve la clase del indice especificado
-contains - verifica si el elemento contiene o no ,la clase especificada
-replace() -remplaza una clase por otra
-toglee() - si no tiene la clase, la agrega sino la tiene la elimina 

Obtencion y modificacion de elementos
-textContent -nos devuelve el texto de cualquier nodo
-innerText -  devuelve el texto visible de un node element
-outerText -devuelve el texto con la etiquetas html incluidas en el texto
-innerHTML - devuelve el contenido html del texto 
-outerHTML - devuelve el codigo html completo del texto

Creacion de elementos
-createElements() - es un metodo para crear node element
-createDocumentFragment()  - esto nos hace un fragmento del documento y nos los agrega
-createTextNode() - nos crea un nodo tipo texto dentro de un node element
-appendChild()  -nos agrega un elemento hijo dentro de otro elemento

Obtencion y modificacion de childs(Hijos)
-firstChild()
-lastChild()
-firstElementChild()
-lastElementChild()
-childNode()
-children()

Metodos de Childs()
-replacedChild() -nos remplaza un elemento hijo por otro
-removeChild() -nos elimina un elemento hijo 
-hasChildNodes() -verifica si el elemento padre tiene nodos Hijos

Propiedades de los Parents 
-parentElement() - nos devuelve el elemento html padre de un Nodo
-parentNode() -nos devuelve el nodo padre de un Nodo

Propiedades de los Siblings (hermanos)
-nextSibling() -nos devuelve el nodo posterior de un nodo(puede ser texto)
-previousSibling() - nos devuelve el nodo anterior de un nodo (puede ser texto)
-nextElementSibling() -nos devuelve el elemento anterior de un Nodo
-previousElementSibling() -nos devuleve el elemento posterior de un nodo ELement

Nodos-Extras
closest() -nos devuelve el nodo padre mas cercano con la especificaciones dadas  */
/* 
Window
Introduccion a Window

-Hereda las propiedades de EventTarget
-open() -carga un recurso en el contexto de un nuevo navegador o un q ya existe.
-close() - ciera la ventana actual , o la ventana en la q se llamo.
-closed - indica si la ventana referenciada esta cerrada o no.
-stop() - destiene la carga de recursos en el contexto de  navegacion actual.
-alert() - muestra un cuadro de alerta con el contenido especificado y un boton de aceptar.
-print() - Abre el cuadro de dialogo Imprimir para imprimir el documento actual.
-prompt() -Abre un cuadro de dialogo con un mensaje q solicita al usuario un dato (String).
-confirm() - Abre un cuadro de dialogo con un mensaje y dos botones : Aceptar y cancelar.

-screen - devuelve una referencia al objeto de pantalla asociado a una ventana.
-screenLeft - devuelve la distancia vertical entre el borde izquierdo del navegador y el borde izquierdo
de la pantalla.
-screenTop - devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la
pantalla.
-scrollx - devuelve el numero de pixeles q el documento se desplaza actualmente horizontalmente.
-scrolly - devuelve el numero de pixeles q el documento se desplaza actualmente verticalmente.
-scroll() - desplaza la ventana a un lugar particular en el documento. (Con options y con pocisiones).

-minimize() -minimiza la ventana.
-resizeBy() - cambia el tama;o de la ventana actual en una cantidad especifica.
-resizeTo() -redimensiona dinamicamente la ventana.
-moveBy() - mueve la ventana en una ubicacion relativa.
-moveTo() -mueve la ventana en una ubicacion absoluta.

-Objetos BarProp
            _locationBar
            _menubar
            _personalbar
            _scrollbar
            _statusbar
            _toolbar

Location
    -window.location.href   ---------> (devuelve el href (url) de la pagina actual)
    -window.location.hostname   --------> (desvuelve el nombre de dominio del servidor web)
    -window.location.pathname --------> (devuelve la ruta y el nombre de archivo de la pagina actual)
    -window.location.protocol --------- (devuelve el protocolo web utilizado (http: o https:))
    -window.location.assign() --------> (carga un nuevo documento)
     */

/*eventos
*Definición
*"event handler" o de eventos
*Escucha de eventos o "Event Listeners"
*El objeto Event
*Flujo de Eventos o "event flow"
*Event Bubbling vs Event Capturing
*event.stopPropagation()

Eventos del Mouse
*click- ocurre con un click
*dblclick-ocurre con un doble click
*mouseover-ocurre cuando el puntero se mueve sobre el elemento o sobre uno de sus hijos
*mouseout-ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios
-----otros------
*contextmenu-ocurre con un click en el boton derecho en un elemento para abrir un menu contextual
*mouseenter-ocurre cuando el puntero se mueve sobre un elemento
*mouseleave-ocurre cuando el puntero se mueve fuera de un elemento
*mouseup-ocurre cuando un usuario suelta un botondel mouse sobre un elemento
*mousemove-ocurre cuando el puntero se mueve mientras esta sobre un elemento

Eventos de teclado
*keypress-ocurre cuando una tecla se presiona
*keydown-ocurre cuando una tecla se deja de presionar
*onkeyup-ocurre despues de q los dos eventos anteriores hayan concluido consecutivamente

Eventos de la Interfaz
*abort-ocurre cuando un elemento madre elimina a su hijos
*error-ocurre cuando sucede un error durante la carga de un archivo multimedia
*load-ocurre cuando un objeto se ha cargado
*beforeunload-ocurre antes de que el documento este a puntode descargarse
*unload-ocurre una vez se ha cargado la pagina/*




























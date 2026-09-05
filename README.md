📋 Manejo Como Chano — Organizador de Tareas

Aplicación de consola desarrollada en JavaScript utilizando Node.js, cuyo objetivo es gestionar tareas mediante un menú interactivo.

El programa permite crear, visualizar, buscar y editar tareas, utilizando estructuras propias de la programación estructurada, como funciones, condicionales, ciclos, switch, arreglos y objetos.

🚀 Funcionalidades

El programa cuenta con un menú principal que permite:

➕ Agregar una tarea
👀 Mostrar tareas
🔎 Buscar tareas
🚪 Salir
➕ Agregar tareas

Al crear una tarea se solicita:

Título
Descripción
Fecha de vencimiento
ID

Además, cada tarea se crea inicialmente con:

Estado: Pendiente
Fecha de creación
Fecha de edición
Dificultad: ⭐ ☆ ☆

El programa realiza validaciones para evitar datos incorrectos, como títulos o descripciones vacías, IDs repetidos y fechas inválidas.

Las tareas se almacenan en un arreglo y posteriormente se ordenan alfabéticamente según su título.

👀 Mostrar tareas

Es posible visualizar las tareas según diferentes estados:

Todas
Pendientes
En curso
Terminadas
Canceladas

También se puede seleccionar una tarea para visualizar todos sus datos y, si se desea, editarla.

🔎 Buscar tareas

El sistema permite buscar tareas introduciendo una palabra o frase.

La búsqueda se realiza sobre el título de cada tarea y no distingue entre mayúsculas y minúsculas.

Por ejemplo, si existe una tarea llamada:

Estudiar JavaScript

se puede encontrar buscando:

javascript

o incluso:

Java

✏️ Editar tareas

Desde la visualización detallada se pueden modificar diferentes atributos:

Descripción
Fecha de vencimiento
Estado
Dificultad

Los estados disponibles son:

Pendiente
En curso
Terminada
Cancelada

La dificultad se representa mediante estrellas:

Fácil → ⭐ ☆ ☆
Difícil → ⭐ ⭐ ☆
Muy difícil → ⭐ ⭐ ⭐

También se actualiza automáticamente la fecha de edición cada vez que una tarea es modificada.

🛠️ Tecnologías utilizadas
JavaScript
Node.js
Módulo readline/promises
Programación estructurada

El programa utiliza readline/promises para permitir la entrada de datos desde la terminal de manera asíncrona.

const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
📂 Estructura principal del programa

El código se encuentra organizado mediante diferentes funciones:

Función	Descripción
tarea()	Construye una nueva tarea
agregarTarea()	Permite crear y almacenar tareas
ordenar()	Ordena las tareas alfabéticamente
mostrar()	Devuelve los datos de una tarea
editar()	Permite modificar una tarea
vertareas()	Muestra y filtra las tareas
mostrar_segun_contenga()	Busca tareas según su título
main()	Controla el menú principal

Las tareas son almacenadas en un arreglo:

let arreglo = [];

y cada nueva tarea se incorpora mediante:

arreglo.push(tareaNueva);
📚 Análisis del lenguaje JavaScript
Parte A
1. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?

Las reglas formales que definen cómo se escribe y funciona JavaScript están establecidas por el estándar ECMAScript.

Entre sus principales características se encuentran:

Sintaxis: determina cómo se escriben las instrucciones.
Tipos de datos: string, number, boolean, null, undefined y object.
Estructuras de control: if/else, while, for y switch.
Funciones: permiten organizar el código en bloques reutilizables.
ECMAScript: es la especificación que define las características y reglas del lenguaje.

En este proyecto se pueden observar varias de estas características, por ejemplo:

while (op[0] < 1 || op[0] > 4) {
    console.log("error ingrese un numero del 1 al 4");
}

y:

switch(op[0]) {
    case 1:
        await agregarTarea(arreglo);
        break;

    case 2:
        await vertareas(arreglo);
        break;
}
2. Creencias de los profesionales: ¿Qué características particulares del lenguaje se cree que sean "mejores" que en otros lenguajes?

Algunas características destacadas de JavaScript son:

🌐 Ubicuidad: puede ejecutarse directamente en navegadores.
⚡ Dinamismo: no es necesario declarar explícitamente el tipo de una variable.
🔄 Flexibilidad: puede utilizarse tanto en frontend como en backend mediante Node.js.
📦 Gran ecosistema: dispone de una enorme cantidad de librerías y herramientas.
📖 Curva de entrada relativamente baja: sus conceptos básicos son accesibles para quienes están comenzando a programar.
Parte B — JavaScript y programación estructurada
1. ¿Tiene una sintaxis y una semántica bien definida? ¿Existe documentación oficial?

Sí.

La sintaxis y semántica de JavaScript están definidas mediante el estándar ECMAScript (ECMA-262).

También existe documentación ampliamente utilizada para consultar las características del lenguaje, como MDN Web Docs.

En este proyecto se utilizan elementos definidos por JavaScript como:

Variables
Funciones
Condicionales
Ciclos
Arreglos
Objetos
switch
Métodos de los arreglos
2. ¿Es posible comprobar el código producido en ese lenguaje?

Sí.

El código JavaScript puede comprobarse y ejecutarse de diferentes maneras:

Mediante las herramientas de desarrollo de un navegador.
Ejecutándolo con Node.js desde una terminal.
Utilizando herramientas de testing.
Utilizando linters como ESLint para detectar determinados problemas en el código.

En este proyecto, el programa se ejecuta desde la terminal utilizando Node.js.

3. ¿Es confiable?

JavaScript puede considerarse parcialmente confiable.

Una de sus características que puede producir errores inesperados es la coerción implícita de tipos.

Por ejemplo:

"5" + 3

produce:

"53"

mientras que:

"5" - 3

produce:

2

Sin embargo, utilizando correctamente las estructuras del lenguaje y realizando validaciones, es posible desarrollar aplicaciones funcionales y confiables.

En este proyecto se realizan diferentes validaciones mediante while, if y try/catch para controlar la entrada del usuario.

4. ¿Es ortogonal?

JavaScript es parcialmente ortogonal.

La ortogonalidad hace referencia a que las diferentes características de un lenguaje puedan combinarse de manera consistente y predecible.

JavaScript posee algunas particularidades que reducen su ortogonalidad, como:

typeof null === "object"

o determinados comportamientos relacionados con la conversión de tipos.

Sin embargo, utilizando las características correspondientes al paradigma estructurado, como variables, funciones, condicionales y ciclos, el comportamiento resulta bastante predecible.

5. ¿Cuáles son sus características de consistencia y uniformidad?

JavaScript presenta ciertas inconsistencias, principalmente relacionadas con la coerción de tipos y algunas características particulares del lenguaje.

Por ejemplo:

"5" + 3

y:

"5" - 3

no producen el mismo tipo de resultado.

A pesar de esto, las estructuras utilizadas en la programación estructurada, como:

if
while
for
switch
funciones

presentan un comportamiento suficientemente uniforme para desarrollar programas organizados.

6. ¿Es extensible? ¿Hay subconjuntos de ese lenguaje?

Sí. JavaScript es un lenguaje muy extensible.

Puede ampliarse mediante:

Librerías.
Frameworks.
Módulos.
Nuevas características incorporadas al estándar ECMAScript.

También existen tecnologías relacionadas como TypeScript, que agrega tipado estático sobre JavaScript.

En este proyecto se utiliza además el módulo:

require('readline/promises')

para gestionar la entrada de datos desde la terminal.

7. El código producido, ¿es transportable?

Sí. La portabilidad es una de las características importantes de JavaScript.

El código puede ejecutarse en diferentes entornos, entre ellos:

🌐 Navegadores modernos.
💻 Sistemas operativos que dispongan de Node.js.
📱 Entornos para desarrollo de aplicaciones móviles mediante tecnologías basadas en JavaScript.

Una posible limitación aparece cuando se utilizan características muy nuevas de ECMAScript que no son compatibles con determinados entornos.

🧠 Conceptos de programación utilizados

Este proyecto permite aplicar diferentes conceptos fundamentales de programación estructurada.

Variables

Se utilizan variables declaradas principalmente mediante let y const.

let arreglo = [];
let op = [2];
Funciones

El programa se divide en diferentes funciones para organizar las responsabilidades:

async function agregarTarea(arreglo) {
    // ...
}
Condicionales

Se utilizan estructuras if, else if y else para tomar decisiones.

if (descripcion.trim() === "") {
    throw new Error("La descripcion no puede estar vacia");
}
Ciclos

Se utilizan ciclos while y do...while para repetir operaciones y validar entradas.

Arreglos

Las tareas se almacenan dentro de un arreglo:

let arreglo = [];

y se agregan mediante:

arreglo.push(tareaNueva);
Objetos

Cada tarea se representa mediante un objeto creado a partir de la función constructora:

const tareaNueva = new tarea(titulo, descripcion, fechav, id);
Manejo de errores

Se utiliza try/catch para controlar errores producidos durante la validación de datos:

try {
    // validación
} catch(error) {
    console.log(error.message);
}
▶️ Ejecución

Para ejecutar el programa es necesario tener instalado Node.js.

Desde la terminal, ubicándose en la carpeta del proyecto, ejecutar:

node nombre-del-archivo.js

Por ejemplo:

node main.js

Una vez iniciado, aparecerá el menú principal:

*******BIENVENIDOS A MANEJO COMO CHANO TU ORGANIZADOR DE TAREAS*******

A continuacion seleccione la operacion que desea realizar:

1. Para agregar una tarea
2. Para mostrar las tareas
3. Para buscar tareas
4. Para salir
🎯 Objetivo del proyecto

El objetivo del proyecto es aplicar los conceptos fundamentales del lenguaje JavaScript dentro del paradigma de programación estructurada, desarrollando una aplicación de consola que permita gestionar tareas.

A través del proyecto se trabajan conceptos como:

Variables
Tipos de datos
Funciones
Arreglos
Objetos
Condicionales
Ciclos
switch
Validación de datos
Manejo de errores
Entrada y salida por consola
Manipulación de fechas
Métodos de arreglos
👨‍💻 Proyecto académico

Proyecto realizado como parte del estudio del lenguaje JavaScript y del paradigma de programación estructurada.

Lenguaje: JavaScript
Entorno: Node.js
Interfaz: Consola
Paradigma: Programación estructurada

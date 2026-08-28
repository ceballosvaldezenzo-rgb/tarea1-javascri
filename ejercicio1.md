Parte A:

 1. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?
    RTA:
    Son las reglas formales que definen cómo se escribe y funciona JavaScript. Las principales son:
    Sintaxis — cómo se escriben las instrucciones. Por ejemplo, los bloques van entre llaves {}, las sentencias terminan en ;, las variables se declaran con var, let o const.
    Tipos de datos — string, number, boolean, null, undefined, object.
    Estructuras de control — if/else, while, for, switch que son las propias del paradigma estructurado.
    Funciones — se declaran con function y pueden recibir parámetros y retornar valores.
    Estándar ECMAScript — es la especificación oficial que define todas estas reglas. Cada versión (ES5, ES6, etc.) agrega o modifica reglas.

 2. Creencias de los profesionales: ¿Qué características particulares del lenguaje se
 cree que sean "mejores" que en otros lenguajes?
 RTA:
 Ubicuidad — corre en cualquier navegador sin instalación. Ningún otro lenguaje tiene eso nativamente en la web.
 Dinamismo — no necesitás declarar tipos, lo que hace el código más rápido de escribir.
 Flexibilidad — podés usarlo tanto en el frontend (navegador) como en el backend (Node.js) con el mismo lenguaje.
 Ecosistema enorme — npm tiene millones de librerías disponibles.
 Curva de entrada baja — es considerado fácil de aprender para principiantes comparado con lenguajes como C++ o Java.

Parte B:
 Considera el lenguaje JavaScript acotado al paradigma de programación estructurada y analízalo en términos de los ejes propuestos para la elección de un lenguaje de programación (¿Cómo elegir un lenguaje? ) y responde:

    1. ¿Tiene una sintaxis y una semántica bien definida? ¿Existe documentación oficial?
    RTA:
    Sí. La sintaxis y semántica están definidas por el estándar ECMAScript (ECMA-262), mantenido por ECMA International. La documentación oficial más usada es MDN Web Docs (Mozilla), que cubre todo el lenguaje con ejemplos.
    2. ¿Es posible comprobar el código producido en ese lenguaje?
    RTA:
    Sí, de varias formas:

    En el navegador con las DevTools (F12)
    Con Node.js en la terminal
    Con herramientas de testing como Jest
    Con linters como ESLint que detectan errores antes de ejecutar

    3. ¿Es confiable?
    RTA:
    Parcialmente. JavaScript tiene comportamientos inconsistentes que pueden generar bugs difíciles de detectar, como la coerción de tipos implícita ("5" + 3 = "53" pero "5" - 3 = 2). Sin embargo para el paradigma estructurado, donde el código es más simple y predecible, es suficientemente confiable. TypeScript surgió justamente para agregar mayor confiabilidad.

    4. ¿Es ortogonal?
    RTA:
    Parcialmente. La ortogonalidad significa que las características del lenguaje se combinan de forma consistente y predecible. JavaScript no es completamente ortogonal porque tiene inconsistencias como typeof null === "object" o el comportamiento de this que varía según el contexto. Sin embargo en el paradigma estructurado, donde solo se usan variables, funciones y estructuras de control, la ortogonalidad es aceptable

    5. ¿Cuáles son sus características de consistencia y uniformidad?
    RTA:
    JavaScript es inconsistente en algunas áreas como la coerción de tipos mencionada antes. Sin embargo dentro del paradigma estructurado es bastante uniforme: las estructuras de control (if, for, while) se comportan de forma predecible y consistente con otros lenguajes como C o Java. Las funciones también tienen un comportamiento uniforme cuando se usan de forma simple.


    6. ¿Es extensible? ¿Hay subconjuntos de ese lenguaje?
    Sí, es muy extensible:
    RTA:
    Se puede extender con librerías y frameworks (React, Express, etc.)
    Existe TypeScript que es un superconjunto que agrega tipado estático
    El propio ECMAScript se actualiza anualmente agregando nuevas características
    Hay subconjuntos como el modo estricto ("use strict") que restringe comportamientos problemáticos
    
    7. El código producido, ¿es transportable?
    Sí, es uno de sus puntos más fuertes. Un código JavaScript puede ejecutarse en:

    Cualquier navegador moderno (Chrome, Firefox, Safari, Edge)
    Cualquier sistema operativo mediante Node.js
    Dispositivos móviles mediante React Native o similares

    La única limitación es que versiones muy nuevas de ECMAScript pueden no ser soportadas por navegadores viejos, pero herramientas como Babel permiten transpilar el código para mayor compatibilidad.
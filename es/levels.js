/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// Hash the array and compare the arrays!
// Key
// a = small apple .small
// A = apple
// o = small orange, .small
// O = orange
// p = small pickle, .small
// P = pickle
// () = plate open / close
// {} = fancy plate open / close
// [] = bento open close tags

var levels = [
  {
    helpTitle : "Selecciona los elementos por su tipo",
    selectorName : "Selector de Tipo",
    doThis : "Selecciona los platos",
    selector : "plate",
    syntax : "A",
    help : "Selecciona todos los elementos de tipo <strong>A</strong>. El tipo se refiere al tipo de etiqueta, así que <tag>div</tag>, <tag>p</tag> y <tag>ul</tag> con todos tipos de elementos diferentes.",
    examples : [
      '<strong>div</strong> selecciona todos los elementos <tag>div</tag>.',
      '<strong>p</strong> selecciona todos los elementos <tag>p</tag>.',
      ],
    board: "()()"
  },
  {
    doThis : "Selecciona las loncheras bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "Selecciona elementos por su tipo",
    selectorName : "Selector de Tipo",
    help : "Selecciona todos los elementos de tipo <strong>A</strong>. El tipo se refiere al tipo de etiqueta, así que <tag>div</tag>, <tag>p</tag> y <tag>ul</tag> con todos tipos de elementos diferentes.",
    examples : [
      '<strong>div</strong> selecciona todos los elementos <tag>div</tag>.',
      '<strong>p</strong> selecciona todos los elementos <tag>p</tag>.',
      ],
    board: "[]()[]"
  },
  {
    doThis : "Selecciona el plato decorado",
    selector : "#fancy",
    selectorName: "Selector por ID",
    helpTitle: "Selecciona elementos con un ID",
    syntax: "#id",
    help : 'Selecciona el elemento con el correspondiente atributo <strong>id</strong>. También puedes combinar el selector ID con un selector de tipo.',
    examples : [
      '<strong>#cool</strong> seleccionará cualquier elemnto con <strong>id="cool"</strong>',
      '<strong>ul#long</strong> seleccionará <strong>&lt;ul id="long"&gt;</strong>'
    ],
    board: "{}()[]"
  },
  {
    helpTitle: "Selecciona un elemento dentro de otro elemento",
    selectorName : "Selector Descendiente",
    doThis : "Seleciona la manzana en el plato",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",

    help : "Selecciona todos los <strong>B</strong> dentro de <strong>A</strong>. Aquí, <strong>B</strong> es el elemento descendiente, lo que significa que está dentro de otro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleccionará todos los <strong>&lt;strong&gt;</strong> que son descendientes de cualquier <strong>&lt;p&gt;</strong>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> seleccionará cualquier <strong>&lt;span&gt;</strong> que es descendiente de cualquier elemento con <strong>id="fancy"</strong>',
    ],
    board: "[](A)A"
  },
  {
    doThis : "Selecciona el pepino en el plato decorado",
    selector : "#fancy pickle",
    helpTitle: "Combina los selectores de Descendientes & ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Puedes combiar cualquier selector con el selector de descendiente.',
    examples : [
      '<strong>#cool&nbsp;span</strong> seleccionará <strong>&lt;span&gt;</strong> elementos que están dentro de elementos con <strong>id="cool"</strong>'
    ],
    board: "[O]{P}(P)"
  },
  {
    doThis : "Selecciona las manzanas pequeñas",
    selector : ".small",
    selectorName: "Selector de Clase",
    helpTitle: "Selecciona elementos por su clase",

    syntax: ".classname",
    help : 'El selector de Clase seleccionará todos los elementos con ese atributo de clase. Los elementos pueden tener sólo un ID, pero muchas clases.',
    examples : [
    '<strong>.neato</strong> seleccionará elementos con <strong>class="neato"</strong>'
    ],

    board: "Aa(a)()"
  },
  {
    doThis : "Selecciona las naranjas pequeñas",
    selector : "orange.small",
    helpTitle: "Combina el selector de Clase",
    syntax: "A.className",
    help : 'Puedes combiar el selector de clase con otros selectores, como el selector de tipo.',
    examples : [
      '<strong>ul.important</strong> seleccionará elementos <strong>&lt;ul&gt;</strong> que tienen <strong>class="important"</strong>',
      '<strong>#big.wide</strong> seleccionará elementos con <strong>id="big"</strong> que también tienen  <strong>class="wide"</strong>'
    ],
    board: "Aa[o](O)(o)"
  },
  {
    doThis : "Selecciona las naranjas pequeñas en las loncheras bento",
    selector : "bento orange.small",
    syntax: "¡Pon tu esfuerzo en esto!",
    helpTitle: "Tú puedes hacerlo...",
    help : '¡Combina lo que has aprendido en los últimos niveles para resolver éste!',
    board: "A(o)[o][a][o]"
  },
  {
    doThis : "Selecciona todos los platos y bentos",

    selector : "plate,bento",
    selectorName : "Combinador de Coma",
    helpTitle: "Combina, selectores, con... ¡comas!",
    syntax : "A, B",
    help : 'Gracias a la tecnología Shatner, éste seleccionará elementos <strong>A</strong> y <strong>B</strong>. Puedes combinar cualquier selector de esta manera, y puedes especificar más que dos.',
    examples: [
    '<strong>p, .fun</strong> seleccionará elementos <tag>p</tag> también como todos los elementos con <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> seleccionará elementos <tag>a</tag>, <tag>p</tag> y <tag>div</tag>'
    ],
    board: "pP(P)[P](P)Pp"
  },
  {
    doThis : "¡Selecciona todas las cosas!",
    selector : "*",
    selectorName:  "El Selector Universal",
    helpTitle: "¡Puedes seleccionar todo!",
    syntax : "*",
    help : '¡Puedes seleccionar todos los elementos con el selector universal! ',
    examples : [
      '<strong>p *</strong> seleccionará cada elemento dentro de todos los elementos <strong>&lt;p&gt;</strong>.'
    ],
    board: "A(o)[][O]{)"
  },
  {
    doThis : "Selecciona todo en un plato",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combina el Selector Universal",
    help : 'Este seleccionará elementos dentro de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleccionará cada elemento dentro de todos los elementos <strong>&lt;p&gt;</strong>.',
      '<strong>ul.fancy *</strong> seleccionará todos los elementos dentro de <strong>&lt;ul class="fancy"&gt;</strong>.'
    ],
    board: "{o}(P)a(A)"
  },
  {
    doThis : "Selecciona cada manzana que está al lado de un plato",
    selector : "plate + apple",
    helpTitle: "Selecciona un elemento que directamente le sigue a otro elemento",
    selectorName: "Selector de Hermano Adyacente",
    syntax : "A + B",
    help : "Esto seleccionará elementos <strong>B</strong> que directamente le sigan a <strong>A</strong>. Elementos que siguen a otros son llamados hermanos. Están en el mismo nivel, o profundidad. <br/><br/>En el esquema HTML para este nivel, los elementos que tienen la misma indentación son hermanos.",
    examples : [
      '<strong>p + .intro</strong> seleccionará todos los elementos con <strong>class="intro"</strong> que le sigan directamente a <tag>p</tag>',
      '<strong>div + a</strong> seleccionará cada elemento <tag>a</tag> que le siga a <tag>div</tag>'
    ],
    board: "[a]()a()Aaa"
  },
  {
    selectorName: "Selector de Hermano",
    helpTitle: "Selecciona elementos que siguen a otro elemento",
    syntax: "A ~ B",
    doThis : "Selecciona todos los pepinos a la derecha de un bento",
    selector : "bento ~ pickle",
    help : "Puedes seleccionar todos los hermanos de un elemento que le sigue. Esto es como el Selector Adyacete (A + B) excepto que obtiene todos los elementos siguientes en lugar de uno solo.",
    examples : [
      '<strong>A ~ B</strong> seleccionará elementos <strong>B</strong> que sigan a un <strong>A</strong>'
    ],
    board: "P[o]pP(P)(p)"
  },
  {
    selectorName: "Selector Hijo",
    syntax: "A > B&nbsp;",
    doThis : "Selecciona la manzana directamente en un plato",
    selector : "plate > apple",
    helpTitle: "Selecciona los hijos directos de un elemento",
    help : "Puedes seleccionar los elementos que son hijos directos de otros elementos. Un elemento hijo es cualquier elemento que está anidado directamente en otro elemento. <br><br>Elementos que están anidados más profundamente que eso, se les llama elementos descendientes.",
    examples : [
      '<strong>A > B</strong> seleccionará elementos <strong>B</strong> que son hijos directos de <strong>A</strong>'
    ],
    board: "([A])(A)()Aa"
  },
  {
    selectorName: "Seudo-selector de Primer Hijo",
    helpTitle: "Selecciona un elemento primer hijo dentro de otro elemento",
    doThis : "Selecciona la naranja de encima",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Puedes seleccionar el elemento primer hijo. Un elemento hijo es cualqueir elemento que está directamente anidado dentro de otro elemento. Puedes combinar este seudo-selector con otros selectores.",
    examples : [
      '<strong>:first-child</strong> seleccionará elementos primer hijo.',
      '<strong>p:first-child</strong> seleccionará elementos primer hijo <strong>&lt;p&gt;</strong>.',
      '<strong>div p:first-child</strong> seleccionará elementos primer hijo <strong>&lt;p&gt;</strong> que están en un  <strong>&lt;div&gt;</strong>.'
    ],
    board: "[]()(OOO)p"
  },
  {
    selectorName: "Seudo-selector de Único Hijo",
    helpTitle: "Selecciona un elemento que es el único elemento dentro de otro.",
    doThis : "Selecciona la manzana y el pepino en los platos",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Puedes seleccionar cualquier elemento que es el único elemento dentro de otro.",
    examples : [
      '<strong>span:only-child</strong> selecciona los elementos <strong>&lt;span&gt;</strong> que son los hijos únicos de cual otro elemento.',
      '<strong>ul li:only-child</strong> selecciona el único elemento <strong>&lt;li&gt;</strong> que exist en un <strong>&lt;ul&gt;</strong>.'
    ],
    board: "(A)(p)[]P(oO)p"
  },
  {
    selectorName: "Pseudo-selector del último hijo",
    helpTitle: "Selecciona el último elemento dentro de otro elemento",
    doThis : "Selecciona la manzana pequeña y el pepinillo",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Puedes usar este selector para seleccionar un elemento que sea el último elemento hijo dentro de otro elemento. <br><br>Consejo Pro &rarr; En los casos donde solo hay un elemento, ése elemento cuenta como el primer hijo, único hijo y último hijo!",
    examples : [
      '<strong>:last-child</strong> seleccionará los últimos elementos hijos.',
      '<strong>span:last-child</strong> seleccionará los <strong>&lt;span&gt;</strong> que sean los últimos hijos.',
      '<strong>ul li:last-child</strong> selecciona el último <strong>&lt;li&gt;</strong> dentro de cada <strong>&lt;ul&gt;</strong>.'
    ],
    board: "{a)()(oO)p"
  },
  {
    selectorName: "Pseudo-selector del Nsimo hijo",
    helpTitle: "Selecciona un elemento por su orden dentro de otro elemento",
    doThis : "Selecciona el 3er plato",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",

    help : "Selecciona el <strong>nsimo</strong> (Ejm: 1ro, 3ro, 12vo etc.) elemento hijo dentro de otro elemento.",
    examples : [
      '<strong>:nth-child(8)</strong> selecciona cada elemento que es el 8vo hijo de otro elemento.',
      '<strong>div p:nth-child(2)</strong> selecciona el segundo <strong>p</strong> en cada <strong>div</strong>',
    ],
    board: "()()(){}"
  },
  {
    selectorName: "Selector para el Nsimo último hijo",
    helpTitle: "Selecciona un elemento por orden dentro de otro elemento, contando desde el final",
    doThis : "Selecciona el 1er bento",
    selector : "bento:nth-last-child(4)",
    syntax: ":nth-last-child(A)",
    help : "Selecciona los elementos hijos desde abajo. Esto es como el Nsimo hijo, pero contando desde el final!",
    examples : [
      '<strong>:nth-last-child(2)</strong> seleccionará el penúltimo elemento hijo.'
    ],
    board: "()[]a(OOO)[]"
  },
  {
    selectorName: "Selector del Primero de un tipo",
    helpTitle: "Selecciona el primer elemento de un tipo específico",
    doThis : "Selecciona la primera manzana",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Selecciona el primer elemento de ese tipo dentro de otro elemento.",
    examples : [
      '<strong>span:first-of-type</strong> selecciona el primer <strong>&lt;span&gt;</strong> en cualquier elemento.'
    ],
    board: "Aaaa(oO)"
  },
  {
    selectorName: "Selector del Nsimo de un tipo",
    // helpTitle: "Selector del Nsimo de un tipo",
    doThis: "Selecciona todos los platos pares",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selecciona un elemento específico basado en su tipo y el orden dentro de otro elemento - incluso instancias pares o impares de ese elemento.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selecciona la segunda instancia de un <strong>&lt;div&gt;</strong>.',
      '<strong>.example:nth-of-type(odd)</strong> seleccionará las instancias impares de la clase example.'
    ],
    board: "()()()(){}()"
  },
  {
    selectorName: "Selector para el Nsimo-de-un-tipo con Fórmula",
    // helpTitle: "Selector para el Nsimo-de-un-tipo con Fórmula",
    doThis: "Selecciona cada 2ndo plato, empezando desde el 3ro",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "La fórmula nsimo-del-tipo selecciona cada enésimo elemento, empezando la cuenta desde una instancia específica dentro de ese elemento.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selecciona cada 6ta instancia de un <tag>span</tag>, comenzando desde (e incluyendo) la segunda instancia.'
    ],
    board: "()(p)(a)()(A)()"
  },

  {
    selectorName: "Selector Solo de un Tipo",
    helpTitle: "Selecciona elementos que son los únicos de su tipo",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Selecciona la manzana en el plato del centro.",
    help : "Selecciona el único elemento de su tipo dentro de otro elemento.",
    examples : [
      '<strong>p span:only-of-type</strong> selecciona un <tag>span</tag> dentro de cualquier <tag>p</tag> si es el único <tag>span</tag> ahí dentro.'
    ],
    board: "(aA)(a)(p)"
  },

  {
    selectorName: "Selector para el Último de un Tipo",
    helpTitle: "Selecciona el último elemento de un tipo específico",
    doThis : "Selecciona la segunda manzana y naranja",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Selecciona cada último elemento de su tipo dentro de otro elemento. Recuerda que tipo se refiere al tipo de tag, así que <tag>p</tag> y <tag>span</tag> son diferentes tipos. <br><br> Me pregunto si así es como el último dinosaurio fue seleccionado antes de pasar a la extinción.",
    examples : [
      '<strong>div:last-of-type</strong> selecciona el último <strong>&lt;div&gt;</strong> en cada elemento.',
      '<strong>p span:last-of-type</strong> selecciona el último <strong>&lt;span&gt;</strong> en cada <strong>&lt;p&gt;</strong>.'
    ],
    board: "ooPPaa"
  },
  {
    selectorName: "Selector para elementos Vacíos",
    helpTitle: "Selecciona los elementos que no tienen hijos",
    doThis : "Selecciona los bentos vacíos",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Selecciona los elementos que no tienen otros elementos dentro de ellos.",
    examples : [
      '<strong>div:empty</strong> seleccionará todos los elementos <strong>&lt;div&gt;</strong> que estén vacíos.'
    ],
    board: "[][p][][]"
  },
  {
    selectorName: "Pseudo-clase de Negación",
    helpTitle: "Selecciona todos los elementos que no concuerden con el selector de negación",
    doThis : "Selecciona las manzanas grandes",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Puedes usar esto para seleccionar todos los elementos que no concuerden con el selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> seleccionará elementos que no tengan <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> seleccionará cada <tag>div</tag> que no sea un primer elemento hijo.',
      '<strong>:not(.big, .medium)</strong> seleccionará elementos que no tengan <strong>class="big"</strong> o <strong>class="medium"</strong>.'
    ],
    board: "{a}(A)A(o)p"
  }
];

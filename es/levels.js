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
    doThis : "Seleciona la manza en el plato",
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
      '<strong>ul.important</strong> seleccionará <strong>&lt;ul&gt;</strong> elementos que tienen <strong>class="important"</strong>',
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
    help : 'Gracias a la tecnología Shatner, este seleccionará elementos <strong>A</strong> y <strong>B</strong>. Puedes combinar cualquier selector de esta manera, y puedes especificar más que dos.',
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
    selectorName: "General Sibling Selector",
    helpTitle: "Select elementos that follows another element",
    syntax: "A ~ B",
    doThis : "Select every pickle to the right of the bento",
    selector : "bento ~ pickle",
    help : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elementos instead of one.",
    examples : [
      '<strong>A ~ B</strong> seleccionará <strong>B</strong> that follow a <strong>A</strong>'
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
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Select the last element inside of another element",
    doThis : "Select the small apple and the pickle",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> seleccionará last-child elementos.',
      '<strong>span:last-child</strong> seleccionará last-child <strong>&lt;span&gt;</strong> elementos.',
      '<strong>ul li:last-child</strong> selects the last <strong>&lt;li&gt;</strong> elementos inside of any <strong>&lt;ul&gt;</strong>.'
    ],
    board: "{a)()(oO)p"
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Select an element by its order in another element",
    doThis : "Select the 3rd plate",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",

    help : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    board: "()()(){}"
  },
  {
    selectorName: "Nth Last Child Selector",
    helpTitle: "Select an element by its order in another element, counting from the back",
    doThis : "Select the 1st bento",
    selector : "bento:nth-last-child(4)",
    syntax: ":nth-last-child(A)",
    help : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
    examples : [
      '<strong>:nth-last-child(2)</strong> seleccionará second-to-last child elementos.'
    ],
    board: "()[]a(OOO)[]"
  },
  {
    selectorName: "First of Type Selector",
    helpTitle: "Select the first element of a specific type",
    doThis : "Select first apple",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Selects the first element of that type within another element.",
    examples : [
      '<strong>span:first-of-type</strong> selects the first <strong>&lt;span&gt;</strong> in any element.'
    ],
    board: "Aaaa(oO)"
  },
  {
    selectorName: "Nth of Type Selector",
    // helpTitle: "Nth of Type Selector",
    doThis: "Select all even plates",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> seleccionará odd instances of a the example class.'
    ],
    board: "()()()(){}()"
  },
  {
    selectorName: "Nth-of-type Selector with Formula",
    // helpTitle: "Nth-of-type Selector with formula",
    doThis: "Select every 2nd plate, starting from the 3rd",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
    ],
    board: "()(p)(a)()(A)()"
  },

  {
    selectorName: "Only of Type Selector",
    helpTitle: "Select elementos that are the only ones of their type",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Select the apple on the middle plate.",
    help : "Selects the only element of its type within another element.",
    examples : [
      '<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there.'
    ],
    board: "(aA)(a)(p)"
  },

  {
    selectorName: "Last of Type Selector",
    helpTitle: "Select the last element of a specific type",
    doThis : "Select the second apple and orange",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples : [
      '<strong>div:last-of-type</strong> selects the last <strong>&lt;div&gt;</strong> in every element.',
      '<strong>p span:last-of-type</strong> selects the last <strong>&lt;span&gt;</strong> in every <strong>&lt;p&gt;</strong>.'
    ],
    board: "ooPPaa"
  },
  {
    selectorName: "Empty Selector",
    helpTitle: "Select elementos that don't have children",
    doThis : "Select the empty bentos",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Selects elementos that don't have any other elementos inside of them.",
    examples : [
      '<strong>div:empty</strong> seleccionará empty <strong>&lt;div&gt;</strong> elementos.'
    ],
    board: "[][p][][]"
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all elementos that don't match the negation selector",

    doThis : "Select the big apples",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'You can use this to select all elementos that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> seleccionará elementos that do not have <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> seleccionará elementos that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    board: "{a}(A)A(o)p"
  }
];

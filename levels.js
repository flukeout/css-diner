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

var levelsEnglish = [
  {
    helpTitle : "Select elements by their type",
    selectorName : "Type Selector",
    doThis : "Select the plates",
    selector : "plate",
    syntax : "A",
    help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples : [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
      ],
    board: "()()"
  },
  {
    doThis : "Select the bento boxes",
    selector : "bento",
    syntax : "A",
    helpTitle : "Select elements by their type",
    selectorName : "Type Selector",
    help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples : [
      '<strong>div</strong> will select all <tag>div</tag> elements.',
      '<strong>p</strong> will select all <tag>p</tag> elements.',
      ],
    board: "[]()[]"
  },
  {
    doThis : "Select the fancy plate",
    selector : "#fancy",
    selectorName: "ID Selector",
    helpTitle: "Select elements with an ID",
    syntax: "#id",
    help : 'Selects the element with the <strong>id</strong> attribute. You can also combine the ID selector with the type selector.',
    examples : [
      '<strong>#cool</strong> will select any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> will select <strong>&lt;ul id="long"&gt;</strong>'
    ],
    board: "{}()[]"
  },
  {
    helpTitle: "Select an element inside another element",
    selectorName : "Descendant Selector",
    doThis : "Select the apple on the plate",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",

    help : "Selects all <strong>B</strong> inside of <strong>A</strong>. Here <strong>B</strong> is the descendant element, meaning an element that is inside of another element.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> will select all <strong>&lt;strong&gt;</strong> that are descendants of any <strong>&lt;p&gt;</strong>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> will select any <strong>&lt;span&gt;</strong> that is a descendant of any element with  <strong>id="fancy"</strong>',
    ],
    board: "[](A)A"
  },
  {
    doThis : "Select the pickle on the fancy plate",
    selector : "#fancy pickle",
    helpTitle: "Combine the Descendant & ID Selectors",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'You can combine any selector with the descendent selector.',
    examples : [
      '<strong>#cool&nbsp;span</strong> will select all <strong>&lt;span&gt;</strong> elements that are inside of elements with <strong>id="cool"</strong>'
    ],
    board: "[O]{P}(P)"
  },
  {
    doThis : "Select the small apples",
    selector : ".small",
    selectorName: "Class Selector",
    helpTitle: "Select elements by their class",

    syntax: ".classname",
    help : 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples : [
    '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'
    ],

    board: "Aa(a)()"
  },
  {
    doThis : "Select the small oranges",
    selector : "orange.small",
    helpTitle: "Combine the Class Selector",
    syntax: "A.className",
    help : 'You can combine the class selector with other selectors, like the type selector.',
    examples : [
      '<strong>ul.important</strong> will select all <strong>&lt;ul&gt;</strong> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> will select all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'
    ],
    board: "Aa[o](O)(o)"
  },
  {
    doThis : "Select the small oranges in the bentos",
    selector : "bento orange.small",
    syntax: "Put your back into it!",
    helpTitle: "You can do it...",
    help : 'Combine what you learned in the last few levels to solve this one!',
    board: "A(o)[o][a][o]"
  },
  {
    doThis : "Select all the plates and bentos",

    selector : "plate,bento",
    selectorName : "Comma Combinator",
    helpTitle: "Combine, selectors, with... commas!",
    syntax : "A, B",
    help : 'Thanks to Shatner technology, this will select all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
    '<strong>p, .fun</strong> will select all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> will select all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements'
    ],
    board: "pP(P)[P](P)Pp"
  },
  {
    doThis : "Select all the things!",
    selector : "*",
    selectorName:  "The Universal Selector",
    helpTitle: "You can select everything!",
    syntax : "*",
    help : 'You can select all elements with the universal selector! ',
    examples : [
      '<strong>p *</strong> will select every element inside all <strong>&lt;p&gt;</strong> elements.'
    ],
    board: "A(o)[][O]{)"
  },
  {
    doThis : "Select everything on a plate",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine the Universal Selector",
    help : 'This will select all elements inside of <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> will select every element inside all <strong>&lt;p&gt;</strong> elements.',
      '<strong>ul.fancy *</strong> will select every element inside all <strong>&lt;ul class="fancy"&gt;</strong> elements.'
    ],
    board: "{o}(P)a(A)"
  },
  {
    doThis : "Select every apple that's next to a plate",
    selector : "plate + apple",
    helpTitle: "Select an element that directly follows another element",
    selectorName: "Adjacent Sibling Selector",
    syntax : "A + B",
    help : "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",
    examples : [
      '<strong>p + .intro</strong> will select every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',
      '<strong>div + a</strong> will select every <tag>a</tag> element that directly follows a <tag>div</tag>'
    ],
    board: "[a]()a()Aaa"
  },
  {
    selectorName: "General Sibling Selector",
    helpTitle: "Select elements that follows another element",
    syntax: "A ~ B",
    doThis : "Select every pickle to the right of the bento",
    selector : "bento ~ pickle",
    help : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
    examples : [
      '<strong>A ~ B</strong> will select all <strong>B</strong> that follow a <strong>A</strong>'
    ],
    board: "P[o]pP(P)(p)"
  },
  {
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis : "Select the apple directly on a plate",
    selector : "plate > apple",
    helpTitle: "Select direct children of an element",
    help : "You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
    examples : [
      '<strong>A > B</strong> will select all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    board: "([A])(A)()Aa"
  },
  {
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Select a first child element inside of another element",
    doThis : "Select the top orange",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
    examples : [
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <strong>&lt;p&gt;</strong> elements.',
      '<strong>div p:first-child</strong> selects all first child <strong>&lt;p&gt;</strong> elements that are in a <strong>&lt;div&gt;</strong>.'
    ],
    board: "[]()(OOO)p"
  },
  {
    selectorName: "Only Child Pseudo-selector",
    helpTitle: "Select an element that are the only element inside of another one.",
    doThis : "Select the apple and the pickle on the plates",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "You can select any element that is the only element inside of another one.",
    examples : [
      '<strong>span:only-child</strong> selects the <strong>&lt;span&gt;</strong> elements that are the only child of some other element.',
      '<strong>ul li:only-child</strong> selects the only <strong>&lt;li&gt;</strong> element that are in a <strong>&lt;ul&gt;</strong>.'
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
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <strong>&lt;span&gt;</strong> elements.',
      '<strong>ul li:last-child</strong> selects the last <strong>&lt;li&gt;</strong> elements inside of any <strong>&lt;ul&gt;</strong>.'
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
      '<strong>:nth-last-child(2)</strong> selects all second-to-last child elements.'
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
      '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
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
    helpTitle: "Select elements that are the only ones of their type",
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
    helpTitle: "Select elements that don't have children",
    doThis : "Select the empty bentos",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Selects elements that don't have any other elements inside of them.",
    examples : [
      '<strong>div:empty</strong> selects all empty <strong>&lt;div&gt;</strong> elements.'
    ],
    board: "[][p][][]"
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all elements that don't match the negation selector",

    doThis : "Select the big apples",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    board: "{a}(A)A(o)p"
  }
];

var levelsSpanish = [
  {
    helpTitle : "Selecciona los elementos por su tipo (type)",
    selectorName : "Type Selector",
    doThis : "Selecciona los platos (plates en inglés)",
    selector : "plate",
    syntax : "A",
    help : "Selecciona todos los elementos de tipo <strong>A</strong>. El 'type' se refiere al tipo de etiqueta, por ejemplo <tag>div</tag>, <tag>p</tag> y <tag>ul</tag> son elementos de diferente tipo.",
    examples : [
      '<strong>div</strong> selecciona todo los  elementos <tag>div</tag>.',
      '<strong>p</strong> selecciona todo los elementos <tag>p</tag>.',
      ],
    board: "()()"
  },
  {
    doThis : "Selecciona las caja 'bento' (bandejas japonesas)",
    selector : "bento",
    syntax : "A",
    helpTitle : "Selecciona los elementos por su tipo",
    selectorName : "Type Selector",
    help : "Selecciona todos los elementos de tipo <strong>A</strong>. Type o tipo se referiere al tipo de tag, así que <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> son elementos de diferente tipo.",
    examples : [
      '<strong>div</strong> selecciona todo los <tag>div</tag> elementos.',
      '<strong>p</strong> selecciona todo los <tag>p</tag> elementos.',
      ],
    board: "[]()[]"
  },
  {
    doThis : "Selecciona el plato lujoso (fancy en inglés)",
    selector : "#fancy",
    selectorName: "ID Selector",
    helpTitle: "Selecciona los elementos con un ID",
    syntax: "#id",
    help : 'Selecciona el elemento con el atributo <strong>id</strong>. Tambien puedes combinar el ID selector con el Type selector.',
    examples : [
      '<strong>#cool</strong> seleccionará cualquier elemento con <strong>id="cool"</strong>',
      '<strong>ul#long</strong> seleccionará <strong>&lt;ul id="long"&gt;</strong>'
    ],
    board: "{}()[]"
  },
  {
    helpTitle: "Selecciona un elemento dentro de otro elemento",
    selectorName : "Descendant Selector",
    doThis : "Selecciona la manzana dentro del plato (manzana en inglés = apple)",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",

    help : "Selecciona todos los elementos <strong>B</strong> dentro de <strong>A</strong>. Aquí <strong>B</strong> es el elemento descendiente (descendent element), es decir un elemento que esta dentro de otro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleccionará todos los elementos <strong>&lt;strong&gt;</strong> que son descendientes de <strong>&lt;p&gt;</strong>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> seleccionará cualquier <strong>&lt;span&gt;</strong> que es descendiente de cualquier elemento con <strong>id="fancy"</strong>',
    ],
    board: "[](A)A"
  },
  {
    doThis : "Selecciona el pepinillo (pickle  en inglés) que esta en el plato lujoso",
    selector : "#fancy pickle",
    helpTitle: "Combina Descendant & ID Selectors",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Puedes combinar cualquier selector con el descendant selector.',
    examples : [
      '<strong>#cool&nbsp;span</strong> seleccionará todos los elementos <strong>&lt;span&gt;</strong> que estan dentro de elementos con <strong>id="cool"</strong>'
    ],
    board: "[O]{P}(P)"
  },
  {
    doThis : "Selecciona las manzanas pequeñas",
    selector : ".small",
    selectorName: "Class Selector",
    helpTitle: "Selecciona elementos por su clase",

    syntax: ".classname",
    help : 'EL class selector selecciona todos los elementos con el atributo clase. Un elemento solo debe tener un ID, pero puede tener muchas clases.',
    examples : [
    '<strong>.neato</strong> selecciona todos los elementos con <strong>class="neato"</strong>'
    ],

    board: "Aa(a)()"
  },
  {
    doThis : "Selecciona las pequeñas naranjas",
    selector : "orange.small",
    helpTitle: "Combina el Class Selector",
    syntax: "A.className",
    help : 'Puedes combinar el class selector con otros selectores, por ejemplo con el type selector.',
    examples : [
      '<strong>ul.important</strong> seleccionará todos los elementos <strong>&lt;ul&gt;</strong> que tienen <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selecciona todos los elementos <strong>id="big"</strong> que también tienen <strong>class="wide"</strong>'
    ],
    board: "Aa[o](O)(o)"
  },
  {
    doThis : "Selecciona las pequeñas naranjas que estan en los bentos",
    selector : "bento orange.small",
    syntax: "Vamos!",
    helpTitle: "Tu puedes hacerlo ...",
    help : 'Combina lo que aprendiste en los últimos niveles para solucionar este acertijo!',
    board: "A(o)[o][a][o]"
  },
  {
    doThis : "Select todos los platos y bentos",

    selector : "plate,bento",
    selectorName : "Comma Combinator",
    helpTitle: "Combina los selectores ... con comas!",
    syntax : "A, B",
    help : 'Esto seleccionará todos los <strong>A</strong> y <strong>B</strong> elementos. De esta manera tu puedes combinar cualquiera de los selectores y/o especificar más de uno.',
    examples: [
    '<strong>p, .fun</strong> seleccionará todos los elementos <tag>p</tag> y también todos los elementos con <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> seleccionará todos los elementos <tag>a</tag>, <tag>p</tag> y <tag>div</tag>.'
    ],
    board: "pP(P)[P](P)Pp"
  },
  {
    doThis : "¡Selecciona todas las cosas!",
    selector : "*",
    selectorName:  "El Selector Universal (Universal Selector)",
    helpTitle: "Puedes seleccionar todo!",
    syntax : "*",
    help : '¡Puedes seleccionar todos los elementos con el selector universal! ',
    examples : [
      '<strong>p *</strong> seleccionará cada elemento dentro de todos los elementos <strong>&lt;p&gt;</strong>.'
    ],
    board: "A(o)[][O]{)"
  },
  {
    doThis : "Selecciona todo lo que esta en un plato",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combinalo con el Universal Selector",
    help : 'Esto seleccionará todos los elementos dentro de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleccionará cada elemento dentro de todos los <strong>&lt;p&gt;</strong> elementos.',
      '<strong>ul.fancy *</strong> seleccionará cada elemento dentro de todos los elementos <strong>&lt;ul class="fancy"&gt;</strong>.'],
    board: "{o}(P)a(A)"
  },
  {
    doThis : "Selecciona todas las manzanas que estan junto a un plato",
    selector : "plate + apple",
    helpTitle: "selecciona un elemento que directamente sigua a otro elemento",
    selectorName: "Adjacent Sibling Selector",
    syntax : "A + B",
    help : "Selecciona todos los elementos <strong>B</strong> que directamente siguan a <strong>A</strong>. Elementos que se siguan mutuamente se les llama hermanos (siblings). Los elementos hermanos son elementos que estan al mismo nivel, o profundidad. <br/><br/>Para este nivel elementos en el HTML que tengan la misma indentación son elementos hermanos.",
    examples : [
      '<strong>p + .intro</strong> seleccionará cada elemento con <strong>class="intro"</strong> que directamente sigue a <tag>p</tag>',
      '<strong>div + a</strong> seleccionará cada <tag>a</tag> elemento que directamente sigua a <tag>div</tag>'
    ],
    board: "[a]()a()Aaa"
  },
  {
    selectorName: "General Sibling Selector",
    helpTitle: "Selecciona elementos que siguen a otro elemento (Sibling significa hermano/a en inglés!)",
    syntax: "A ~ B",
    doThis : "Selecciona cada pepinillo a la derecha del bento",
    selector : "bento ~ pickle",
    help : "Puedes seleccionar todos los hermanos de un elemento que lo siguen. Esto es como el Adjacent Selector (A + B) (Selector Adjacente) excepto que toma todos los elementos subsiguientes en vez de uno.",
    examples : [
      '<strong>A ~ B</strong> seleccionará all <strong>B</strong> que sigue a <strong>A</strong>'
    ],
    board: "P[o]pP(P)(p)"
  },
  {
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis : "Selecciona la manzana que esta directamente en un plato",
    selector : "plate > apple",
    helpTitle: "Selecciona al hijo directo de un elemento",
    help : "Tu puedes seleccionar elementos que son hijos directos de otros elementos. Un elemento hijo es cualquier elemento que esta anidado directamente en otro elemento. <br><br>Elementos que estan anidados más profundamente se les llama elementos descendientes.",
    examples : [
      '<strong>A > B</strong> seleccionará todos los <strong>B</strong> que son hijos directos de <strong>A</strong>'
    ],
    board: "([A])(A)()Aa"
  },

  {
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Selecciona al primer elemento hijo dentro de otro elemento",
    doThis : "Selecciona la naranja de encima",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Tu puedes seleccionar el primer elemento hijo. Un elemento hijo es cualquier elemento que esta directamente anidado en otro elemento. Tu puedes combinar este pseudo-selector con otros selectores.",
    examples : [
      '<strong>:first-child</strong> selecciona todos los primeros elemento hijos.',
      '<strong>p:first-child</strong> selecciona todos los primeros elementos <strong>&lt;p&gt;</strong>.',
      '<strong>div p:first-child</strong> selecciona todos los primeros elementos hijos <strong>&lt;p&gt;</strong> que estan dentro de <strong>&lt;div&gt;</strong>.'
    ],
    board: "[]()(OOO)p"
  },
  {
    selectorName: "Only Child Pseudo-selector",
    helpTitle: "Selecciona un elemento que es el único elemento dentro de otro.",
    doThis : "Selecciona las manzanas y pepinillos en los platos",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Tu puedes seleccionar cualquier elemento que es el único elemento dentro de otro.",
    examples : [
      '<strong>span:only-child</strong> selecciona los elementos <strong>&lt;span&gt;</strong> que sean los únicos hijos de otros elementos',
      '<strong>ul li:only-child</strong> selecciona los únicos  elementos <strong>&lt;li&gt;</strong> dentro de <strong>&lt;ul&gt;</strong>.'
    ],
    board: "(A)(p)[]P(oO)p"
  },
  {
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Selecciona el último elemento adentro de otro elemento",
    doThis : "Selecciona la manzana pequeña y el pepinillo",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Tu puedes utilizar este selector para seleccionar un elemento el cual es el último elemento hijo dentro de otro elemento. <br><br>Pro Tip &rarr; En casos en donde solo hay un elemento, ese elemento cuenta como el primer hijo (first-child), el único hijo (only-child) y el último hijo (last-child)!",
    examples : [
      '<strong>:last-child</strong> selecciona todos los elementos últimos hijos (last-child elements).',
      '<strong>span:last-child</strong> selecciona todos los  elementos <strong>&lt;span&gt;</strong>. últimos hijos (last-child)',
      '<strong>ul li:last-child</strong> selecciona los últimos elementos <strong>&lt;li&gt;</strong> dentro de cualquier <strong>&lt;ul&gt;</strong>.'
    ],
    board: "{a)()(oO)p"
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Selecciona un elemento siguiendo su orden dentro de otro elemento",
    doThis : "Selecciona el tercer plato",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",

    help : "selecciona el <strong>nth</strong> elemento hijo o el hijo enésimo (Ex: 1ero, 3ero, 12avo etc.) en otro elemento.",
    examples : [
      '<strong>:nth-child(8)</strong>  selecciona cada elemento que sea el 8avo hijo de otro elemento.',
      '<strong>div p:nth-child(2)</strong> selecciona el segundo <strong>p</strong> en cada <strong>div</strong>',
    ],
    board: "()()(){}"
  },
  {
    selectorName: "Nth Last Child Selector (Selector del hijo enésimo)",
    helpTitle: "Selecciona un elemento siguiendo el orden en otro elemento, contando desde atrás",
    doThis : "Selecciona el 1er bento",
    selector : "bento:nth-last-child(4)",
    syntax: ":nth-last-child(A)",
    help : "selecciona los hijos desde la parte inferior del padre. Funciona como el nth-child (hijo enésimo), pero contando desde atrás!",
    examples : [
      '<strong>:nth-last-child(2)</strong> selecciona todos los hijos penúltimos.'
    ],
    board: "()[]a(OOO)[]"
  },
  {
    selectorName: "First of Type Selector",
    helpTitle: "Selecciona el primer elemento de un tipo especifico",
    doThis : "Selecciona la primera manzana",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "selecciona el primer elemento de ese tipo dentro de otro elemento.",
    examples : [
      '<strong>span:first-of-type</strong> selecciona el primer <strong>&lt;span&gt;</strong> en cualquier elemento.'
    ],
    board: "Aaaa(oO)"
  },
  {
    selectorName: "Nth of Type Selector",
    // helpTitle: "Nth of Type Selector",
    doThis: "Selecciona todos los platos pares",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "selecciona un elemento especifico basado en su tipo y orden en otro elemento o incluso instancias pares o impares de este elemento.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selecciona la segunda instancia de un div',
      '<strong>.example:nth-of-type(odd)</strong> selecciona todas las instancias impares del elemento ejemplo.'
    ],
    board: "()()()(){}()"
  },
  {
    selectorName: "Nth-of-type Selector with Formula",
    // helpTitle: "Nth-of-type Selector with formula",
    doThis: "Selecciona cada 2do plato comenzando por el 3ero",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "El nth-of-type formula selecciona un elemento especifico, comenzando la cuenta de una instancia especifica de ese elemento.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selecciona un elemento especifico de <tag>span</tag>, comenzando (e incluyendo) la segunda instancia.'
    ],
    board: "()(p)(a)()(A)()"
  },

  {
    selectorName: "Only of Type Selector",
    helpTitle: "Selecciona los elementos que son los únicos de su tipo",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Selecciona la manzana en el plato del medio.",
    help : "selecciona el único elemento de su tipo dentro de otro elemento.",
    examples : [
      '<strong>p span:only-of-type</strong> selecciona un <tag>span</tag> dentro de cualquier <tag>p</tag> siempre y cuando sea el único <tag>span</tag> adentro.'
    ],
    board: "(aA)(a)(p)"
  },

  {
    selectorName: "Last of Type Selector",
    helpTitle: "Selecciona el último elemento de un tipo especifico",
    doThis : "Selecciona la segunda manzana y naranja",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Selecciona cada último elemento de ese tipo dentro de otro elemento. Recuerda que 'type' se refiere al tipo de etiqueta, asi que <tag>p</tag> y <tag>span</tag> son de diferentes tipos. <br><br> Me pregunto si así es cómo se seleccionó el último dinosaurio antes de que se extinguiera.",
    examples : [
      '<strong>div:last-of-type</strong> selecciona el último <strong>&lt;div&gt;</strong> en cada elemento.',
      '<strong>p span:last-of-type</strong> selecciona el último <strong>&lt;span&gt;</strong> en cada <strong>&lt;p&gt;</strong>.'
    ],
    board: "ooPPaa"
  },
  {
    selectorName: "Empty Selector",
    helpTitle: "Selecciona los selectores que no tienen hijos",
    doThis : "Selecciona los bentos vacios",
    selector : "bento:empty",
    syntax: ":empty",
    help : "selecciona un elemento especifico que no tiene otros elementos adentro",
    examples : [
      '<strong>div:empty</strong> selecciona todos los elementos vacios<strong>&lt;div&gt;</strong>.'
    ],
    board: "[][p][][]"
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Selecciona todos los elementos que no coincidan con el negation selector",

    doThis : "Selecciona las manzanas grandes",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Tu puedes usar esto para seleccionar todos los elementos que no coincidan con el selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> selecciona todos elementos que no tienen <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> selecciona cada <tag>div</tag> que no sea el primer hijo.',
      '<strong>:not(.big, .medium)</strong> selecciona todos los elementos que no tienen <strong>class="big"</strong> o <strong>class="medium"</strong>.'
    ],
    board: "{a}(A)A(o)p"
  }
];

language = sessionStorage.getItem('language');

if(language){
  switch(language) {
    case 'English':
      var levels = levelsEnglish;
      $("#select-language option[value='English']").attr("selected","selected");
      break;
    case 'Spanish':
      var levels = levelsSpanish;
      $("#select-language option[value='Spanish']").attr("selected","selected");
      break;
}
} else{
  var levels = levelsEnglish;
}

$(document).ready(function(){

  $("#select-language").change(function(){
    sessionStorage.setItem('language', $("#select-language").val());
    location.reload();
  });
  
  // After reloading it changes the dropdown selected value accordingly
  if(language){
    switch(language) {
      case 'English':
        $("#select-language option[value='English']").attr("selected","selected");
        break;
      case 'Spanish':
        $("#select-language option[value='Spanish']").attr("selected","selected");
        break;
    }
  }

});

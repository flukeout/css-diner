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
      '<strong>div</strong> will select all <strong>&lt;div&gt;</strong> elements.',
      '<strong>p</strong> will select all <strong>&lt;p&gt;</strong> elements.',
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
    syntax: "A&nbsp;&nbsp;#id",
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
    help : "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",
    examples : [
      '<strong>p + .intro</strong> will select every element with <strong>class="intro"</strong> that directly follows an <tag>p</tag>',
      '<strong>div + a</strong> will select every <tag>a</tag> element that directly follows an <tag>div</tag>'
    ],
    board: "[a]()a()Aaa"
  },
  {
    doThis : "Select every pickle to the right of the bento",
    selector : "bento ~ pickle",
    syntax: "A ~ B",
    helpTitle: "General Sibling Selector",
    help : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
    examples : [
      '<strong>A ~ B</strong> will select all <strong>B</strong> that follow an <strong>A</strong>'
    ],
    board: "P[o]pP(P)(p)"
  },
  {
    doThis : "Select the apple directly on a plate",
    selector : "plate > apple",
    helpTitle: "Child Selector",
    syntax: "A > B",
    help : "You can select elements that are direct children of other elements. A child element is any element that is nested direclty in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
    examples : [
      '<strong>A > B</strong> will select all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    board: "([A])(A)()Aa"
  },
  {
    doThis : "Select the top orange",
    selector : "plate :first-child",
    syntax: ":first-child",
    helpTitle: "First Child Pseudo-selector",
    help : "You can select the first child element in any other element. You can combine this pseudo-selector with other selectors. A child element is any element that is directly nested in another element.",
    examples : [
      '<strong>:first-child</strong> selects all first-child elements.',
      '<strong>p:first-child</strong> selects all first-child <strong>&lt;p&gt;</strong> elements.',
      '<strong>div p:first-child</strong> selects all first-child <strong>&lt;p&gt;</strong> elements that are in a <strong>&lt;div&gt;</strong>.'
    ],
    board: "[]()(OOO)p"
  },
  {
    doThis : "Select apple and the pickle on the plates",
    selector : "plate :only-child",
    syntax: ":only-child",
    helpTitle: "Only Child Pseudo-selector",
    help : "You can selects any element that is the only element inside of another one.",
    examples : [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:first-child</strong> selects all first-child <strong>&lt;span&gt;</strong> elements.',
      '<strong>ul li:first-child</strong> selects all first-child <strong>&lt;li&gt;</strong> elements that are in a <strong>&lt;ul&gt;</strong>.'
    ],
    board: "(A)(p)[]P(oO)p"
  },
  {
    doThis : "Select the small apple and the pickle",
    selector : ".small:last-child",
    syntax: ":last-child",
    helpTitle: "Last Child Pseudo-selector",
    help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <strong>&lt;span&gt;</strong> elements.',
      '<strong>ul li:last-child</strong> selects the last <strong>&lt;li&gt;</strong> elements inside of any <strong>&lt;ul&gt;</strong>.'
    ],
    board: "{a)()(oO)p"
  },
  {
    doThis : "Select the 3rd plate",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    helpTitle: "Nth Child Selector",
    help : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    board: "()()(){}"
  },
  {
    helpTitle: "Nth-Last Child Selector",
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
    helpTitle: "First of Type Selector",
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
    helpTitle: "Nth-of-type Selector",
    doThis: "Select all even plates",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selects a specified number, or even/odd instances",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
    ],
    board: "()()()(){}()"
  },
  {
    helpTitle: "Only of Type Selector",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Select the apple on the middle plate.",
    help : "Selects the only element of its kind within another element.",
    examples : [
      '<strong>p span:only-of-type</strong> selects a <strong>&lt;span&gt;</strong> within a <strong>&lt;p&gt;</strong> if it is the only &lt;span&gt; in there.'
    ],
    board: "(aA)(a)(p)"
  },

  {
    helpTitle: "Last of Type Selector",
    doThis : "Select the second apple and orange",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so &ltp&gt; and &ltspan&gt; are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples : [
      '<strong>div:last-of-type</strong> selects the last <strong>&lt;div&gt;</strong> in every element.',
      '<strong>p span:last-of-type</strong> selects the last <strong>&lt;span&gt;</strong> in every <strong>&lt;p&gt;</strong>.'
    ],
    board: "ooPPaa"
  },
  {
    helpTitle: "Nth-of-type Selector with formula",
    doThis: "Select every plate from the 5th",
    selector: "plate:nth-of-type(1n+5)",
    syntax: ":nth-of-type(An+B)",
    help: "The nth-of-type formula indicates a cycle size and offset from which to start counting.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a span, starting from the second instance.'
    ],
    board: "()(){}()(){}(){}()"
  },
  {
    helpTitle: "Empty Selector",
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
    doThis : "Select the big apples",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    helpTitle: "Negation Pseudo-class",
    help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <strong>&lt;div&gt;</strong> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    board: "{a}(A)A(o)p"
  }
];

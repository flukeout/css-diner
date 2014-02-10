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
    doThis : "Select the plates",
    selector : "plate",
    helpTitle : "Type Selector",
    help : "Use the tag name to select all elements of that type.<br/> Ex. &rarr; <strong>div</strong> will select all <strong>&lt;div&gt;</strong> elements",
    board: "()()"
  },
  {
    doThis : "Select the bentos",
    selector : "bento",
    helpTitle : "Type Selector",
    help : "Use the tag name to select all elements of that type.<br/> Ex. &rarr; <strong>div</strong> will select all <strong>&lt;div&gt;</strong> elements",
    board: "[]()[]"
  },
  {
    doThis : "Select the fancy plate",
    selector : "#fancy",
    helpTitle: "ID Selector",
    help : 'Use the #id selector to select an element with that id. <br/> Ex &rarr; <strong>#cool</strong> will select <strong>&lt;p id="cool" &gt;</strong>',
    board: "{)()[]"
  },
  {
    doThis : "Select the apple on the plate",
    selector : "plate apple",
    helpTitle: "Descendant Selector",
    help : "You can use a selector to only look inside of certain elements. <br>Ex &rarr; <strong>A&nbsp;&nbsp;B</strong> will get all <strong>B</strong> that are inside of <strong>A</strong>",
    board: "[](A)A"
  },
  {
    doThis : "Select the pickle on the fancy plate",
    selector : "#fancy pickle",
    helpTitle: "Combine the Descendant Selector",
    help : 'You can use any selector inside of a descendent selector. <br> Ex &rarr; <strong>#cool&nbsp;&nbsp;A</strong> will get all <strong>A</strong> elements that are inside of the element with <strong>id="cool"</strong>',
    board: "[O]{P)(P)"
  },
  {
    doThis : "Select the small apples",
    selector : ".small",
    helpTitle: "Class Selector",
    help : 'Use .className to select all elements with that class.<br> Ex &rarr; <strong>.neato</strong> will get all elements with <strong>class="neato"</strong>',
    board: "Aa(a)()"
  },
  {
    doThis : "Select the small oranges",
    selector : "orange.small",
    helpTitle: "Combine the Class Selector",
    help : 'You can combine a .className with a tag name selector.<br> Ex &rarr; <strong>ul.important</strong> will select all <strong>&lt;ul&gt;</strong> elements that have <strong>class="important"</strong>',
    board: "Aa[o](O)(o)"
  },
  {
    doThis : "Select the small oranges in the bentos",
    selector : "bento orange.small",
    helpTitle: "You've got the power!",
    help : 'You can do it!',
    board: "A(o)[o][O][o]"
  },
  {
    doThis : "Select all the plates and bentos",
    selector : "plate,bento",
    helpTitle: "Combine, selectors, with... commas!",
    help : 'Thanks to Shatner technology, we can combine selectors with commas.<br> Ex &rarr; <strong>p , .fun</strong> will select all <strong>&lt;p&gt;</strong> elements as well as all elements with <strong>class="fun"</strong> ',
    board: "pP(P)[P](P)Pp"
  },
  {
    doThis : "Select all the things!",
    selector : "*",
    helpTitle: "The Universal Selector",
    help : 'You can select everything with the <strong>*</strong> selector! <br> You can also use &rarr; <strong>p *</strong> to select everything inside of all <strong>&lt;p&gt;</strong> tags.',
    board: "A(o)[][a][O]{)"
  },
  {
    doThis : "Select everything on a plate",
    selector : "plate *",
    helpTitle: "The All Selector",
    help : 'You can select everything with the <strong>*</strong> selector! <br> You can also use &rarr; <strong>p *</strong> to select everything inside of all <strong>&lt;p&gt;</strong> tags.',
    board: "{o)(P)a(A)"
  },
  {
    doThis : "Select every apple that directly follows a plate",
    selector : "plate + apple",
    helpTitle: "Adjacent Sibling Selector",
    help : "You can select an elements next sibling element. <br>Ex &rarr; <strong>A + B</strong> will select every <strong>B</strong> that  directly follows an <strong>A</strong>",
        board: "[a]()a()Aaa"
  },
  {
    doThis : "Select every pickle to the right of the bento",
    selector : "bento ~ pickle",
    helpTitle: "General Sibling Selector",
    help : "You can select all siblings that follow an element. <br>Ex &rarr; <strong>A ~ B</strong> will select all <strong>B</strong> that are follow an <strong>A</strong>",
    board: "P[o]pP(P)(p)"
  },
  {
    doThis : "Select the apple directly on a plate",
    selector : "plate > apple",
    helpTitle: "Child Selector",
    help : "You can select all siblings that are direct children of another element. <br>Ex &rarr; <strong>A > B</strong> will select all <strong>B</strong> that are a direct <strong>A</strong>",
    board: "([A])(A)()Aa"
  },

];
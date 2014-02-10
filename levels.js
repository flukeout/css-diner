// Hash the array and compare the arrays!
// Key
// a = small apple .small
// A = apple
// o = small orange, .small
// O = orange
// p = small pickle, .small
// P = pickle
// () = plate open / close
// {) = fancy plate open / close
// [] = bento open close tags

var levels = [
  {
    doThis : "Clear the plates",
    selector : "plate",
    helpTitle : "Tag Name Selector",
    help : "Use the tag name to select elements of that type.<br/> Ex. &rarr; <strong>div</strong> will select all <strong>&lt;div&gt;</strong> elements",
    board: "()()"
  },
  {
    doThis : "Clear the bentos",
    selector : "bento",
    helpTitle : "Tag Name Selector",
    help : "Use the tag name to select all elements of that type.<br/> Ex. &rarr; <strong>div</strong> will select all <strong>&lt;div&gt;</strong> elements",
    board: "[]()[]"
  },
  {
    doThis : "Clear the fancy plate",
    selector : "#fancy",
    helpTitle: "#id Selector",
    help : 'Use the #id selector to select an element with that id. <br/> Ex &rarr; <strong>#cool</strong> will select <strong>&lt;p id="cool" &gt;</strong>',
    board: "{)()[]"
  },
  {
    doThis : "Eat the apple on the plate",
    selector : "plate apple",
    helpTitle: "The Descendant Selector",
    help : "You can use a selector to only look inside of certain elements. <br>Ex &rarr; <strong>A&nbsp;&nbsp;B</strong> will get all <strong>B</strong> that are inside of <strong>A</strong>",
    board: "[](A)A"
  },
  {
    doThis : "Eat the pickle on the fancy plate",
    selector : "#fancy pickle",
    helpTitle: "The Descendant + Id Selector",
    help : 'You can use any selector inside of a descendent selector. <br> Ex &rarr; <strong>#cool&nbsp;&nbsp;A</strong> will get all <strong>A</strong> elements that are inside of the element with <strong>id="cool"</strong>',
    board: "[O]{P)(P)"
  },
  {
    doThis : "Eat the small apples",
    selector : ".small",
    helpTitle: "The Class Selector",
    help : 'Use .className to select all elements with that class.<br> Ex &rarr; <strong>.neato</strong> will get all elements with <strong>class="neato"</strong>',
    board: "Aa(a)()"
  },
  {
    doThis : "Eat the small oranges!",
    selector : "orange.small",
    helpTitle: "Combine the Class Selector",
    help : 'You can combine a .className with a tag name selector.<br> Ex &rarr; <strong>ul.important</strong> will select all <strong>&lt;ul&gt;</strong> elements that have <strong>class="important"</strong>',
    board: "Aa[o](o)(o)"
  },
  {
    doThis : "Eat the small oranges in the bentos!",
    selector : "bento orange.small",
    helpTitle: "You've got the power!",
    help : 'You can do it!',
    board: "A(o)[o][a][o]"
  },
  {
    doThis : "Clear all the plates and bentos!",
    selector : "plate,bento",
    helpTitle: "Combine, selectors, with... commas!",
    help : 'Thanks to Shatner technology, we can combine selectors with commas.<br> Ex &rarr; <strong>p , .fun</strong> will select all <strong>&lt;p&gt;</strong> elements as well as all elements with <strong>class="fun"</strong> ',
    board: "pP(P)[P](P)Pp"
  },

  {
    doThis : "Clear everything",
    selector : "*",
    helpTitle: "The All Selector",
    help : 'You can select everything with the <strong>*</strong> selector! <br> You can also use &rarr; <strong>p *</strong> to select everything inside of all <strong>&lt;p&gt;</strong> tags.',
    board: "A(o)[][a][O]{)"
  },

  // {
  //   doThis : "Clear the bentos!",
  //   selector : "bento",
  //   help : "Use the <strong>element</strong> selector to select all elements of that type!",
  //   board: "simple"
  // },
  // {
  //   doThis : "Clear all the things!",
  //   selector : "*",
  //   help : "Use the <strong>*</strong> selector to select all elements!",
  //   board: "simple"
  // },
  // {
  //   doThis : "Clear all the things!",
  //   selector : "*",
  //   help : "Use the <strong>*</strong> selector to select all elements!",
  //   board: "simple"
  // },
  // {
  //   doThis : "Eat the Big Apple (tm)!",
  //   selector : ".apple.big",
  //   help : "Combine two or more <strong>class</strong> selectors!",
  // },
  // {
  //   doThis : "Clear the orange on the table and the empty plate!",
  //   selector : ":not(:empty) + :empty",
  //   help : "Combine the <strong>:not</strong> and <strong>:empty</strong> selector!"
  // },
  // {
  //   doThis : "Eat the orange not on a plate!",
  //   selector : ".orange:not(:first-child)",
  //   help : "Combine the <strong>:not</strong> and <strong>:empty</strong> selector!"
  // },
  // {
  //   doThis : "Clear all the full servings!",
  //   selector : ":not(:empty)",
  //   help : "Combine the <strong>:not</strong> and <strong>:empty</strong> selector!"
  // },
  // {
  //   doThis : "Clear all the plates!",
  //   selector : ".plate",
  //   help : "Use the <strong>.class</strong> selector to select all elements with that class!"
  // },
  //
  // {
  //   doThis : "Clear the fancy plate!",
  //   selector : "#fancy",
  //   help : "Use the <strong>id</strong> selector to select an element with that id!"
  // },
  // {
  //   doThis : "Eat the apple on the plate!",
  //   selector : ".plate .apple",
  //   help : "Select the apple using the <strong>descendant</strong> selector!"
  // },
  // {
  //   doThis : "Clean all the apples and pickles!",
  //   selector : ".apple, .pickle",
  //   help : "Use two <strong>class</strong> selectors at the same time <strong>comma<strong>."
  // },
  // {
  //   doThis : "Clear every bento that has a plate somewhere to it's left!",
  //   selector : ".plate ~ .bento",
  //   help : "Use the <strong>preceded</strong> selector to all select elements that are preceded by another element."
  // },
  // {
  //   doThis : "Clean each plate that has a bento on the left",
  //   selector : ".bento + .plate",
  //   help : "Use the <strong>+</strong> selector to select all elements that are immediately preceded by another element."
  // },
  // {
  //   doThis : "Clean all the servings!",
  //   selector : ".serving",
  // },
  // {
  //   doThis : "Clean the 3rd serving!",
  //   selector : ".serving:nth-child(3)",
  // },
  // {
  //   doThis : "Clean the first serving!",
  //   selector : ".serving:first-child",
  // },
  // {
  //   doThis : "Clean the empty plate!",
  //   selector : ".plate:empty",
  // },
  // {
  //   doThis : "Clean the last serving!",
  //   selector : ".plate:last-child",
  // },
  // {
  //   doThis : "Clean the last serving!",
  //   selector : ".serving:last-child",
  // }
];
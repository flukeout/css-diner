// Hash the array and compare the arrays!

var levels = [
  {
    doThis : "Clear the plate!",
    selector : "plate",
    help : "Use the <strong>elementName</strong> selector to select all elements of that type!",
    board: "simple"
  },
  {
    doThis : "Clear the bentos!",
    selector : "bento",
    help : "Use the <strong>element</strong> selector to select all elements of that type!",
    board: "simple"
  },
  {
    doThis : "Clear all the things!",
    selector : "*",
    help : "Use the <strong>*</strong> selector to select all elements!",
    board: "simple"
  },
  {
    doThis : "Clear all the things!",
    selector : "*",
    help : "Use the <strong>*</strong> selector to select all elements!",
    board: "simple"
  },

  {
    doThis : "Eat the Big Apple (tm)!",
    selector : ".apple.big",
    help : "Combine two or more <strong>class</strong> selectors!",
  },
  {
    doThis : "Clear the orange on the table and the empty plate!",
    selector : ":not(:empty) + :empty",
    help : "Combine the <strong>:not</strong> and <strong>:empty</strong> selector!"
  },
  {
    doThis : "Eat the orange not on a plate!",
    selector : ".orange:not(:first-child)",
    help : "Combine the <strong>:not</strong> and <strong>:empty</strong> selector!"
  },
  {
    doThis : "Clear all the full servings!",
    selector : ":not(:empty)",
    help : "Combine the <strong>:not</strong> and <strong>:empty</strong> selector!"
  },
  {
    doThis : "Clear all the plates!",
    selector : ".plate",
    help : "Use the <strong>.class</strong> selector to select all elements with that class!"
  },

  {
    doThis : "Clear the fancy plate!",
    selector : "#fancy",
    help : "Use the <strong>id</strong> selector to select an element with that id!"
  },
  {
    doThis : "Eat the apple on the plate!",
    selector : ".plate .apple",
    help : "Select the apple using the <strong>descendant</strong> selector!"
  },
  {
    doThis : "Clean all the apples and pickles!",
    selector : ".apple, .pickle",
    help : "Use two <strong>class</strong> selectors at the same time <strong>comma<strong>."
  },
  {
    doThis : "Clear every bento that has a plate somewhere to it's left!",
    selector : ".plate ~ .bento",
    help : "Use the <strong>preceded</strong> selector to all select elements that are preceded by another element."
  },
  {
    doThis : "Clean each plate that has a bento on the left",
    selector : ".bento + .plate",
    help : "Use the <strong>+</strong> selector to select all elements that are immediately preceded by another element."
  },
  {
    doThis : "Clean all the servings!",
    selector : ".serving",
  },
  {
    doThis : "Clean the 3rd serving!",
    selector : ".serving:nth-child(3)",
  },
  {
    doThis : "Clean the first serving!",
    selector : ".serving:first-child",
  },
  {
    doThis : "Clean the empty plate!",
    selector : ".plate:empty",
  },
  {
    doThis : "Clean the last serving!",
    selector : ".plate:last-child",
  },
  {
    doThis : "Clean the last serving!",
    selector : ".serving:last-child",
  }
];
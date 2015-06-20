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
    helpTitle : "قم بأخيتار العناصر من خلال نوعها.",
    selectorName : "Type Selector",
    doThis : "قم بأختيار الأطباق",
    selector : "plate",
    syntax : "A",
    help : "قم بأختيار كل العناصر من نوع الـ <strong>A</strong> . حيث نقصد بالأنواع، العناصر الـ HTML، لذلك العناصر والأوسمة التالية: <tag>div</tag> , <tag>p</tag> و <tag>ul</tag> كلهم عناصر لكن من انواع مختلفة.",
    examples : [
      '<strong>div</strong> يقوم بأختيار كل عناصر<tag>div</tag> ',
      '<strong>p</strong> يقوم بأختيار كل عناصر <tag>p</tag> ',
      ],
    board: "()()"
  },
  {
    doThis : "قم بأختيار صندوق الـ bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "قم بأختيار العناصر من خلال نوعها.",
    selectorName : "Type Selector",
    help : "قم بأختيار كل العناصر من نوع الـ <strong>A</strong> . حيث نقصد بالأنواع، العناصر الـ HTML، لذلك العناصر والأوسمة التالية: <tag>div</tag> , <tag>p</tag> و <tag>ul</tag> كلهم عناصر لكن من انواع مختلفة.",
    examples : [
      '<strong>div</strong> يقوم بأختيار كل عناصر<tag>div</tag> ',
      '<strong>p</strong> يقوم بأختيار كل عناصر <tag>p</tag> ',
      ],
    board: "[]()[]"
  },
  {
    doThis : "قم باختيار الطبق الفاخر",
    selector : "#fancy",
    selectorName: "ID المنتقي",
    helpTitle: "قم بأختيار العنصر من خلال الـ ID",
    syntax: "#id",
    help : 'قم بأختيار العنصر الذي يحوي على خاصية الـ  <strong>id</strong>. بإمكانك أختيار العنصر من خلال نوع المنتقي ID أيضاً.',
    examples : [
      '<strong>#cool</strong> سيقوم بأختيار اي عنصر ضمن المنتقي <strong>id="cool"</strong>',
      '<strong>ul#long</strong> سيقوم بأختيار العنصر <strong>&lt;ul id="long"&gt;</strong>'
    ],
    board: "{}()[]"
  },
  {
    helpTitle: "قم بأختيار العنصر الذي داخل عنصر آخر!",
    selectorName : "أختيار الـ خلفٌ Descendant",
    doThis : "قم بأختيار التفاحة من الطبق",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",

    help : "قم بأختيار كل <strong>B</strong> داخل <strong>A</strong>. هنا <strong>B</strong> هي خلفٌ العنصر descendant element, وهذا يعني ان هنالك عنصر داخل عنصر آخر.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> سيقوم بأختيار <strong>&lt;strong&gt;</strong> والتي ستكون خلفٌ descendant لأي منها <strong>&lt;p&gt;</strong>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> سيقوم بأختيار <strong>&lt;span&gt;</strong> وهي خلفٌ لأي عنصر من   <strong>id="fancy"</strong>',
    ],
    board: "[](A)A"
  },
  {
    doThis : "قم بأختيار المخلل من الطبق الفاخر",
    selector : "#fancy pickle",
    helpTitle: "قم بالدمج بين الـ خلفٌ descendent والـ ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'بإمكانك ان تقوم بدمج الأختيار العنصر من خلال اختيار المنتقي الـ خلفُ descendent والـ ID معاً.',
    examples : [
      '<strong>#cool&nbsp;span</strong> سيقوم بأختيار <strong>&lt;span&gt;</strong> العناصر التي بداخل العناصر مع المنتقي الـ <strong>id="cool"</strong>'
    ],
    board: "[O]{P}(P)"
  },
  {
    doThis : "قم بأختيار التفاحة الصغيرة",
    selector : ".small",
    selectorName: "المنتقي الـ Class",
    helpTitle: "ستقوم بأختيار العناصر من خلال الـ Class الخاص بها.",

    syntax: ".classname",
    help : 'هذا الـ class سيقوم بأختيار كل العناصر التي تكون ضمن هذا الوسم الـ class. العناصر يمكن ان تحصل على العديد من الـ class ولكن يمكن أن تحصل على الـ ID واحد فقط.',
    examples : [
    '<strong>.neato</strong> سيقوم بأختيار كل العناصر ضمن <strong>class="neato"</strong>'
    ],

    board: "Aa(a)()"
  },
  {
    doThis : "قم بأختيار البرتقالة الصغيرة",
    selector : "orange.small",
    helpTitle: "الدمج ضمن الـ Class",
    syntax: "A.className",
    help : 'بإمكانك الدمج بين المنتقي الـ class مع منتقي آخر، كما في هذا المثال.',
    examples : [
      '<strong>ul.important</strong> سيقوم بأختيار كل  <strong>&lt;ul&gt;</strong> العناصر التي بداخل المنتقي <strong>class="important"</strong>',
      '<strong>#big.wide</strong> سيقوم بأختيار كل العناصر مع <strong>id="big"</strong> والتي تحوي على هذا المنتقي <strong>class="wide"</strong>'
    ],
    board: "Aa[o](O)(o)"
  },
  {
    doThis : "قم بأختيار البرتقالة الصغير الموجود على الـ  bentos",
    selector : "bento orange.small",
    syntax: "Put your back into it!",
    helpTitle: "نعم، بإمكانك ان تقوم بذلك..",
    help : 'قم بأختبار ما تعلمته في التحديات السابقة هنا',
    board: "A(o)[o][a][o]"
  },
  {
    doThis : "قم بأختيار كل الأطباق والـ bentos في الطاولة",

    selector : "plate,bento",
    selectorName : "Comma Combinator",
    helpTitle: "دمح المنتقي مع... الفاصلة!",
    syntax : "A, B",
    help : 'بفضل هذه الميزة, سيكون بإمكانك من أختيار كل عناصر <strong>A</strong> و عناصر <strong>B</strong>. وسيكون بإمكانك دمج أي عنصر مع عناصر أخرى بهذه الطريقة, وبإمكانك أيضاً تحديد أكثر من منتقي.',
    examples: [
    '<strong>p, .fun</strong> سيقوم بأختيار كل عناصر <tag>p</tag> كما سيقوم بأختيار كل عناصر المنتقي <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> سيقوم بأختيار كل عناصر <tag>a</tag>, <tag>p</tag> وعناصر <tag>div</tag> أيضاً'
    ],
    board: "pP(P)[P](P)Pp"
  },
  {
    doThis : "قم بأختيار كل العناصر!",
    selector : "*",
    selectorName:  "The Universal Selector",
    helpTitle: "بإمكانك أختيار كل العناصر!",
    syntax : "*",
    help : 'بإمكانك اختيار كل العناصر بفضل المنتقي العام Universal Selector! ',
    examples : [
      '<strong>p *</strong> سيقوم بأختيار كل العناصر التي بداخل المنتقي <strong>&lt;p&gt;</strong>.'
    ],
    board: "A(o)[][O]{)"
  },
  {
    doThis : "قم بأختيار كل العناصر في الطبق",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "أختيار العناصر من خلال الدمج بين المنتقي العام Universal Selector وغيرها من الطرق السابقة. ",
    help : 'سيقوم بأختيار كل العناصر التي بداخل المنتقي <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> سيقوم بأختيار كل العناصر التي بداخل المنتقي <strong>&lt;p&gt;</strong>.',
      '<strong>ul.fancy *</strong> سيقوم أيضاً بأختيار كل العناصر التي بداخل المنتقي التالي <strong>&lt;ul class="fancy"&gt;</strong>.'
    ],
    board: "{o}(P)a(A)"
  },
  {
    doThis : "قم بإختيار كل التفاحات التي بجانب الطبق",
    selector : "plate + apple",
    helpTitle: "قم بأختيار العناصر التي تكون بجانب العناصر الآخرى!",
    selectorName: "Adjacent Sibling Selector",
    syntax : "A + B",
    help : "هذا سيقوم بأختيار كل العناصر <strong>B</strong> التي تلي هذه العناصر بشكل مباشر <strong>A</strong>. العناصر التي عناصر أخرى بشكل مباشر تسمى siblings شقيقين. وهما يكونوا في نفس العمق والدرجة في ضمن هيكيلة الـ HTML.",
    examples : [
      '<strong>p + .intro</strong> سيقوم بأختيار كل العناصر التي تكون بداخل <strong>class="intro"</strong> والتي تلي بشكل مباشر العنصر <tag>p</tag>',
      '<strong>div + a</strong> سيقوم بأختيار كل العناصر <tag>a</tag> التي تلي هذا المنتقي <tag>div</tag>'
    ],
    board: "[a]()a()Aaa"
  },
  {
    selectorName: "أختيار العناصر الأشقاء Sibling بشكل عام.",
    helpTitle: "قم بأختيار العناصر التي العنصر بشكل مباشر",
    syntax: "A ~ B",
    doThis : "قم بأختيار كل المخلل الموجود على يمين البينتو",
    selector : "bento ~ pickle",
    help : "بإمكامك اختيار كل العناصر التي عناصر الأشقاء Sibling. كأنك تقوم بأختيار العناصر القريبة (A + B) عدى أنه سيقوم بأختيار كل العناصر التي تلي هذا العنصر، بدلاً من عنصر واحد.",
    examples : [
      '<strong>A ~ B</strong> سيقوم بأختيار كل العناصر <strong>B</strong> التي تلي هذا العنصر <strong>A</strong>'
    ],
    board: "P[o]pP(P)(p)"
  },
  {
    selectorName: "المنتقي الأبن Child",
    syntax: "A > B&nbsp;",
    doThis : "قم بأختيار التفاحلة بشكل مباشر من الطبق",
    selector : "plate > apple",
    helpTitle: "أختيار ابن لأحد العناصر بشكل مباشر",
    help : "بإمكانك أختيار عنصر ما في الـ CSS يكون هو ابن لأحد العناصر. المنتقي الأبن هو منتقي(عنصر) مثل أي العناصر الأخرى، ولكن تكون داخل عنصر (منتقي) أخر بشكل مباشر <br><br>أما العناصر التي تكون أعمق من ذلك تسمى الخلف، descendant.",
    examples : [
      '<strong>A > B</strong> سيقوم بأختيار كل العناصر  <strong>B</strong> والتي تكون ابن لهذا العنصر <strong>A</strong>'
    ],
    board: "([A])(A)()Aa"
  },
  {
    selectorName: "عناصر الأبن، والعناصر الزائفة Pseudo-selector",
    helpTitle: "قم بأخيتار اول عنصر ابن لعنصر آخر",
    doThis : "قم بأختيار البرتقالة الأولى من الأعلى",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "بإمكانك اختيار اول عنصر ابن من عنصر آخر.عنصر الأبن هو أي عنصر يكون بداخل عنصر آخر. علماً أنه يمكنك ان تقوم بدمج العناصر المزيفة pseudo-selector مع المنتقي بشكل مباشر.",
    examples : [
      '<strong>:first-child</strong> سيقوم بأختيار كل عناصر الأبن الأول.',
      '<strong>p:first-child</strong> سيقوم بأختيار كل عناصر الأبن الأول <strong>&lt;p&gt;</strong>.',
      '<strong>div p:first-child</strong> سيقوم بأختيار كل عناصر الأبن الأول <strong>&lt;p&gt;</strong> والتي تكون بداخل <strong>&lt;div&gt;</strong>.'
    ],
    board: "[]()(OOO)p"
  },
  {
    selectorName: "فقط أبناء العناصر المزيفة Pseudo-selector",
    helpTitle: "قم بأختيار العناصر التي تكون بداخل عنصر أخر فقط.",
    doThis : "قم بأختيار التفاحة، والمخلل من الطبق. ",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "بإمكانك أختيار أي عنصر الذي يكون داخل عنصر آخر.",
    examples : [
      '<strong>span:only-child</strong> سيقوم بأختيار عنصر <strong>&lt;span&gt;</strong> والذي هو الأبن الوحيد لعنصر آخر.',
      '<strong>ul li:only-child</strong> سيقوم بأختيار العنصر  <strong>&lt;li&gt;</strong> فقط. والذي هو بداخل عنصر  <strong>&lt;ul&gt;</strong>.'
    ],
    board: "(A)(p)[]P(oO)p"
  },
  {
    selectorName: "الأبن الأخير، مع العناصر المزيفة Pseudo-selector",
    helpTitle: "قم بأختيار العنصر الأخير، والذي يكون بداخل عنصر آخر. ",
    doThis : "قم بأختيار التفاحة الصغيرة، والمخلل",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "بإمكانك أختيار المنتقي لأختيار عنصر هو عنصر الأبن الأخير والذي يكون بداخل عنصر آخر. <br><br>Pro Tip &rarr; في حالة كان هنالك عنصر واحد فقط, هذا العنصر يعد كـ الأبن الأول، ابن واحد والابن الأخير بالنسبة لـ CSS!",
    examples : [
      '<strong>:last-child</strong> يقوم بأختيار كل الأبناء الأخيرين.',
      '<strong>span:last-child</strong> سيقوم بأختيار عناصر كل الأبناء الأخيرين. <strong>&lt;span&gt;</strong>.',
      '<strong>ul li:last-child</strong> سيقوم بأختيار أخر عنصر <strong>&lt;li&gt;</strong> الموجود داخل أي عنصر من <strong>&lt;ul&gt;</strong>.'
    ],
    board: "{a)()(oO)p"
  },
  {
    selectorName: "Nth Child و العناصر المزيفة Pseudo-selector",
    helpTitle: "قم بأختيار العناصر من خلال ترتيبها للعنصر أخر.",
    doThis : "قم بأختيار الطبق الثالث",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",

    help : "قم بأختيار الـ <strong>nth</strong> (مثل: 1st, 3rd, 12th etc.) عنصر اﻷبن، والذي يكون بداخل عنصر آخر.",
    examples : [
      '<strong>:nth-child(8)</strong> سيقوم بأختيار العنصر الأبن ذات الترتيب الـ 8 الموجود بداخل عنصر آخر. .',
      '<strong>div p:nth-child(2)</strong> سقوم بأختيار العنصر الثاني <strong>p</strong> من كل عنصر موجود في  <strong>div</strong>',
    ],
    board: "()()(){}"
  },
  {
    selectorName: "للأبن الأصغر Nth أختيار الـ ",
    helpTitle: "متابعة للتحدي السابق، قم بأختيار العنصر الأخير بالنسبة للعنصر آخر.",
    doThis : "قم بأختيار البينتو الأول",
    selector : "bento:nth-last-child(4)",
    syntax: ":nth-last-child(A)",
    help : "سنقوم بإختيار الأبناء من الأباء في الأسفل الكود. وهذا يشبه ما قمنا به سابقاً nth-child, لكننا نقوم بتعلم طريقة جديدة لذلك!",
    examples : [
      '<strong>:nth-last-child(2)</strong> سيقوم بأختيار من العنصر إلى أخر عنصر من الأبناء.'
    ],
    board: "()[]a(OOO)[]"
  },
  {
    selectorName: "أختيار نوع العنصر الأول من المنتقي",
    helpTitle: "قم بأختيار أول عنصر، لكن من خلال نوع العنصر نفسه.",
    doThis : "قم بأختيار التفاحلة الأولى",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "قم بأختيار العنصر الأول من نواع هذا العنصر الموجود داخل عنصر آخر",
    examples : [
      '<strong>span:first-of-type</strong> سيقوم بأختيار العنصر الأول <strong>&lt;span&gt;</strong> من أي نوع.'
    ],
    board: "Aaaa(oO)"
  },
  {
    selectorName: "لكن لنوع عنصر محدد Nth أختيار الـ ",
    // helpTitle: "Nth of Type Selector",
    doThis: "قم بأختيار كل الأطباق",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "سيكون عليك أختيار عنصر محدد على حسب نوع وترتيب عنصر آخر - وحتى لو كانت هذه العناصر ever or odd بالنسبة للعنصر الآخر نفسه .",
    examples: [
      '<strong>div:nth-of-type(2)</strong> سيقوم بأختيار العنصر الثاني من الـ div على سبيل المثال..',
      '<strong>.example:nth-of-type(odd)</strong> سيقوم بأختيار كل العناصر odd كمثال على عناصر الـ class.'
    ],
    board: "()()()(){}()"
  },
  {
    selectorName: "اختيار عنصر الـ nth مع نوع معين، ولكن بصيغة!",
    // helpTitle: "Nth-of-type Selector with formula",
    doThis: "قم بأختيار كل الأطباق في التريبت الثاني, أبتداً من الطبق الثالث",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "هذا الـ nth-of-type formula سيقوم بأختيار كل عناصر nth, حيث يبدأ العد بدأ من هذا العنصر تحديداً.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> سيقوم بأختيار الترتيب السادس من الصيغة من المنتقي <tag>span</tag>, لكن بدأً من (وبالإضافة) من الصيغة الثانية.'
    ],
    board: "()(p)(a)()(A)()"
  },

  {
    selectorName: "عنصر واحيد فقط!، لأنواع المنتقي",
    helpTitle: "قم بأختيار العنصر الذي يكون وحيد من نوعه",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "قم بأختيار التفاحلة من الطبق في الوسط.",
    help : "سيكون عليك أختيار العنصر الوحيد من نوعه مقارنة بعنصر آخر. ",
    examples : [
      '<strong>p span:only-of-type</strong> سيقوم بأختيار كل <tag>span</tag> داخل أي عنصر من <tag>p</tag> اذا كان هذا النوع الوحيد من العنصر <tag>span</tag>.'
    ],
    board: "(aA)(a)(p)"
  },

  {
    selectorName: "العنصر الأخير، من نوع معين من المنتقي",
    helpTitle: "قم بأختيار العنصر الأخير من كل نوع معين من العناصر.",
    doThis : "قم بأختيار التفاحة، والبرتقالة الأخيرة من الطبق",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "سيكون عليك تحديد العنصر الأخير من نوع المنتقي، الموجود داخل عنصر آخر. تذكر أن نوع العنصر هو نفس نوع الوسم الـ HTML، لذلك مثل <tag>p</tag> و <tag>span</tag> هما أنواع مختلفة. <br><br> أتسائل، كيف سيكون بإمكانني معرفة واختيار الديناصور الأخير قبل أنقراضه؟!",
    examples : [
      '<strong>div:last-of-type</strong> سيقوم بأختيار آخر عنصر من كل عنصر <strong>&lt;div&gt;</strong>.',
      '<strong>p span:last-of-type</strong> سيقوم بأختيار آخر عنصر <strong>&lt;span&gt;</strong> من كل عنصر <strong>&lt;p&gt;</strong>.'
    ],
    board: "ooPPaa"
  },
  {
    selectorName: "المنتقي الفارغ!",
    helpTitle: "قم بأختيار العنصر الذي لا يملك أبن",
    doThis : "قم بأخيتار البينتو الفارغ",
    selector : "bento:empty",
    syntax: ":empty",
    help : "قم بأختيار كل العناصر التي لاتحوي على عناصر آخر بداخلها.",
    examples : [
      '<strong>div:empty</strong> سيقوم بأختيار كل العناصر الفارغة <strong>&lt;div&gt;</strong>.'
    ],
    board: "[][p][][]"
  },
  {
    selectorName: "نفي العناصر المزيفة Pseudo-class",
    helpTitle: "قم بأختيار كل العناصر التي لا تتاطبق مع عنصر النفي. ",

    doThis : "قم بأختيار التفاحة الكبيرة",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'بإمكانك اختيار كل العناصر التي لا تتاطبق مع العنصر <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> سيقوم بأختيار كل العناصر التي لا تحوي على <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> سيقوم بأختيار كل العناصر <tag>div</tag>  التي لا تكون الأبن الأول.',
      '<strong>:not(.big, .medium)</strong> سيقوم بأختيار كل العناصر التي لا تحويل على <strong>class="big"</strong> أو <strong>class="medium"</strong>.'
    ],
    board: "{a}(A)A(o)p"
  }
];


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

strings['de'] = {
  'table'  : 'tisch',
  'apple'  : 'apfel',
  'orange' : 'orange',
  'pickle' : 'gurke',
  'plate'  : 'teller',
  'bento'  : 'bento',
  'fancy'  : 'schick',
  'small'  : 'klein',
  
  /* ui */
  
  "Level {0} of {1}" : 'Level {0} von {1}',
  'str1' : "Kein Problem, hier ist sie!",
  'str2' : "Du lernst nun CSS-Selektoren!\nSelektoren helfen Elemente auszuwählen, die bearbeitet werden sollen.",
  'str3' :  "Anhang 1 - Eine CSS-Regel",
  'str4' : 'Hier ist "p" der Selektor (wählt alle &lt;p&gt;-Elemente) und wendet den margin-bottom-Stil an.',
  'str5' : "Um zu spielen, gib einen CSS-Selektor in den Editor unten ein, der die korrekten Gegenstände beschreibt. War die Antwort richtig, kommst du zum nächsten Level.",
  'str6': "Zeige auf die Gegenstände auf dem Tisch, um das HTML-Markup anzuzeigen.",
  'str7': "Hilfe zu den Selektoren auf der rechten Seite! &rarr;",
  'str8': "Ok, danke!",
  'str9': "Hilfe, ich komme nicht weiter!",
  'str10': "<div class='file-name'>style.css</div> CSS-Editor",
  'str11': "Gib einen CSS-Selektor ein",
  'str12': "Eingabe &crarr;",
  'str13': "{<br/>/* Stile würden hier hin kommen. */<br/>}",
  'str14': '<br/>/* <br/>Gib eine Zahl ein um zu einem Level zu springen.<br/>z.B. &rarr; "5" für Level 5 <br/>*/',
  'str15': "<div class='file-name'>table.html</div> HTML-Viewer",
  'str16': "Was ist das hier?",
  'str17': "Dies ist ein kleines Spiel um dir zu helfen CSS-Selektoren zu lernen. Gib den richtigen Selektor ein um jedes Level zu beenden. Hilfe gibt es auf der rechten Seite."
}

levels['de'] = [
  {
    helpTitle : "Wähle Elemente nach ihrem Typ",
    selectorName : "Typ-Selektor",
    doThis : "Wähle die Teller",
    selector : "plate",
    syntax : "A",
    help : "Wählt alle Elemente vom Typ <strong>A</strong>. Der Typ verweist auf den Typ des Tags, also sind <tag>div</tag>, <tag>p</tag> und <tag>ul</tag> alle verschiedene Element-Typen.",
    examples : [
      '<strong>div</strong> wählt alle <tag>div</tag>-Elemente.',
      '<strong>p</strong> wählt alle <tag>p</tag>-Elemente.',
      ],
    board: "()()"
  },
  {
    doThis : "Wähle die Bentō-Boxen",
    selector : "bento",
    syntax : "A",
    helpTitle : "Wähle Elemente nach ihrem Typ",
    selectorName : "Typ-Selektor",
    help : "Wählt alle Elemente vom Typ <strong>A</strong>. Der Typ verweist auf den Typ des Tags, also sind <tag>div</tag>, <tag>p</tag> und <tag>ul</tag> alle verschiedene Element-Typen.",
    examples : [
      '<strong>div</strong> wählt alle <tag>div</tag>-Elemente.',
      '<strong>p</strong> wählt alle <tag>p</tag>-Elemente.',
      ],
    board: "[]()[]"
  },
  {
    doThis : "Wähle die schicken Teller",
    selector : "#fancy",
    selectorName: "ID-Selektor",
    helpTitle: "Wähle Elemente mit einer ID",
    syntax: "#id",
    help : 'Wähle die Elemente mit dem <strong>id</strong>-Attribut. Du kannst den ID-Selektor auch mit dem Typ-Selektor kombinieren.',
    examples : [
      '<strong>#cool</strong> wählt alle Elemente mit <strong>id="cool"</strong>',
      '<strong>ul#long</strong> wählt <strong>&lt;ul id="long"&gt;</strong>'
    ],
    board: "{}()[]"
  },
  {
    helpTitle: "Wählt ein Element in einem anderen",
    selectorName : "Nachfahren-Selektor",
    doThis : "Wähle den Apfel auf dem Teller",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",

    help : "Wählt alle <strong>B</strong> innerhalb von <strong>A</strong>. Hier ist <strong>B</strong> das abstammende Element, also ein Element in einem anderen.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> wählt alle <strong>&lt;strong&gt;</strong>, die in irgend einem <strong>&lt;p&gt;</strong> sind',
      '<strong>#fancy&nbsp;&nbsp;span</strong> wählt alle <strong>&lt;span&gt;</strong> die in einem Element mit  <strong>id="fancy"</strong> sind',
    ],
    board: "[](A)A"
  },
  {
    doThis : "Wähle die Gurke auf dem schicken Teller",
    selector : "#fancy pickle",
    helpTitle: "Kombiniere den Nachfahren- & ID-Selektor",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Du kannst jeden Selektor mit dem Nachfahren-Selektor kombinieren.',
    examples : [
      '<strong>#cool&nbsp;span</strong> wählt alle <strong>&lt;span&gt;</strong>-Elemente, die in Elementen mit <strong>id="cool"</strong> sind'
    ],
    board: "[O]{P}(P)"
  },
  {
    doThis : "Wähle die kleinen Äpfel",
    selector : ".small",
    selectorName: "Klassen-Selektor",
    helpTitle: "Wähle Elemente nach ihrer Klasse",

    syntax: ".classname",
    help : 'Der Klassen-Selektor wählt alle Elemente mit diesem Klassen-Attribut. Elemente können nur eine ID haben, aber mehrere Klassen.',
    examples : [
    '<strong>.neato</strong> wählt alle Elemente mit <strong>class="neato"</strong>'
    ],

    board: "Aa(a)()"
  },
  {
    doThis : "Wähle die kleinen Orangen",
    selector : "orange.small",
    helpTitle: "Kombiniere den Klassen-Selektor",
    syntax: "A.className",
    help : 'Du kannst den Klassen-Selektor mit anderen Selektoren kombinieren, wie den Typ-Selektor.',
    examples : [
      '<strong>ul.important</strong> wählt alle <strong>&lt;ul&gt;</strong>-Elemente mit <strong>class="important"</strong>',
      '<strong>#big.wide</strong> wählt alle Elemente mit <strong>id="big"</strong>, die auch <strong>class="wide"</strong> haben'
    ],
    board: "Aa[o](O)(o)"
  },
  {
    doThis : "Wähle die kleinen Orangen in den Bentōs",
    selector : "bento orange.small",
    syntax: "Leg dich ins Zeug!",
    helpTitle: "Du kannst es...",
    help : 'Kombiniere was du in den letzten paar Leveln gelernt hast um dies zu lösen!',
    board: "A(o)[o][a][o]"
  },
  {
    doThis : "Wähle alle Teller und Bentōs",

    selector : "plate,bento",
    selectorName : "Komma-Kombinierer",
    helpTitle: "Kombiniere, Selektoren, mit... Kommas!",
    syntax : "A, B",
    help : 'Dank Shatners Technologie wählt dies alle <strong>A</strong>- und <strong>B</strong>-Elemente. Du kannst auf diese Weise alle Selektoren kombinieren, und es können auch mehr als zwei sein.',
    examples: [
    '<strong>p, .fun</strong> wählt alle <tag>p</tag>-Elemente sowie alle Elemente mit <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> wählt alle <tag>a</tag>-, <tag>p</tag>- und <tag>div</tag>-Elemente'
    ],
    board: "pP(P)[P](P)Pp"
  },
  {
    doThis : "Wähle alle Gegenstände!",
    selector : "*",
    selectorName:  "Der Universal-Selektor",
    helpTitle: "Du kannst alles auswählen!",
    syntax : "*",
    help : 'Mit dem Universal-Selektor kannst du alle Elemente auswählen! ',
    examples : [
      '<strong>p *</strong> wählt alle Elemente in allen <strong>&lt;p&gt;</strong>-Elementen.'
    ],
    board: "A(o)[][O]{)"
  },
  {
    doThis : "Wahle alles auf einem Teller",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Kombiniere den Universal-Selektor",
    help : 'Dies wählt alle Elemente innerhalb von <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> wählt alle Elemente in allen <strong>&lt;p&gt;</strong>-Elementen.',
      '<strong>ul.fancy *</strong> wählt alle Elemente in allen <strong>&lt;ul class="fancy"&gt;</strong>-Elementen.'
    ],
    board: "{o}(P)a(A)"
  },
  {
    doThis : "Wähle jeden Apfel, der neben einem Teller liegt",
    selector : "plate + apple",
    helpTitle: "Wählt ein Element, das direkt einem anderen folgt",
    selectorName: "Benachbarte Geschwister-Selektor",
    syntax : "A + B",
    help : "Dies wählt alle <strong>B</strong>-Elemente, die direkt auf <strong>A</strong> folgen. Elemente, die einem anderen folgen, heißen Geschwister. Sie sind auf der selben Ebene bzw. Tiefe.<br/><br/>Im HTML-Markup sind alle Elemente auf der gleichen Ebene Geschwister.",
    examples : [
      '<strong>p + .intro</strong> wwählt alle Elemente mit <strong>class="intro"</strong>, die direkt auf <tag>p</tag> folgen',
      '<strong>div + a</strong> wählt alle <tag>a</tag>-Elemente, die direkt auf <tag>div</tag> folgen'
    ],
    board: "[a]()a()Aaa"
  },
  {
    selectorName: "Allgemeiner Geschwister-Selektor",
    helpTitle: "Wählt Elemente, die einem anderen folgen",
    syntax: "A ~ B",
    doThis : "Wähle die Gurken recht neben dem Bentō",
    selector : "bento ~ pickle",
    help : "Du kannst alle Geschwister von einem Element wählen, die diesem folgen. Dies ist wie der Nachbar-Selektor (A + B), nur dass dieser alle folgenden Elemente statt nur einem auswählt.",
    examples : [
      '<strong>A ~ B</strong> wählt alle <strong>B</strong>, die auf <strong>A</strong> folgen'
    ],
    board: "P[o]pP(P)(p)"
  },
  {
    selectorName: "Kind-Selektor",
    syntax: "A > B&nbsp;",
    doThis : "Wähle den Apfel direkt auf dem Teller",
    selector : "plate > apple",
    helpTitle: "Wähle direkte Kinder von einem Element",
    help : "Du kannst Elemente auswählen, die direkte Kinder von anderen Alementen sind. Ein Kind-Element ist ein Element, das direkt innerhalb eines anderen Elements ist.<br/><br/>Elemente, die tiefer liegen, heißen einfach Nachfahren.",
    examples : [
      '<strong>A > B</strong> wählt alle <strong>B</strong>, die direkte Kinder von <strong>A</strong> sind'
    ],
    board: "([A])(A)()Aa"
  },
  {
    selectorName: "Erstes Kind-Pseudo-Selektor",
    helpTitle: "Wählt das erste Kind-Element in einem anderen Element",
    doThis : "Wähle die oberste Orange",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Du kannst nur das erste Kind-Element auswählen. Ein Kind-Element ist ein Element, das direkt innerhalb eines anderen Elements ist. Du kannst diesen Pseudo-Selektor mit anderen Selektoren kombinieren.",
    examples : [
      '<strong>:first-child</strong> Wählt alle erstes-Kind-Elemente',
      '<strong>p:first-child</strong> wählt alle <strong>&lt;p&gt;</strong>-Elemente, die erste Kinder sind.',
      '<strong>div p:first-child</strong> wählt alle <strong>&lt;p&gt;</strong>-Elemente die erste Kinder und in <strong>&lt;div&gt;</strong> sind.'
    ],
    board: "[]()(OOO)p"
  },
  {
    selectorName: "Einzelkind-Pseudo-Selektor",
    helpTitle: "Wählt ein Element, dass das einzige in einem anderen ist.",
    doThis : "Wähler den Apfel und die Gurke auf den Tellern",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Du kannst alle Elemente auswählen, die das einzige in einem anderen Element sind.",
    examples : [
      '<strong>span:only-child</strong> wählt die <strong>&lt;span&gt;</strong>-Elemente, die das einzige Kind von einem anderen Element sind.',
      '<strong>ul li:only-child</strong> wählt nur die <strong>&lt;li&gt;</strong>-Elemente, die einzeln in <strong>&lt;ul&gt;</strong> sind.'
    ],
    board: "(A)(p)[]P(oO)p"
  },
  {
    selectorName: "Letztes Kind-Pseudo-Selektor",
    helpTitle: "Wähle das letzte Kind-Element in einem anderen Element",
    doThis : "Wähle den kleinen Apfel und die Gurke",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Du kannst diesen Selektor benutzen um ein Element auszuwählen, dass das letzte Kind-Element in einem anderen Element ist.<br/><br/>Pro Tipp &rarr; Wenn es nur ein einziges Element gibt, zählt dieses als erste Kind, als einziges Kind und als letzte Kind!",
    examples : [
      '<strong>:last-child</strong> wählt alle letztes-Kind-Elemente.',
      '<strong>span:last-child</strong> wählt alle <strong>&lt;span&gt;</strong>-Elemente, die letztes Kind sind.',
      '<strong>ul li:last-child</strong> wählt das letzte <strong>&lt;li&gt;</strong>-Element in jedem <strong>&lt;ul&gt;</strong>.'
    ],
    board: "{a)()(oO)p"
  },
  {
    selectorName: "N-tes Kind-Pseudo-Selektor",
    helpTitle: "Wählt ein Element nach seiner Reihenfolge in einem anderen Element",
    doThis : "Wähle den 3. Teller",
    selector : ":nth-child(3)",
    syntax: ":nth-child(N)",

    help : "Wähle das <strong>N-te</strong> (z.B.: 1., 3., 12. usw.) Kind-Element in einem anderen Element.",
    examples : [
      '<strong>:nth-child(8)</strong> wählt jedes Element, das das 8. Kind-Element eines anderen Elements ist.',
      '<strong>div p:nth-child(2)</strong> wählt das zweite <strong>p</strong> in jedem <strong>div</strong>',
    ],
    board: "()()(){}"
  },
  {
    selectorName: "N-t Letztes-Kind-Selektor",
    helpTitle: "Wählt ein Element nach seiner Reihenfolge in einem anderen Element, von hinten gezählt",
    doThis : "Wähle den 1. Bentō",
    selector : "bento:nth-last-child(4)",
    syntax: ":nth-last-child(N)",
    help : "Wähle die Kinder von hinten an gezählt. Dies ist wie <strong>nth-child</strong>, aber von hinten gezählt!",
    examples : [
      '<strong>:nth-last-child(2)</strong> wählt alle zweitletzten Elemente.'
    ],
    board: "()[]a(OOO)[]"
  },
  {
    selectorName: "Erster eines Typs-Selektor",
    helpTitle: "Wähle das erste Element eines bestimmten Typs",
    doThis : "Wähle den ersten Apfel",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Wähle das erste Element diesen Typs in einem anderen Element.",
    examples : [
      '<strong>span:first-of-type</strong> wähle das erste <strong>&lt;span&gt;</strong> in jedem Element.'
    ],
    board: "Aaaa(oO)"
  },
  {
    selectorName: "N-ter eines Typs-Selektor",
    // helpTitle: "Nth of Type Selector",
    doThis: "Wähle alle gerade Teller",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(N)",
    help: "Wähle ein Element anhand seines Typs und seiner Reihenfolge in einem anderen Element - oder gerade oder ungerade Instanzen in diesem Element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> wähle das zweite Auftreten von <strong>div</strong>.',
      '<strong>.example:nth-of-type(odd)</strong> wähle alle ungeraden Instanzen der <strong>example</strong>-Klasse.'
    ],
    board: "()()()(){}()"
  },
  {
    selectorName: "N-ter eines Typs-Selektor mit Formel",
    // helpTitle: "Nth-of-type Selector with formula",
    doThis: "Wähle jeden 2. Teller, startend mit dem 3.",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "Die Formel des Selektors wählt jedes n-te Element, startend mit einer bestimmten Instanz des Elements.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> wählt jedes sechste <tag>span</tag>, startend vom einschließlich zweitem Auftreten.'
    ],
    board: "()(p)(a)()(A)()"
  },

  {
    selectorName: "Einziger des Typs-Selektor",
    helpTitle: "Wählt Elemente, die die einzigen von ihrem Typ sind",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Wähle den Apfel auf dem mittleren Teller.",
    help : "Wähle das einzige Element seines Typs in einem anderen Element.",
    examples : [
      '<strong>p span:only-of-type</strong> wählt ein <tag>span</tag> in jedem <tag>p</tag> wenn es das einzige <tag>span</tag> in diesem ist.'
    ],
    board: "(aA)(a)(p)"
  },

  {
    selectorName: "Letzter eines Typs-Selektor",
    helpTitle: "Wählt das letzte Element eines bestimmten Typs",
    doThis : "Wähle den 2. Apfel und Orange",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Wählt das jeweils letzer Element dieses Typs in einem anderen Element. Denk dran, das der Typ auf die Art des Tags verweist, also dass <tag>p</tag> und <tag>span</tag> verschiedene Typen sind. <br><br> Ich frage mich, ob auf diese Weise der letzte Dinosaurier ausgewählt wurde, bevor er ausgelöscht wurde.",
    examples : [
      '<strong>div:last-of-type</strong> wählt das letzte <strong>&lt;div&gt;</strong> in jedem Element.',
      '<strong>p span:last-of-type</strong> wählt das letzte <strong>&lt;span&gt;</strong> in jedem <strong>&lt;p&gt;</strong>.'
    ],
    board: "ooPPaa"
  },
  {
    selectorName: "Leere-Selektor",
    helpTitle: "Wähle jedes Element, dass keine Kinder hat",
    doThis : "Wähle die leeren Bentōs",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Wähle die Elemente, die keine anderen Elemente innerhalb von sich haben.",
    examples : [
      '<strong>div:empty</strong> wählt alle leeren <strong>&lt;div&gt;</strong>-Elemente.'
    ],
    board: "[][p][][]"
  },
  {
    selectorName: "Negierungs-Pseudo-Klasse",
    helpTitle: "Wähle alle Elemente, die nicht den Negations-Selektor erfüllen",

    doThis : "Wähle die großen Äpfel",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Du kannst dies benutzen um alle Elemente zu wählen, die nicht den Selektor <strong>"X"</strong> erfüllen.',
    examples : [
      '<strong>:not(#fancy)</strong> wählt alle Elemente, die nicht <strong>id="fancy"</strong> haben.',
      '<strong>div:not(:first-child)</strong> wählt alle <tag>div</tag>, die nicht ein erstes Kind sind.',
      '<strong>:not(.big, .medium)</strong> wählt alle Elemente, die nicht <strong>class="big"</strong> oder <strong>class="medium"</strong> haben.'
    ],
    board: "{a}(A)A(o)p"
  }
];

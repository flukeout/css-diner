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

strings['it'] = {
  'table'  : 'tavolo',
  'apple'  : 'mela',
  'orange' : 'arancia',
  'pickle' : 'sottaceto',
  'plate'  : 'piatto',
  'bento'  : 'bento',
  'fancy'  : 'fantasioso',
  'small'  : 'piccola',
  
  /* ui */
  "Level {0} of {1}" : 'Livello {0} di {1}',
  'str1' : "Nessun problema, ci sei!",
  'str2' : "Stai per imparare si selettori CSS! \n I selettori sono la maniera con cui scegli gli elementi acui applicare lo stile.",
  'str3' :  "Allegato 1 - Una regola CSS",
  'str4' : 'Qui "p" &egrave; il selettore (seleziona tutti gli elementi &lt;p&gt;) e viene applicato lo stile al bordo inferiore',
  'str5' : "Per giocare, inserisci un selettore nell'editor qui sotto per selezionare gli elementi corretti sulla tavola \n Se indovini, avanzerai al livello successivo",
  'str6': "Sposta il mouse su un elemento sulla tavola per vedere il codice HTML",
  'str7': "Ottieni aiuto sui selettori qui a destra! &rarr;",
  'str8': "Ok, ci sono!",
  'str9': "Aiuto, mi sono bloccato!", // cit. :-)
  'str10': "<div class='file-name'>style.css</div>Editor CSS",
  'str11': "Inserisci un selettore CSS",
  'str12': "invio",
  'str13': "{<br>/* Gli stili andrebbero qui */<br>}",
  'str14': '<br/>/* <br/> Inserisci un numero per saltare a un livello.<br>Es &rarr; "5" per il livello 5<br>*/',
  'str15': "<div class='file-name'>table.html</div> Visualizzatore HTML",
  'str16': "Cos'&egrave; questo?",
  'str17': "E' un piccolo gioco per aiutarti a imparare i selettori CSS. Inserisci il selettore corretto per completare ogni livello. Sulla destra trovi un aiuto."
}

levels['it'] = [
  {
    helpTitle : "Seleziona gli elementi per il loro tipo",
    selectorName : "Selettore di Tipo",
    doThis : "Seleziona i piatti",
    selector : "plate",
    syntax : "A",
    help : "Seleziona tutti gli elementi ti tipo <strong>A</strong>. Il tipo si riferisce al tipo del tag: <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> sono tutti diversi tipi di elementi.",
    examples : [
      '<strong>div</strong> seleziona tutti gli elementi <tag>div</tag>.',
      '<strong>p</strong> seleziona tutti gli elementi <tag>p</tag>.',
      ],
    board: "()()"
  },
  {
    doThis : "Seleziona le scatole bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "Seleziona gli elementi per il loro tipo",
    selectorName : "TSelettore di Tipo",
    help : "Seleziona tutti gli elementi ti tipo <strong>A</strong>. Il tipo si riferisce al tipo del tag: <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> sono tutti diversi tipi di elementi.",
    examples : [
      '<strong>div</strong> seleziona tutti gli elementi <tag>div</tag>.',
      '<strong>p</strong> seleziona tutti gli elementi <tag>p</tag>.',
      ],
    board: "[]()[]"
  },
  {
    doThis : "Seleziona il piatto fantasioso",
    selector : "#fancy",
    selectorName: "Selettore per ID",
    helpTitle: "Seleziona gli elementi con un ID",
    syntax: "#id",
    help : "Seleziona gli elementi con l'attributo <strong>id</strong>. Puoi anche combinare il selettore ID  con il selettore di tipo.",
    examples : [
      '<strong>#cool</strong> selezioner&agrave; l&apos;elemento con <strong>id="cool"</strong>',
      '<strong>ul#long</strong>  selezioner&agrave; l&apos;elemento <strong>&lt;ul id="long"&gt;</strong>'
    ],
    board: "{}()[]"
  },
  {
    helpTitle: "Seleziona un elemento all'inerno di un'altro elemento",
    selectorName : "Selettore di discendente",
    doThis : "Seleziona la mela sul piatto",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",

    help : "Seleziona tutti i <strong>B</strong> all'interno di <strong>A</strong>. In questo caso <strong>B</strong> &egrave; l'elemento discentente, cio&egrave; &egrave; un elemento che &grave; all'interno di un'altro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> selezioner&agrave; tutti gli <strong>&lt;strong&gt;</strong> che sono discendenti di qualunque <strong>&lt;p&gt;</strong>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selezioner&agrave; tutti gli <strong>&lt;span&gt;</strong> che sono discendenti dell&apos;elemento con <strong>id="fancy"</strong>',
    ],
    board: "[](A)A"
  },
  {
    doThis : "Seleziona il sottaceto sul piatto fantasioso",
    selector : "#fancy pickle",
    helpTitle: "Combina i selettori di discendente e per ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Puoi combinare qualunque selettore con il selettore di discendente.',
    examples : [
      '<strong>#cool&nbsp;span</strong> selezioner&agrave; tutti gli elementi <strong>&lt;span&gt;</strong> che sono dentro l&apos;elemento con <strong>id="cool"</strong>'
    ],
    board: "[O]{P}(P)"
  },
  {
    doThis : "Seleziona le mele piccole",
    selector : ".small",
    selectorName: "Selettore di classe",
    helpTitle: "Seleziona gli elementi per la loro classe",

    syntax: ".classname",
    help : 'Il selettore di classe seleziona tutti gli elementi che hanno quel valore come attributo class. Gli elementi possono avere un solo ID, ma molte classi.',
    examples : [
    '<strong>.neato</strong> seleziona gli elementi con <strong>class="neato"</strong>'
    ],

    board: "Aa(a)()"
  },
  {
    doThis : "Seleziona le arance piccole",
    selector : "orange.small",
    helpTitle: "Combina il selettore di classe",
    syntax: "A.className",
    help : 'Puoi combinare il selettore di classe con altri selettori, come il selettore di tipo.',
    examples : [
      '<strong>ul.important</strong> selezioner&agrave; tutti gli elementi <strong>&lt;ul&gt;</strong> che hanno <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selezioner&agrave; l&apos;elemento con <strong>id="big"</strong> che ha anche <strong>class="wide"</strong>'
    ],
    board: "Aa[o](O)(o)"
  },
  {
    doThis : "Seleziona le arance piccole nelle bento",
    selector : "bento orange.small",
    syntax: "Mettiti sotto!",
    helpTitle: "Puoi farcela...",
    help : 'Combina quello che hai imparato negli ultimi livelli per risolvere questo!',
    board: "A(o)[o][a][o]"
  },
  {
    doThis : "Seleziona tutti i piatti e le bento",
    selector : "plate,bento",
    selectorName : "Combinatore Virgola",
    helpTitle: "Combina, selettori, con... le virgole!",
    syntax : "A, B",
    help : 'Grazie alla tecnologia Shatner, questo selezioner&agrave; tutti gli elementi <strong>A</strong> e <strong>B</strong>. Puoi combinare qualsiasi selettore in questa maniera, e puoi specificarne pi&ugrave; di uno.',
    examples: [
    '<strong>p, .fun</strong> selezioner&agrave; tutti gli elementi <tag>p</tag> e tutti gli elementi con <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> selezioner&agrave; tutti gli elementi <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
    board: "pP(P)[P](P)Pp"
  },
  {
    doThis : "Seleziona tutto!",
    selector : "*",
    selectorName:  "Il selettore universale",
    helpTitle: "Puoi selezionare tutto!",
    syntax : "*",
    help : 'Puoi selezionare tutti gli elementi con il selettore universale!',
    examples : [
      '<strong>p *</strong> selezioner&agrave; tutti gli elementi dentro a tutti gli elementi <strong>&lt;p&gt;</strong>.'
    ],
    board: "A(o)[][O]{)"
  },
  {
    doThis : "Seleziona tutto quello che è su un piatto",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combina il selettore universale",
    help : 'Questo selezioner&agrave; tutti gli elementi dentro a <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> selezioner&agrave; tutti gli elementi dentro a tutti gli elementi <strong>&lt;p&gt;</strong>.',
      '<strong>ul.fancy *</strong> selezioner&agrave; tutti gli elementi dentro a tutti gli elementi <strong>&lt;ul class="fancy"&gt;</strong>.'
    ],
    board: "{o}(P)a(A)"
  },
  {
    doThis : "Seleziona la mela subito a fianco a un piatto",
    selector : "plate + apple",
    helpTitle: "Seleziona un elemento che direttamente adiacente un'altro elemento",
    selectorName: "Selettore di fratello adiacente",
    syntax : "A + B",
    help : "Questo seleziona tutti gli elementi <strong>B</strong> direttamente adiacente a <strong>A</strong>. Gli elementi adiacenti tra di loro sono chiamati fratelli. Sono sullo stello livello, o profondit&agrave;. <br/><br/>Nel codice HTML di questo livello, gli elementi che hanno la stessa indentazione sono fratelli.",
    examples : [
      '<strong>p + .intro</strong>  selezioner&agrave; tutti gli elementi con <strong>class="intro"</strong> che sono direttamente adiacenti a un <tag>p</tag>',
      '<strong>div + a</strong>  selezioner&agrave; tutti gli elementi <tag>a</tag> che sono direttamente adiacenti a un <tag>div</tag>'
    ],
    board: "[a]()a()Aaa"
  },
  {
    selectorName: "Selettore di fratelli generici",
    helpTitle: "Seleziona gli elementi adiacenti altri elementi",
    syntax: "A ~ B",
    doThis : "Seleziona tutti i sottaceti a destra della bento",
    selector : "bento ~ pickle",
    help : "Puoi selezionare tutti i fratelli di un elemento. Funziona come il Selettore di fratello adiacente (A + B)  tranne che prende tutti gli elementi adiacenti invece di solo uno.",
    examples : [
      '<strong>A ~ B</strong> selezioner&agrave; tutti gli elementi <strong>B</strong> adiacenti a <strong>A</strong>'
    ],
    board: "P[o]pP(P)(p)"
  },
  {
    selectorName: "Selettore di figlio",
    syntax: "A > B&nbsp;",
    doThis : "Seleziona la mela direttamente su un piatto",
    selector : "plate > apple",
    helpTitle: "Seleziona figli diretti di un elemento",
    help : "Puoi selezionare gli elementi che sono direttamente figli di altri elementi. Un elemeneto figlio &egrave; un qualsiasi elemento che &grave; direttamente nidificato in un'altro elemento.<br><br>Gli elementi che sono innestati più in profondotà sono chiamati elementi discendenti.",
    examples : [
      '<strong>A > B</strong> selezioner&agrave; tutti gli elementi <strong>B</strong> che sono direttamente figli di <strong>A</strong>'
    ],
    board: "([A])(A)()Aa"
  },
  {
    selectorName: "Pseudo-selettore Primo Figlio",
    helpTitle: "Seleziona il primo elemento figlio all'interno di un'altro elemento",
    doThis : "Seleziona l'arancia in cima",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Puoi seleziona il primo elemento figlio. Un elemeneto figlio &egrave; un qualsiasi elemento che &grave; direttamente nidificato in un'altro elemento. Puoi combinare questo pseudo-selettore con altri selettori.",
    examples : [
      '<strong>:first-child</strong> seleziona tutti gli elementi che sono primi figli di qualche elemento.',
      '<strong>p:first-child</strong> seleziona tutti gli elementi <strong>&lt;p&gt;</strong> che sono primi figli di qualche elemento.',
      '<strong>div p:first-child</strong> seleziona tutti gli elementi <strong>&lt;p&gt;</strong> che sono primi figli di <strong>&lt;div&gt;</strong>.'
    ],
    board: "[]()(OOO)p"
  },
  {
    selectorName: "Pseudo-selettore Figlio Unico",
    helpTitle: "Seleziona un elemento che è l'unico elemento all'interno di un'altro.",
    doThis : "Seleziona la mela e il sottaceto sul piatto",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Puoi selezionare qualunque elemento che è l'unico elemento all'interno di un'altro.",
    examples : [
      '<strong>span:only-child</strong> seleziona gli elementi <strong>&lt;span&gt;</strong> che sono figli unici di un&apos;altro elemento',
      '<strong>ul li:only-child</strong> seleziona l&apos;unico elemento <strong>&lt;li&gt;</strong> in <strong>&lt;ul&gt;</strong>.'
    ],
    board: "(A)(p)[]P(oO)p"
  },
  {
    selectorName: "Pseudo selettore Ultimo Figlio",
    helpTitle: "Seleziona l'ultimo elemento all'interno di un'altro elemento",
    doThis : "Seleziona la mela piccola e il sottaceto",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Puoi utilizzare questo selettore per selezionare un elemento che è l'ultimo figlio all'interno di un'altro elemento.<br><br>Pro Tip &rarr; nel caso ci sia un solo elemento, quell'elemento conta come first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> seleziona tutti gli ultimi elementi figli di elementi.',
      '<strong>span:last-child</strong> seleziona tutti gli utlimi elementi figli di <strong>&lt;span&gt;</strong>.',
      '<strong>ul li:last-child</strong> seleziona l&apos;ultimo elemento <strong>&lt;li&gt;</strong> all&apos;interno di qualunque <strong>&lt;ul&gt;</strong>.'
    ],
    board: "{a)()(oO)p"
  },
  {
    selectorName: "Pseudo-selettore n-esimo figlio",
    helpTitle: "Seleziona un elemento dal suo ordine all'interno di un'altro elemento",
    doThis : "Seleziona il terzo piatto",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",

    help : "Seleziona l'<strong>n-esimo</strong>  (Es: 1°, 2°, 3° etc.) elemento figlio in un'altro elemento.",
    examples : [
      '<strong>:nth-child(8)</strong> seleziona tutti gli elementi che sono l&apos;ottavo figlio di un&apos;altro elemento.',
      '<strong>div p:nth-child(2)</strong> seleziona il secondo elemento <strong>p</strong> in ogni <strong>div</strong>',
    ],
    board: "()()(){}"
  },
  {
    selectorName: "Psuedo-selettore n-esimo ultimo figlio",
    helpTitle: "Seleziona un elemento dal suo ordine all'interno di un'altro elemento, contando all'indietro",
    doThis : "Seleziona la prima bento",
    selector : "bento:nth-last-child(4)",
    syntax: ":nth-last-child(A)",
    help : "Seleziona il figlio contando dal fondo. E' come <strong>:nth-child</strong>, ma contando all'indietro!",
    
    examples : [
      '<strong>:nth-last-child(2)</strong> seleziona tutti i penultimi elementi figli.'
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

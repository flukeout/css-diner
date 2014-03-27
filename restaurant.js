var language = "en";
var level;
var currentLevel = parseInt(localStorage.currentLevel,10) || 0;
var levelTimeout = 1000;
var fails = 0;

$(document).ready(function(){
  /* get language from browser */
  language = window.navigator.userLanguage || window.navigator.language;
  if (!(language in levels) && language.search("-")>0){
    language = language.substring(0,language.search("-"));
    if (!(language in levels)) language = "en";
  } else {
    language = "en";
  }
  
  $("[data-lang-id]").each(function(){
    var id = this.dataset.langId;
    var txt = "";
    switch(id){
        case "11":
          txt = $(this).attr("placeholder");
          break;
        default:
          txt = $(this).html();
    }
    strings['en']['str'+id] = txt;
  });

  /* translate UI*/
  translate();
  
  /* language selector */
  $("#lang-select").text(language);
  
  var elm = $(".lang > ul");
  for(var k in strings) {
    elm.append("<li><a href='#' class='lang-option'>"+k+"</a></li>");
  }
  $(".lang-option").bind("click", function(ev){
    ev.preventDefault();
    console.log("!");
    language = $(this).text();
    console.log(language);
    translate();
    loadLevel();
  });
  
  
  $(".note-toggle").on("click", function(){
    $(this).hide();
    $(".note").slideToggle();
  });

  $(".level-menu-toggle-wrapper").on("click",function(){
    $(".level-menu").toggleClass("open");
  });
  //Handle inputs from the input box on enter
  $("input").on("keypress",function(e){
    e.stopPropagation();
    if(e.keyCode ==  13){
      enterHit();
      return false;
    }
  });

  $("input").on("keyup",function(e){
    e.stopPropagation();
    var length = $(this).val().length;
    if(length > 0) {
      $("input").removeClass("input-strobe");
    } else {
      $("input").addClass("input-strobe");
    }
  });

  $(".editor").on("click",function(){
    $("input").focus();
  });

  //Add tooltips
  $(".table").on("mouseover","*",function(e){
    e.stopPropagation();
    showTooltip($(this));
  });

  //Shows the tooltip on the table
  $(".markup").on("mouseover","div *",function(e){

    el = $(this);

    var markupElements = $(".markup *");
    var index = markupElements.index(el) -1;

    showTooltip($(".table *").eq(index));
    e.stopPropagation();
  });

  //Shows the tooltip on the table
  $(".markup").on("mouseout","*",function(e){
    e.stopPropagation();
    hideTooltip();
  });

  $(".table").on("mouseout","*",function(e){
    hideTooltip();
    e.stopPropagation();
  });

  $(".enter-button").on("click",function(){
    enterHit();
  })

  $(".table-wrapper,.table-edge").css("opacity",0);

  buildLevelmenu();

  setTimeout(function(){
    loadLevel();
    $(".table-wrapper,.table-edge").css("opacity",1);
  },50);

});

function translate(){
  var s = strings[language];
  for(var k in s){
    if (k.substring(0,3)=="str") {
      var n = k.substring(3);
      var elm = $("[data-lang-id="+n+"]");
      switch(n){
          case "11":
            elm.attr("placeholder", s[k]);
            break;
          default:
            elm.html(s[k]);
      } 
    }
  }
}

function buildLevelmenu(){
  for(var i = 0; i < levels[language].length; i++){
    var level = levels[language][i];
    var item = document.createElement("a");
    $(item).html(level.syntax);
    $(".level-menu .levels").append(item);
    $(item).on("click",function(){
      currentLevel = $(this).index();
      loadLevel();
    });
  }
}

function hideTooltip(){
  $(".enhance").removeClass("enhance");
  $("[data-hovered]").removeAttr("data-hovered");
  $(".helper").hide();
}

function showTooltip(el){
  el.attr("data-hovered",true);
  var s = strings[language];
  var tableElements = $(".table *");
  var index = tableElements.index(el);
  var that = el;
  $(".markup > div *").eq(index).addClass("enhance").find("*").addClass("enhance");

  var helper = $(".helper");

  var pos = el.offset();
  helper.css("top",pos.top - 65);
  helper.css("left",pos.left + (el.width()/2));

  var helpertext;

  var elType = el.get(0).tagName;
  elType = elType.toLowerCase();
  helpertext = '<' + s[elType];

  var elClass = el.attr("class");

  if(elClass) {
    if(elClass.indexOf("strobe") > -1){
      elClass = elClass.replace("strobe","");
    }
  }

  if(elClass) {
    helpertext = helpertext + ' class="' + s[elClass.trim()] + '"';
  }

  var id = el.attr("id");
  if(id) {
    helpertext = helpertext + ' id="' + s[id.trim()] + '"';
  }

  helpertext = helpertext + '></' + s[elType.trim()] + '>';
  helper.show();
  helper.text(helpertext);

}

//Animate the enter button
function enterHit(){
  $(".enter-button").removeClass("enterhit");
  $(".enter-button").width($(".enter-button").width());
  $(".enter-button").addClass("enterhit");
  var value = $("input").val();
  handleInput(value);
}


//Parses text from the input field
function handleInput(text){

  if(text == ""){
    text = "blammojammo";
  }

  if(parseInt(text,10) > 0 && parseInt(text,10) < levels[language].length+1) {
    currentLevel = parseInt(text,10) - 1;
    loadLevel();
    return;
  }

  if(text == "help") {
    showHelp();
  } else {
    fireRule(text);
  }
}

//Shows help
function showHelp() {

  $("input").val("");
  var helpTitle = level.helpTitle || "";
  var help = level.help || "";
  var examples = level.examples ||[];
  var selector = level.selector || "";
  var syntax = level.syntax || "";
  var syntaxExample = level.syntaxExample || "";
  var selectorName = level.selectorName || "";

  $(".display-help .syntax").html(syntax);
  $(".display-help .syntax-example").html(syntaxExample);
  $(".display-help .selector-name").html(selectorName);
  $(".display-help .title").html(helpTitle);
  $(".display-help .examples").html("");

  for(var i = 0; i < examples.length; i++){
    var example = $("<div class='example'>" + examples[i] + "</div>");
    $(".display-help .examples").append(example);
  }
  $(".display-help .hint").html(help);
  $(".display-help .selector").text(selector);
}

function resetTable(){
  $(".display-help").removeClass("open-help");
  $(".clean,.strobe").removeClass("clean,strobe");
  $(".clean,.strobe").removeClass("clean,strobe");
  $("input").addClass("input-strobe");
  $(".table *").each(function(){
    $(this).width($(this).width());
    $(this).removeAttr("style");
  });
  $(".table-edge").width($(".table").outerWidth());
}

function fireRule(rule) {
  // prevent cheating
  if(rule === ".strobe") {
    rule = null;
  }

  $(".shake").removeClass("shake");

  $(".strobe,.clean,.shake").each(function(){
    $(this).width($(this).width());
    $(this).removeAttr("style");
  });

  var s = strings[language];
  console.log(rule);
  for (var k in s) {
    rule = rule.replace(s[k],k);
  }
  console.log(rule);
  /*
  * Sean Nessworthy <sean@nessworthy.me>
  * On 03/17/14
  *
  * Allow [div][.table] to preceed the answer.
  * Makes sense if div.table is going to be included in the HTML viewer
  * and users want to try and use it in their selectors.
  *
  * However, if it is included as a specific match, filter it out.
  * This resolves the  "Match all the things!" level from beheading the table too.
  * Relatedly, watching that happen made me nearly spill my drink.
  */

  var baseTable = $('.table-wrapper > .table');

  // var ruleSelected = $(".table-wrapper " + rule).not(baseTable);
  // var levelSelected = $(".table-wrapper " + level.selector).not(baseTable);

  var ruleSelected = $(".table-wrapper").find(rule).not(baseTable);
  var levelSelected = $(".table-wrapper").find(level.selector).not(baseTable);


  var win = false;

  //If nothing is selected
  if(ruleSelected.length == 0) {
    $(".editor").addClass("shake");
  }

  if(ruleSelected.length == levelSelected.length && ruleSelected.length > 0){
    win = checkResults(ruleSelected,levelSelected,rule);
  }

  if(win){
    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("clean");
    // $(".result").text("Good job!");
    $("input").val("");
    $(".input-wrapper").css("opacity",.2);
    currentLevel++;
    if(currentLevel >= levels[language].length) {
      winGame();
    } else {
      setTimeout(function(){
        loadLevel();
      },levelTimeout);
    }

  } else {

    continueRule();

    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("shake");

    setTimeout(function(){
      $(".shake").removeClass("shake");
      $(".strobe").removeClass("strobe");
      levelSelected.addClass("strobe");
    },500);

    $(".result").fadeOut();
  }

}

function winGame(){
  $(".table").html('<span class="winner"><strong>You did it!</strong><br>You are a CSS God.</span>');
  resetTable();
}

function checkResults(ruleSelected,levelSelected,rule){
  var ruleTable = $(".table").clone();
  ruleTable.find(".strobe").removeClass("strobe");
  ruleTable.find(rule).addClass("strobe");
  return($(".table").html() == ruleTable.html());
}

var d = 2;
function continueRule() {
  console.log("Fails thus far: " + ++fails)
}


function loadBoard(){

  var boardString = level.board;
  boardMarkup = "";
  var tableMarkup = "";
  var markup = "";
  showHelp();

  var s = strings[language];
  
  for(var i = 0;i < boardString.length;i++){

    var c = boardString.charAt(i);

    if(c == "C") {
      boardMarkup = boardMarkup + '<carrot/>\n'
      markup = markup + "<div>&lt"+s['carrot']+"/&gt</div>";
    }
    if(c == "A") {
      boardMarkup = boardMarkup + '<apple/>\n'
      markup = markup + "<div>&lt"+s['apple']+"/&gt</div>";
    }
    if(c == "O") {
      boardMarkup = boardMarkup + '<orange/>\n'
      markup = markup + "<div>&lt"+s['orange']+"/&gt</div>";
    }
    if(c == "P") {
      boardMarkup = boardMarkup + '<pickle/>\n'
      markup = markup + '<div>&lt'+s['pickle']+'/&gt</div>';
    }
    if(c == "a") {
      boardMarkup = boardMarkup + '<apple class="small"/>\n'
      markup = markup + '<div>&lt'+s['apple']+' class="'+s['small']+'"/&gt</div>';
    }
    if(c == "o") {
      boardMarkup = boardMarkup + '<orange class="small"/>\n'
      markup = markup + '<div>&lt'+s['orange']+' class="'+s['small']+'"/&gt</div>';
    }
    if(c == "p") {
      boardMarkup = boardMarkup + '<pickle class="small"/>\n'
      markup = markup + '<div>&lt'+s['pickle']+' class="'+s['small']+'"/&gt</div>';
    }
    if(c == "{") {
      boardMarkup = boardMarkup + '<plate id="fancy">'
      markup = markup + '<div>&lt'+s['plate']+' id="'+s['fancy']+'"&gt';
    }
    if(c == "(") {
      boardMarkup = boardMarkup + '<plate>'
      markup = markup + '<div>&lt'+s['plate']+'&gt'
    }
    if(c == ")" || c == "}") {
      boardMarkup = boardMarkup + '</plate>\n'
      markup = markup + '&lt/'+s['plate']+'&gt</div>'
    }
    if(c == "[") {
      boardMarkup = boardMarkup + '<bento>'
      markup = markup + '<div>&lt'+s['bento']+'&gt'
    }
    if(c == "]") {
      boardMarkup = boardMarkup + '</bento>\n'
      markup = markup + '&lt/'+s['bento']+'&gt</div>'
    }

  }
  $(".table").html(boardMarkup);
  $(".markup").html('<div>&ltdiv class="'+s['table']+'"&gt' + markup + '&lt/div&gt</div>');
}


//Loads up a level
function loadLevel(){
  level = levels[language][currentLevel];
  var s = strings[language];
  
  // Show the help link only for the first three levels
  if(currentLevel < 3) {
    $(".note-toggle").show();
  } else {
    $(".note-toggle").hide();
  }

  $(".level-menu .current").removeClass("current");
  $(".level-menu div a").eq(currentLevel).addClass("current");

  var percent = (currentLevel+1)/levels[language].length * 100;
  $(".progress").css("width",percent + "%");

  localStorage.setItem("currentLevel",currentLevel);

  loadBoard();
  resetTable();

  
  var header = "Level {0} of {1}";
  if (header in s) header = s[header];
  
  $(".level-header").html( header.format((currentLevel+1), levels[language].length) );
  $(".order").text(level.doThis);
  $("input").val("").focus();


  $(".input-wrapper").css("opacity",1);
  $(".result").text("");

  //Strobe what's supposed to be selected
  $(".table " + level.selector).addClass("strobe");

}

// string format
String.prototype.format = function(){
    var s = this,  
        i = arguments.length;
    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
}
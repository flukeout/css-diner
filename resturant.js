var level;
var currentLevel = parseInt(localStorage.currentLevel) || 0;
var levelTimeout = 1000;

$(document).ready(function(){

  //Handle inputs from the input box on enter
  $("input").on("keypress",function(e){
    e.stopPropagation();
    if(e.keyCode ==  13){
      enterHit();
      return false;
    }
  })

  //Add tooltips
  $(".table").on("mouseover","*",function(e){
    e.stopPropagation();
    el = $(this);

    el.attr("data-hovered",true);

    var tableElements = $(".table *");
    var index = tableElements.index($(this));

    var that = $(this);


    $(".markup > div *").eq(index).addClass("enhance").find("*").addClass("enhance");

    var helper = $(".helper");

    var pos = el.offset();
    helper.css("top",pos.top - 65);
    helper.css("left",pos.left + (el.width()/2));

    var helpertext;

    var elType = el.get(0).tagName;
    elType = elType.toLowerCase();
    helpertext = '<' + elType;

    var elClass = el.attr("class");

    if(elClass) {

      if(elClass.indexOf("strobe") > -1){
        elClass = elClass.replace("strobe","");
      }

    }

    if(elClass) {
      helpertext = helpertext + ' class="' + elClass + '"';
    }

    var id = el.attr("id");
    if(id) {
      helpertext = helpertext + ' id="' + id + '"';
    }

    helpertext = helpertext + '></' + elType + '>';
    helper.show();
    helper.text(helpertext);

  });

  $(".table").on("mouseout","*",function(e){
    $(".enhance").removeClass("enhance");
    $("[data-hovered]").removeAttr("data-hovered");
    $(".helper").hide();
    e.stopPropagation();
  });



  $(".enter-button").on("click",function(){
    enterHit();
  })


  $(".table-wrapper,.table-edge").css("opacity",0);

  window.setTimeout(function(){
    loadLevel();
    $(".table-wrapper,.table-edge").css("opacity",1);
  },50);


});


//Animate the enter button
function enterHit(){
  $(".enter-button").removeClass("enterhit");
  $(".enter-button").width($(".enter-button").width());
  $(".enter-button").addClass("enterhit");

  var value = $("input").val();
  if(value){
    handleInput(value);
  }

}


//Parses text from the input field
function handleInput(text){

  if(parseInt(text) > 0 && parseInt(text) < levels.length+1) {
    currentLevel = parseInt(text) -1;
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
  // $(".display-help").addClass("open-help");
  $("input").val("");
  var helpTitle = level.helpTitle || "";
  var help = level.help || "";
  var selector = level.selector || "";
  $(".display-help .title").html(helpTitle);
  $(".display-help .hint").html(help);
  $(".display-help .selector").text(selector);
}

function resetTable(){
  $(".display-help").removeClass("open-help");
  $(".clean,.strobe").removeClass("clean,strobe");
  $(".table *").each(function(){
    $(this).width($(this).width());
    $(this).removeAttr("style");
  });
  $(".table-edge").width($(".table").outerWidth());
}

function fireRule(rule) {

  $(".shake").removeClass("shake");

  $(".strobe,.clean,.shake").each(function(){
    $(this).width($(this).width());
    $(this).removeAttr("style");
  });

  var ruleSelected = $(".table " + rule);
  var levelSelected = $(".table " + level.selector);

  var win = false;

  //If nothing is selected
  if(ruleSelected.length == 0) {
    $(".input-wrapper").addClass("shake");
  }

  if(ruleSelected.length == levelSelected.length && ruleSelected.length > 0){
    win = checkResults(ruleSelected,levelSelected);
  }

  if(win){
    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("clean");
    // $(".result").text("Good job!");
    $("input").val("");
    $(".input-wrapper").css("opacity",.2);
    currentLevel++;
    if(currentLevel >= levels.length) {
      winGame();
      window.setTimeout(function(){
        currentLevel = 0;
        loadLevel();
      },levelTimeout);
    } else {
      window.setTimeout(function(){
        loadLevel();
      },levelTimeout);
    }

  } else {

    continueRule();

    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("shake");

    window.setTimeout(function(){
      $(".shake").removeClass("shake");
      $(".strobe").removeClass("strobe");
      levelSelected.addClass("strobe");
    },500);

    // $(".result").text("Wrong! Try again :D");
    $(".result").fadeOut();

  }

}

function winGame(){
  $(".table").text("YOU ARE CSS MASTER!")
}

function checkResults(ruleSelected,levelSelected){
  for(var i = 0; i < ruleSelected.length; i++) {
    if(ruleSelected[i] == levelSelected[i]){
    } else {
      return false;
    }
  }
  return true;
}

var d = 2;
function continueRule() {
  console.log(new Array(d++).join(decodeURIComponent('3%3D%3D%3DD ')));
}


function loadBoard(){

  var boardString = level.board;
  boardMarkup = "";
  var tableMarkup = "";
  var markup = "";
  showHelp();

  for(var i = 0;i < boardString.length;i++){

    var c = boardString.charAt(i);

    if(c == "C") {
      boardMarkup = boardMarkup + '<carrot/>\n'
      markup = markup + "<div>&ltcarrot/&gt</div>";
    }
    if(c == "A") {
      boardMarkup = boardMarkup + '<apple/>\n'
      markup = markup + "<div>&ltapple/&gt</div>";
    }
    if(c == "O") {
      boardMarkup = boardMarkup + '<orange/>\n'
      markup = markup + "<div>&ltorange/&gt</div>";
    }
    if(c == "P") {
      boardMarkup = boardMarkup + '<pickle/>\n'
      markup = markup + '<div>&ltpickle/&gt</div>';
    }
    if(c == "a") {
      boardMarkup = boardMarkup + '<apple class="small"/>\n'
      markup = markup + '<div>&ltapple class="small"/&gt</div>';
    }
    if(c == "o") {
      boardMarkup = boardMarkup + '<orange class="small"/>\n'
      markup = markup + '<div>&ltorange class="small"/&gt</div>';
    }
    if(c == "p") {
      boardMarkup = boardMarkup + '<pickle class="small"/>\n'
      markup = markup + '<div>&ltpickle class="small"/&gt</div>';
    }
    if(c == "{") {
      boardMarkup = boardMarkup + '<plate id="fancy">'
      markup = markup + '<div>&ltplate id="fancy"/&gt';
    }
    if(c == "(") {
      boardMarkup = boardMarkup + '<plate>'
      markup = markup + '<div>&ltplate&gt'
    }
    if(c == ")" || c == "}") {
      boardMarkup = boardMarkup + '</plate>\n'
      markup = markup + '&lt/plate&gt</div>'
    }
    if(c == "[") {
      boardMarkup = boardMarkup + '<bento>'
      markup = markup + '<div>&ltbento&gt'
    }
    if(c == "]") {
      boardMarkup = boardMarkup + '</bento>\n'
      markup = markup + '&lt/bento&gt</div>'
    }

  }
  $(".table").html(boardMarkup);
  $(".markup").html('<div>&ltdiv class="table"&gt' + markup + '&lt/div&gt</div>');
}

//Loads up a level
function loadLevel(){
  level = levels[currentLevel];
  localStorage.setItem("currentLevel",currentLevel);

  loadBoard();
  resetTable();

  $(".level-header").text(".Level {" + (currentLevel+1) + "/" + levels.length + "}");
  $(".order").text(level.doThis);
  $("input").val("").focus();

  $(".input-wrapper").css("opacity",1);
  $(".result").text("");

  //Strobe what's supposed to be selected
  $(".table " + level.selector).addClass("strobe");

}

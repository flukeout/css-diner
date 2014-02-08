$(document).ready(function(){
  $("input").focus();

  $("input").on("keypress",function(e){
    if(e.keyCode ==  13){
      var rule = $(this).val();
      $(".enter-button").removeClass("enterhit");
      $(".enter-button").width($(".enter-button").width());
      $(".enter-button").addClass("enterhit");
      if(rule){
       fireRule(rule);
      }
      return false;
    }
  })

  $(".table *").mouseover(function(e){
    $(".hovered").removeClass("hovered");
    e.stopPropagation();
    var helper = $(".helper");
    el = $(this);
    var pos = $(this).offset();
    helper.css("top",pos.top - 65);
    helper.css("left",pos.left + ($(this).width()/2));
    console.log(pos.left,pos.top);
    el.attr("data-hovered",true);
    var helpertext ='class="'+el.attr("class")+'"';

    helper.show();
    helper.html(helpertext);

  });

  $(".table *").mouseout(function(e){
    $("[data-hovered]").removeAttr("data-hovered");
    $(".helper").hide();z
    e.stopPropagation();
  });


  loadLevel();

});

var level;
var currentLevel = 0;
var levelTimeout = 1000;

function resetTable(){
  $(".clean").removeClass("clean");
  $(".strobe").removeClass("strobe");
  $(".table *").each(function(){
    $(this).width($(this).width());
  });
}

function fireRule(rule) {

  console.log("fire " + rule);
  $("*").removeClass("shake").removeClass("strobe");

  $("*").each(function(){
    $(this).width($(this).width());
  })

  var ruleSelected = $(".table " + rule);
  var levelSelected = $(".table " + level.selector);

  var win = false;

  if(ruleSelected.length == levelSelected.length && ruleSelected.length > 0){
    win = checkResults(ruleSelected,levelSelected);
  }

  $(".result").show();

  if(win){
    ruleSelected.addClass("clean");
    $(".result").text("Good job!");
    $("input").val("");
    $(".input-wrapper").css("opacity",.2);
    window.setTimeout(function(){
      currentLevel++;
      loadLevel();
    },levelTimeout);
  } else {
    continueRule();
    ruleSelected.addClass("shake");
    $(".result").text("Wrong! Try again :D");
    $(".result").fadeOut();
  }

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

function loadLevel(){

  resetTable();

  $(".input-wrapper").css("opacity",1);
  $(".result").text("");

  level = levels[currentLevel];
  $(".table " + level.selector).addClass("strobe");

  window.setTimeout(function(){
    $(".strobe").removeClass("strobe");
  },1000);

  $(".level-header").text("Level " + (currentLevel+1) + "/" + levels.length);
  $(".order").text(level.doThis);
  $("input").val("").focus();
}

// Hash the array and compare the arrays!

var levels = [
  {
    doThis : "Eat the pickles!",
    selector : ".pickle",
  },
  {
    doThis : "Eat the apple on the plate!",
    selector : ".plate .apple",
  },

  {
    doThis : "Clean all the apples and pickles!",
    selector : ".apple,.pickle",
  },

  {
    doThis : "Every bento that has a plate on the left!",
    selector : ".plate~.bento",
  },
  {
    doThis : "Clean all the plates!",
    selector : ".plate",
  },
  {
    doThis : "Clean each plate that has a bento on the left",
    selector : ".bento + .plate",
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


    /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function filterImages(){
  //the "this" variable contains the button you just clicked on
  $(this).toggleClass('colour');

  //hide all images before we selectively show them
  $('.tagImages').removeClass('show');

  //the each function checks every item with a specified class, in our case the eras filters.
  //the code below runs once for each of the .eras
  $('.eras, .brands').each(function(){
    //in this context, the "this" variable contains whatever era filter the code is checking currently
    //if the era button is currently active (has the class color), then show images under that era
    if ($(this).hasClass('colour')){
      $('.images' + $(this).text()).addClass('show');
    }
  });
}





// function show1990sImages(){
//   $(".images1990s").toggleClass("show");
//   $(".text1990s").toggleClass("colour");
//   $(".redirect").toggleClass("pointerEvents");

//   //filter through each of the tag images
//   $('.tagImages').each(function(){
//     $(this).removeClass('show');

//   })
// }

$(".text1990s").click(filterImages);

// function show2000sImages(){
//   $(".images2000s").toggleClass("show");
//   $(".text2000s").toggleClass("colour");
//   $(".redirect").toggleClass("pointerEvents");
// }
$(".text2000s").click(filterImages);

// function show2010sImages(){
//   $(".images2010s").toggleClass("show");
//   $(".text2010s").toggleClass("colour");
//   $(".redirect").toggleClass("pointerEvents");
// }
$(".text2010s").click(filterImages);

// function show2020sImages(){
//   $(".images2020s").toggleClass("show");
//   $(".text2020s").toggleClass("colour");
//   $(".redirect").toggleClass("pointerEvents");
// }
$(".text2020s").click(filterImages);

// function showNikeImages(){
//   $(".nike").toggleClass("show");
//   $(".textnike").toggleClass("colour");
//   $(".redirect").toggleClass("pointerEvents");
// }
$(".textnike").click(filterImages);

// function showcarharttImages(){
//   $(".carhartt").toggleClass("show");
//   $(".textcarhartt").toggleClass("colour");
//   $(".redirect").toggleClass("pointerEvents");
// }
$(".textcarhartt").click(filterImages);

// function showrussellImages(){
//   $(".russell").toggleClass("show");
//   $(".textrussell").toggleClass("colour");
//   $(".redirect").toggleClass("pointerEvents");
// }
$(".textrussell").click(filterImages);

$(".textadidas").click(filterImages);















function nikeEnter1(){
  $(".tagName").text("Nike Team Tag")
}
function nikeExit1(){
  $(".tagName").text("...")
}
$(".nikeTeamCut").hover(nikeEnter1, nikeExit1)

function nikeEnter2(){
  $(".tagName").text("White Nike 90s Tag")
}
function nikeExit2(){
  $(".tagName").text("...")
}
$(".nikeNineties").hover(nikeEnter2, nikeExit2)

function nikeEnter3(){
  $(".tagName").text("Y2K Silver Nike Tag")
}
function nikeExit3(){
  $(".tagName").text("...")
}
$(".nikeTwoThousands").hover(nikeEnter3, nikeExit3)

function nikeEnter4(){
  $(".tagName").text("Nike Fit Dry Tag")
}
function nikeExit4(){
  $(".tagName").text("...")
}
$(".nikeFitDry").hover(nikeEnter4, nikeExit4)

function nikeEnter5(){
  $(".tagName").text("Navy Blue Nike Tag")
}
function nikeExit5(){
  $(".tagName").text("...")
}
$(".nikeNavyBlue").hover(nikeEnter5, nikeExit5)

function nikeEnter6(){
  $(".tagName").text("Nike Printed Label")
}
function nikeExit6(){
  $(".tagName").text("...")
}
$(".nikePrinted").hover(nikeEnter6, nikeExit6)

function nikeEnter7(){
  $(".tagName").text("Nike Red Swoosh Tag")
}
function nikeExit7(){
  $(".tagName").text("...")
}
$(".nikeRedSwoosh").hover(nikeEnter7, nikeExit7)

function nikeEnter8(){
  $(".tagName").text("Nike Modern Tag")
}
function nikeExit8(){
  $(".tagName").text("...")
}
$(".nikeModern").hover(nikeEnter8, nikeExit8)

function nikeEnter9(){
  $(".tagName").text("Nike Black Tag")
}
function nikeExit9(){
  $(".tagName").text("...")
}
$(".nikeBlackTag").hover(nikeEnter9, nikeExit9)

function carharttEnter1(){
  $(".tagName").text("Carhartt Tag Now")
}
function carharttExit1(){
  $(".tagName").text("...")
}
$(".carharttNow").hover(carharttEnter1, carharttExit1)




function russellEnter1(){
  $(".tagName").text("Russell Europe Tag")
}
function russellExit1(){
  $(".tagName").text("...")
}
$(".russellEurope").hover(russellEnter1, russellExit1)

function russellEnter2(){
  $(".tagName").text("Y2K Russell Gold Tag")
}
function russellExit2(){
  $(".tagName").text("...")
}
$(".russellGold").hover(russellEnter2, russellExit2)

function russellEnter3(){
  $(".tagName").text("Modern Russell Tag")
}
function russellExit3(){
  $(".tagName").text("...")
}
$(".russellModern").hover(russellEnter3, russellExit3)

function russellEnter4(){
  $(".tagName").text("90s Thick Russell Tag")
}
function russellExit4(){
  $(".tagName").text("...")
}
$(".russellThick").hover(russellEnter4, russellExit4)

function russellEnter5(){
  $(".tagName").text("80s Thin Russell Tag")
}
function russellExit5(){
  $(".tagName").text("...")
}
$(".russellThin").hover(russellEnter5, russellExit5)



function adidasEnter1(){
  $(".tagName").text(" No Adidas Logo White Tag")
}
function adidasExit1(){
  $(".tagName").text("...")
}
$(".adidasNoLogo").hover(adidasEnter1, adidasExit1)

function adidasEnter2(){
  $(".tagName").text(" Blue Adidas Logo, White Tag")
}
function adidasExit2(){
  $(".tagName").text("...")
}
$(".adidasBlueLogo").hover(adidasEnter2, adidasExit2)

function adidasEnter3(){
  $(".tagName").text(" Silver Adidas Tag")
}
function adidasExit3(){
  $(".tagName").text("...")
}
$(".adidasSilver").hover(adidasEnter3, adidasExit3)

function adidasEnter4(){
  $(".tagName").text(" 2010s Adidas Black Tag")
}
function adidasExit4(){
  $(".tagName").text("...")
}
$(".adidasBlack").hover(adidasEnter4, adidasExit4)

function adidasEnter5(){
  $(".tagName").text(" Adidas Printed Label")
}
function adidasExit5(){
  $(".tagName").text("...")
}
$(".adidasPrinted").hover(adidasEnter5, adidasExit5)

function adidasEnter6(){
  $(".tagName").text(" Adidas x Pharell Williams Tag")
}
function adidasExit6(){
  $(".tagName").text("...")
}
$(".adidasPharell").hover(adidasEnter6, adidasExit6)

function adidasEnter7(){
  $(".tagName").text(" Adidas Modern Tag")
}
function adidasExit7(){
  $(".tagName").text("...")
}
$(".adidasModern").hover(adidasEnter7, adidasExit7)



function Enter1(){
  $(".tagName").text(" Tag")
}
function Exit1(){
  $(".tagName").text("...")
}
$(".").hover(Enter1, Exit1)













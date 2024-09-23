
    /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  
function show1990sImages(){
  $(".images1990s").toggleClass("show");
  $(".text1990s").toggleClass("colour");
  $(".redirect").toggleClass("pointerEvents");
}
$(".text1990s").click(show1990sImages);

function show2000sImages(){
  $(".images2000s").toggleClass("show");
  $(".text2000s").toggleClass("colour");
  $(".redirect").toggleClass("pointerEvents");
}
$(".text2000s").click(show2000sImages);

function show2010sImages(){
  $(".images2010s").toggleClass("show");
  $(".text2010s").toggleClass("colour");
  $(".redirect").toggleClass("pointerEvents");
}
$(".text2010s").click(show2010sImages);

function show2020sImages(){
  $(".images2020s").toggleClass("show");
  $(".text2020s").toggleClass("colour");
  $(".redirect").toggleClass("pointerEvents");
}
$(".text2020s").click(show2020sImages);

function showNikeImages(){
  $(".nike").toggleClass("show");
  $(".textnike").toggleClass("colour");
  $(".redirect").toggleClass("pointerEvents");
}
$(".textnike").click(showNikeImages);

function showcarharttImages(){
  $(".carhartt").toggleClass("show");
  $(".textcarhartt").toggleClass("colour");
  $(".redirect").toggleClass("pointerEvents");
}
$(".textcarhartt").click(showcarharttImages);

function showrussellImages(){
  $(".russell").toggleClass("show");
  $(".textrussell").toggleClass("colour");
  $(".redirect").toggleClass("pointerEvents");
}
$(".textrussell").click(showrussellImages);

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
  $(".tagName").text("Carhartt Present Tag")
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



function Enter1(){
  $(".tagName").text(" Tag")
}
function Exit1(){
  $(".tagName").text("...")
}
$(".").hover(Enter1, Exit1)











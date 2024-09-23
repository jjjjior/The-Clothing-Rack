function moveTag(){
    //get the total amount we can scroll on the page
    var totalScroll = $(document).height() - $(window).height();
    // get how far we've scrolled thus far
    var scrollValue = $(window).scrollTop();
    // calculate how far the tag is allowed to go on the page based on its widths
    var tagWidthPercent = 100 - ($(".hangingTag").width() / $('body').width() * 100);
    // use the ratio calculation to determine current scroll as a left percentage for the tag
    var leftPos = scrollValue * (tagWidthPercent/totalScroll);
    // apply the left pecentage to the tag element
    $(".hangingTag").css("left", leftPos + '%');
}
$(window).scroll(moveTag);



function mouseEnterLeft(){
    $(".leftClothingRack").attr("src", "images/clothingRackImages/leftClothingRackBitmap2.png");
    $(".leftClothingRackDiv").css("top", "-62px")
    $(".prev").css("opacity", "100");
}
function mouseExitLeft(){
    $(".leftClothingRack").attr("src", "images/clothingRackImages/leftClothingRackBitmapCut.png");
    $(".leftClothingRackDiv").css("top", "-69px");
    $(".prev").css("opacity", "0");
}
$(".leftClothingRack").hover(mouseEnterLeft, mouseExitLeft);
$(".prev").hover(mouseEnterLeft, mouseExitLeft);



function mouseEnterRight(){
    $(".rightClothingRack").attr("src", "images/clothingRackImages/rightClothingRackBitmap2.png");
    $(".rightClothingRackDiv").css("top", "-62px")
    $(".next").css("opacity", "100");
}
function mouseExitRight(){
    $(".rightClothingRack").attr("src", "images/clothingRackImages/rightClothingRackBitmapCut.png");
    $(".rightClothingRackDiv").css("top", "-69px");
    $(".next").css("opacity", "0");
}
$(".rightClothingRack").hover(mouseEnterRight, mouseExitRight);
$(".next").hover(mouseEnterRight, mouseExitRight);



function mouseEnter(){
    $(".tag1-green").attr("src", "images/tagImages/tag1-real.png");
}
function mouseExit(){
    $(".tag1-green").attr("src", "images/tagImages/tag1-green.png");
}
$(".tag1-green").hover(mouseEnter, mouseExit);



function mouseEnter2(){
    $(".tag2-green").attr("src", "images/tagImages/tag2-real.png");
}
function mouseExit2(){
    $(".tag2-green").attr("src", "images/tagImages/tag2-green.png");
}
$(".tag2-green").hover(mouseEnter2, mouseExit2);



function mouseEnter3(){
    $(".tag3-green").attr("src", "images/tagImages/tag3-real.png");
}
function mouseExit3(){
    $(".tag3-green").attr("src", "images/tagImages/tag3-green.png");
}
$(".tag3-green").hover(mouseEnter3, mouseExit3);



function mouseEnter4(){
    $(".tag4-green").attr("src", "images/tagImages/tag4-real.png");
}
function mouseExit4(){
    $(".tag4-green").attr("src", "images/tagImages/tag4-green.png");
}
$(".tag4-green").hover(mouseEnter4, mouseExit4);



function mouseEnter5(){
    $(".clothing1-item").attr("src", "images/clothingImages/clothing1-tag.png");
    $(".clothing1-item").css("filter", "brightness(50%)");
    $(".clothing1-text").css("opacity", 100 )
}
function mouseExit5(){
    $(".clothing1-item").attr("src", "images/clothingImages/clothing1-item.png");
    $(".clothing1-item").css("filter", "brightness(100%)");
    $(".clothing1-text").css("opacity", 0 )
}
$(".clothing1-item").hover(mouseEnter5, mouseExit5);

function mouseEnter6(){
    $(".clothing2-item").attr("src", "images/clothingImages/clothing2-tag.png");
    $(".clothing2-item").css("filter", "brightness(50%)");
    $(".clothing2-text").css("opacity", 100 )
}
function mouseExit6(){
    $(".clothing2-item").attr("src", "images/clothingImages/clothing2-item.png");
    $(".clothing2-item").css("filter", "brightness(100%)");
    $(".clothing2-text").css("opacity", 0 )
}
$(".clothing2-item").hover(mouseEnter6, mouseExit6);

function mouseEnter7(){
    $(".clothing3-item").attr("src", "images/clothingImages/clothing3-tag.png");
    $(".clothing3-item").css("filter", "brightness(50%)");
    $(".clothing3-text").css("opacity", 100 )
}
function mouseExit7(){
    $(".clothing3-item").attr("src", "images/clothingImages/clothing3-item.png");
    $(".clothing3-item").css("filter", "brightness(100%)");
    $(".clothing3-text").css("opacity", 0 )
}
$(".clothing3-item").hover(mouseEnter7, mouseExit7);

function mouseEnter8(){
    $(".clothing4-item").attr("src", "images/clothingImages/clothing4-tag.png");
    $(".clothing4-item").css("filter", "brightness(50%)");
    $(".clothing4-text").css("opacity", 100 )
}
function mouseExit8(){
    $(".clothing4-item").attr("src", "images/clothingImages/clothing4-item.png");
    $(".clothing4-item").css("filter", "brightness(100%)");
    $(".clothing4-text").css("opacity", 0 )
}
$(".clothing4-item").hover(mouseEnter8, mouseExit8);

function mouseEnter9(){
    $(".clothing5-item").attr("src", "images/clothingImages/clothing5-tag.png");
    $(".clothing5-item").css("filter", "brightness(50%)");
    $(".clothing5-text").css("opacity", 100 )
}
function mouseExit9(){
    $(".clothing5-item").attr("src", "images/clothingImages/clothing5-item.png");
    $(".clothing5-item").css("filter", "brightness(100%)");
    $(".clothing5-text").css("opacity", 0 )
}
$(".clothing5-item").hover(mouseEnter9, mouseExit9);


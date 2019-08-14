/* When we click on the black button, it changes the background color of the entire page to black and then similar for blanched almone*/

/*
1. Figure out what tags/elements need to be selected
2. Events that need to happen
3. What should happen when that event happens

*/


// document.getElementById('color-black').onclick = onBlackButtonClick
// document.getElementById('color-blanched-almond').onclick = onBlanchedAlmondButtonClick

// $("#slide-paragraph").hide();


// function onBlackButtonClick() {
//     if (document.body.style.backgroundColor === "blanchedalmond") {
//         document.body.style.backgroundColor = "green";
//     } else { 
//     document.body.style.backgroundColor = "black";
//     }
//     $("#slide-paragraph").slideToggle();    
// }    


// function onBlanchedAlmondButtonClick() {
//     document.body.style.backgroundColor="blanchedalmond";
// }

$("#readless").hide();
$("#para1").hide();
$("#readmore").click(readmore);
$("#readless").click(readless);
document.getElementById('readmore').onclick = readmore
document.getElementById('readless').onclick = readless

function readmore() {
    $("#para1").slideDown();
    $("#readless").show();
    $("#readmore").hide();
}
function readless() {
    $("#para1").slideUp();
    $("#readless").hide();
    $("#readmore").show();
} 

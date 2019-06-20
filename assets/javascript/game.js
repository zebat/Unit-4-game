$(document).ready(function (){

var random_results;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    
    $(".crystals").empty();

    var images = [
        'assets/css/images/crys1.jpg', 'assets/css/images/crys2.jpg','assets/css/images/crys3.jpg','assets/css/images/crys4.jpg'];

    random_results = Math.floor(Math.random() * 100) + 19 ;

    $("#result").html ("Random Number: " + random_results);
    
    for(var i = 0; i < 4; i++){
    
        var random = Math.floor(Math.random() * 11) +1;
    
        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random" : random
    
        });
        crystal.css({
            "background-image" : "url('" + images[i] + "')",
            "background-size" : "cover"
        });
    
        $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score : " + previous);
}


resetAndStart();

// Event Delegation
$(document).on("click", ".crystal", function (){

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score : " + previous);

    console.log(previous);

    if (previous > random_results) {

        lost++;

        $("#lost").html("You Lost : " + lost);

        previous = 0;

        resetAndStart();

    } else if (previous === random_results){
        win++;
        
        $("#win").html("You Win : " + win);
        
        previous = 0;

        resetAndStart();
    }
});
})


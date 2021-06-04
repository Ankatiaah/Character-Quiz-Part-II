$(".wO").click(function() {
    $("img").hide();
    $(".wood").show();
});

$(".W").click(function() {
    $("img").hide();
    $(".water").show();
});

$(".F").click(function() {
    $("img").hide();
    $(".fire").show();
});

$(".M").click(function() {
    $("img").hide();
    $(".metal").show();
});



$(".actions").mouseenter(function() {
    $("img").hide();
    $(".default").show();
});

$(".element-button").click(function(){
    let elementInput = $(".elements").val();
    console.log(elementInput);
    if (elementInput === "Wood" || elementInput === "Water"){
        $(".element-message").text("Black Tortoise");
    }else if (elementInput === "Metal" || elementInput === "Fire"){
        $(".element-message").text("White Tiger");
    }else if (elementInput === "Wood and Fire"){
        $(".element-message").text("Azure Dragon and Vermillion Bird");
    }else{
        $(".element-message").text("Wrong! This is not one of the elements");
    }
});

$(".age-button").click(function(){
    let ageInput = $(".age").val();
    console.log(ageInput);
    if (ageInput <100){
        $(".age-message").text("Black Tortoise");
        }else if (ageInput >10,000){
            $(".age-message").text("White Tiger");
        }else if (ageInput >10,000,000){
            $(".age-message").text("Vermillion Bird");
        }else if (ageInput >10,000,000,000){
            $(".age-message").text("Azure Dragon");
        }else{
            $(".age-message").text("Woah! That number is too big!");
        }
});











// function hide(){
//     var pTag = document.getElementById("hello");
//     pTag.style.display = 'none';
// }
// function show(){
//     var pTag = document.getElementById("hello");
//     pTag.style.display = 'block';
// }


// window.onload = function(){
//     var btn = document.getElementById("click")
//     btn.addEventListener("click", function(){
//         hide();
//     })

//     var showbtn = document.getElementById("show")
//     showbtn.addEventListener("click", () => {
//         show();
//     })
// }

$(document).ready(function(){
    // alert("Document is ready!")
    $("#click").click(function(){
        $("#hello").hide()
    })
    $("#show").click(function(){
        $("p#hello").show()
    })
    $("#addGrape").click(function(){
        $("#grape").append("<h4>🍇</h4>")
    })
    $("#changeText").click(function(){
        $("#hello").text("Goodbye World")
        alert("Are you sure? Jenelle say's this is kinda grim!")
    })
    $('img').click(function(){
        var temp = $(this).attr("data-alt-src");
        $(this).attr("data-alt-src", $(this).attr("src"));
        $(this).attr("src", temp);
    })

    $('.notFirst p').click(function(){
        $(this).hide()
    })


})
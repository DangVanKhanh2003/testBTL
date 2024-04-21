$(document).ready(function() {
    //
    //---header---
    //

    // change background and color header when scroll
    $(window).on('scroll', function() {
        var position = $(window).scrollTop();
        //if position of web == 0 
        if (position == 0) {
            $("#header").css({
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0)",
            });
        } else // if position != 0
        {
            $("#header").css({
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 1)",
            });
        }
    });

    // change hover menu
    $("#header").mouseenter(function(){
        $(this).css({
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 1)",
        })
    })
    $("#header").mouseleave(function(){
        $(this).css({
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0)",
        })
    })

    //
    //--content---
    //

    // zoom in zoom out img home
    $(".home").mouseleave(function() {
        $(".home img").css({
            transform: "scale(1)",
            transition: "transform 4s ease"
        });
        console.log("davaoanh")
    });
    $(".home").mouseenter (function() {
        $(".home img").css({
            transform: "scale(1.2)",
            transition: "transform 4s ease"
        });
        console.log("davaoanh2")

    });


    // slider img 

//--- still bug ---
    $(".home img").hide();
    $("#img_home1").show();
    $("#markImgHome1").css({backgroundColor: "rgba(80, 76, 76, 0.7)"});

    var count = 1;
    function slideImg() {
        var width = $(window).width();
        $("#img_home" + count).animate({left: -width},1300,function(){
            $(this).hide();
            console.log("inHide");
        }).animate({left: "0px"}, 0);
        if(count == 3)
        {
            count = 1;

        }
        else{
            count = count + 1;
        }
        $("#img_home" + count).animate({left: width},0,function(){
            $(this).show();
            console.log("inShow");

        }).animate({left: "0px"},1300);
        $(".markImgHome div").css({backgroundColor: "rgba(231, 226, 226, 0.5)"});
        $("#markImgHome" + count).css({backgroundColor: "rgba(80, 76, 76, 0.7)"});
    }
    var intervalId = setInterval(slideImg, 6500);

    $(".markImgHome div").click(function(){
        $(".markImgHome div").css({backgroundColor: "rgba(231, 226, 226, 0.5)"});
        $(this).css({backgroundColor: "rgba(80, 76, 76, 0.7)"});
        count = parseInt($(this).attr("id")[11]);
        $(".home img").hide();
        $("#img_home" + count).show();
        clearInterval(intervalId);
        intervalId = setInterval(slideImg, 6500);
    })
//--- still bug ---

 
    
    // responsive home div
    var height = $("#img_home1").height();
    $('.home').css('height', height + 'px');
    // Apply height to the container
    $('.home').css('height', height + 'px');
    $(window).on('resize', function() {
        var width = $(window).width();
        var height = $("#img_home1").height();
        // Apply height to the container
        $('.home').css('height', height + 'px');
    });
});

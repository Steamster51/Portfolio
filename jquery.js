$(document).ready(function(){

    $(".openmail").hide();
    $(".emailclose").mouseenter(function(){
        $(".emailclose").hide();
        $(".openmail").show();
    });

    $(".openmail").mouseleave(function(){
        $(".emailclose").show();
        $(".openmail").hide();
    });

    $(".contactlabel").hide();
    //$(".contactlabel").slideUp(700, function(){ $(this).show();});
    $(".contactlabel").show(800);
    $("#fnamefield").hide();
    $("#lnamefield").hide();
    $("#emailfield").hide();
    $("#msgfield").hide();
    $(".btn-primary").hide();
    $(".emailclose").hide();
    $(".fa-linkedin").hide();
    $("#fnamefield").slideDown(700);
    $("#lnamefield").slideDown(700);
    $("#emailfield").slideDown(700);
    $("#msgfield").slideDown(700);
    $(".btn-primary").slideDown(700);
    $(".emailclose").slideDown(700);
    $(".fa-linkedin").slideDown(700);
    
    //$(".contactbtn").click(function(){
    //   $("#fnamefield").slideDown("slow");
    //    $(".openmail").slideUp(1000);
    //});

    //$(".navbar-toggle").click(function(){
    //    $(".logo").hide();
    //});
})
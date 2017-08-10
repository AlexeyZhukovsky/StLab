(function(){
    var imageLoader = new ImageLoader();
    var emulRequest = new EmulRequest();
    
    $("#filePhoto").on("change", function(){imageLoader.handleImage(event)});
    $("#closeBtn").on("click", emulRequest.popUpHide);
    $(".regForm__regBtn").on("click", function(){emulRequest.emulStart("1")});

})();






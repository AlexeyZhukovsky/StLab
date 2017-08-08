var imageLoader = document.getElementById('filePhoto');
    imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        
        $('.regForm__uploader img').attr('src',event.target.result);
    }
    var r = reader.readAsDataURL(e.target.files[0]);
}

function emul(request){
    console.log("loading...");
    if ( !$("#login").val()){
        return alert("заполните поле login")
    }
    else if ( !$("#password").val){
        return alert("заполните поле password")
    }
    let promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if (request == "1"){
                resolve();
            } 
            else{
                reject();
            }
        }, 2000);
    });

    promise.then(fullfilled =>PopUpShow(),reject => console.log("ne ok"))
}

$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup").show();
}
function PopUpHide(){
    $("#popup").hide();
}








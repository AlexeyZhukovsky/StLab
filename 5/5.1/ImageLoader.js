var ImageLoader = function(){
    var that = this;

    that.handleImage = function(e){
        var reader = new FileReader();
        reader.onload = function (event){
            $('.regForm__uploader img').attr('src',event.target.result);
        }

        var r = reader.readAsDataURL(e.target.files[0]);
    }
};
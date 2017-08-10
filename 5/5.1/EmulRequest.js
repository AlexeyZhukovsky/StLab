var EmulRequest = function(){
    var that = this;

    var emul = function(request){
        console.log("loading...");
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

        promise.then(fullfilled =>popUpShow(),reject => console.log("ne ok"))
    };

    var isValid = function(){
        if ( !$("#login").val()){
            alert("заполните поле login")
            return false;
        }
        else if ( !$("#password").val()){
            alert("заполните поле password")
            return false;
        }
        return true;
    }

    that.emulStart = function(req){
        if (isValid()){
           return emul(req);
        }  
    };

    var popUpShow = function(){
        $("#popup").show();
    };
    that.popUpHide = function(){
        $("#popup").hide();
    };
};

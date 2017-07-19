var NewDate = function (date, regx) {
    var self = this;

        this.date = date;
        this.regx = regx;
        this.convert = function () {
            debugger;
            var output = self.date.match(self.regx);
            var a = output.pop()
            output[output.length-1] += a;
            var b = output.join("-")
            console.log(b)
        };

        var bf = function () {

        };

        self.f = function () {

        };

        return {
            bf: bf
        };
    }
    var date = new NewDate("31022013",/\d{2}/g);
    var convert = date.convert;
    convert();
    //date.convert();
    sdfasdf
    SVGAnimatedTransformListsdf
    a
    sdfasdfas
    f
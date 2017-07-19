

var NewDate = {};
    

        // this.date = date;
        // this.regx = regx;
        // this.convert = function () {
        //     debugger;
        //     var output = self.date.match(self.regx);
        //     var a = output.pop()
        //     output[output.length-1] += a;
        //     var b = output.join("-")
        //     console.log(b)

        
    // function someFunc(){
    
    // alert(strok);
    // }
    var month=
    [
        'January',
        'February',		
        'March',		
        'April',		 
        'May',
        'June',		
        'July',	
        'August',	
        'September',		
        'October',		
        'November',		
        'December'
    ]
      

        NewDate.parse = function() {
            var str = document.getElementById("unformatDate").value;
            // var self = this;
            // self.str = strok;
            var regPattern = /\d{2}/g;
            var dateArray = str.match(regPattern);
            
            var formatType = document.getElementById("formatType").value;
            if (formatType ==  1 || formatType ==  2) 
                {
                    var yearPart = dateArray.pop();
                    dateArray[2] += yearPart;
                }
            else if (formatType == 3 || formatType ==  4)
                {
                    var yearPart = dateArray[1];
                    dateArray.splice(1,1);
                    dateArray[0] += yearPart;
                };

            var formatMonth = document.getElementById("formatMonth").value; 
            // if  (formatMonth == 1)
            //     {
            //         var formatResult = dateArray.join("-");
            //     }  
            if (formatMonth == 2)
                {
                    if (formatType == 1)
                        {
                            dateArray[0] = month[dateArray[0]-1];
                        }
                    else if (formatType == 2)
                        {
                            dateArray[1] = month[dateArray[1]-1];
                        }
                    else if (formatType == 3)
                        {
                            dateArray[1] = month[dateArray[2]-1];
                        }
                    else if (formatType == 4)
                        {
                            dateArray[2] = month[dateArray[2]-1];
                        }              
                    
                    var formatResult = dateArray;
                }; 

            var formatResult = dateArray.join("-");
            console.log(formatResult);
            console.log(formatType);
        };

         document.getElementById("btn").onclick = NewDate.parse;
        
        

    //     var bf = function () {

    //     };

    //     self.f = function () {

    //     };

    //     return {
    //         bf: bf
    //     };
    // }
    // var date = new NewDate("31022013",/\d{2}/g);
    // var convert = date.convert;
    // convert();
    // //date.convert();
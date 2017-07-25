(function(){

    var dtf = new DTF();

    var clickHendler = function(){
      var inputDate = document.getElementById('unformatDate').value;
      var inputFormat = document.getElementById('inputFormat').value;
      var outputFormat = document.getElementById('outputFormat').value;
      var fromNow = document.getElementById('fromNow');
      var monthToName = document.getElementById('monthToName').checked;
      var ticks = document.getElementById('ticks').checked;
      
      var date;

      if (ticks){
        date = dtf.at(inputDate, monthToName).format(outputFormat);
      }
      else{
        date = dtf.parse(inputDate, inputFormat, monthToName).format(outputFormat);
      }

      console.log(date.date);
      console.log("fromNow" + " " + date.fromNow());
    }

    document.getElementById("btn").onclick = clickHendler;

})();

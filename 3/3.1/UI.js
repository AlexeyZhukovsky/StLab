(function(){

    var click = function(){
      var inputDate = document.getElementById('unformatDate').value;
      var inputFormat = document.getElementById('inputFormat').value;
      var outputFormat = document.getElementById('outputFormat').value;
      var monthToName = document.getElementById('monthToName');
      var dtf = new DTF();
      var date = dtf.parse(inputDate, inputFormat, monthToName);
      console.log(date.date);
      console.log(date.format(outputFormat).date);
    }

    document.getElementById("btn").onclick = click;

})();

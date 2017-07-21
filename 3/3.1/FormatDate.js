var DTF = function() {
  var self = this;

  const DAY_POSITION = 0;
  const MONTH_POSITION = 2;
  const YEAR_POSITION = 4;

  const DAY_LENGTH = 2;
  const MONTH_LENGTH = 2;
  const YEAR_LENGTH = 4;

  const SPLITTER = ' '
  const DAY = 'D'
  const MONTH = 'M'
  const YEAR = 'Y'

  const MONTH_NAMES = 
  {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'Decenber'
};

  var Date = function(date, monthToName) {
    var that = this;
    that.year = '';
    that.month = '';
    that.day = '';
    that.date = date;
    that.yearPosition = 4;
    that.monthPosition = 2;
    that.dayPosition = 0;
    that.splitter = ' ';
    that.monthToName = monthToName;

    that.format = function (format = '') {
      if (that.date != '' && format != ''){
        that.getSplitter(format);
        that.getPositions(format);
        that.buildDate(false);
      }
      return that;
    }

    that.getSplitter = function(format) {
      that.splitter = format.match(/\W/) || SPLITTER
      return that;
    }

    that.getPositions = function(format) {
      format = format.replace(/\W/g, "")
      that.dayPosition = format.indexOf(DAY);
      that.monthPosition = format.indexOf(MONTH);
      that.yearPosition = format.indexOf(YEAR);
      return that;
    }

    that.splitDate = function(date) {
      that.day = date.substring(that.dayPosition, that.dayPosition + DAY_LENGTH);
      that.month = date.substring(that.monthPosition, that.monthPosition + MONTH_LENGTH);
      that.year = date.substring(that.yearPosition, that.yearPosition + YEAR_LENGTH);
      return that;
    }

    that.buildDate = function() {
      month = monthToName ? MONTH_NAMES[that.month] : that.month
      if (that.yearPosition != 0) {
        if (that.monthPosition != 0) {
          that.date = that.day + that.splitter + month + that.splitter + that.year;
        }
        else {
          that.date = month + that.splitter + that.day + that.splitter + that.year;
        }
      }
      else {
        if (that.monthPosition != YEAR_POSITION) {
          that.date = that.year + that.splitter + that.day + that.splitter + month;
        }
        else {
          that.date = that.year + that.splitter + month + that.splitter + that.day;
        }
      }
      return that;
    }
  }

  self.parse = function(date, format = '', monthToName) {
    _date = new Date(date, monthToName);
    if (_date.date && format == '') {
      _date.splitDate(date);
      _date.buildDate();
    }
    else if (date && format != '') {
      _date.getSplitter(format);
      _date.getPositions(format);
      _date.splitDate(date);
      _date.buildDate();
    }
    return _date;
  }
}

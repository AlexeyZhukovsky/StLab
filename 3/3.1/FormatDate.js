var DTF = function() {
  var self = this;

  const DAY_POSITION = 0;
  const MONTH_POSITION = 2;
  const YEAR_POSITION = 4;

  const DAY_LENGTH = 2;
  const MONTH_LENGTH = 2;
  const YEAR_LENGTH = 4;

  const SPLITTER = ' ';
  const DAY = 'D';
  const MONTH = 'M';
  const YEAR = 'Y';

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
    '12': 'December'
  };

  const TIMESTAMP_YEAR = 1970;
  const TIMESTAMP_MONTH = 1;
  const TIMESTAMP_DAY = 1;
  const TIMESTAMP_LENGTH = 13;

  const SECONDS_IN_MINUTE = 60;
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;
  const MONTHES_IN_YEAR = 12;
  const DAYS_IN_4_YEARS = 365 * 4 + 1;

  const DAYS = [
                  [   0,  31,  59,  90, 120, 151, 181, 212, 243, 273, 304, 334],
                  [ 365, 396, 424, 455, 485, 516, 546, 577, 608, 638, 669, 699],
                  [ 730, 761, 790, 821, 851, 882, 912, 943, 974,1004,1035,1065],
                  [1096,1127,1155,1186,1216,1247,1277,1308,1339,1369,1400,1430]
               ];

  function DateConverter (date, monthToName) {
    var that = this;
    that.year = '';
    that.month = '';
    that.day = '';
    that.date = date;
    that.yearPosition = YEAR_POSITION;
    that.monthPosition = MONTH_POSITION;
    that.dayPosition = DAY_POSITION;
    that.splitter = SPLITTER;
    that.monthToName = monthToName;

    that.format = function (format = '') {
      if (that.date != '' && format != '') {
        that.getSplitter(format);
        that.getPositions(format);
        that.buildDate();
      }
      return that;
    };

    that.getSplitter = function(format) {
      that.splitter = format.match(/\W/) || SPLITTER
      return that;
    };

    that.getPositions = function(format) {
      format = format.replace(/\W/g, "")
      that.dayPosition = format.indexOf(DAY);
      that.monthPosition = format.indexOf(MONTH);
      that.yearPosition = format.indexOf(YEAR);
      return that;
    };

    that.splitDate = function(date) {
      that.day = date.substring(that.dayPosition, that.dayPosition + DAY_LENGTH);
      that.month = date.substring(that.monthPosition, that.monthPosition + MONTH_LENGTH);
      that.year = date.substring(that.yearPosition, that.yearPosition + YEAR_LENGTH);
      return that;
    };

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
    };

    that.fromNow = function() {
      dateNow = self.at(Date.now())

      years = parseInt(dateNow.year) - parseInt(that.year);
      months = parseInt(dateNow.month) - parseInt(that.month);
      days = parseInt(dateNow.day) - parseInt(that.day);

      if (years != 0) {
        return years + ' ' + 'years ago';
      } else if (months != 0) {
        return months + ' ' + 'monthes ago';
      } else {
        return days + ' ' + 'days ago';
      }
    };


  };

  self.parse = function(date, format = '', monthToName) {
    _date = new DateConverter(date, monthToName);
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
  };

  self.at = function(timestampInMs, monthToName) {
    var year, month;

    var addZeroToString = function(value) {
      return value.length == 1 ? ('0' + value) : value;
    }

    timestamp = parseInt(timestampInMs / 1000);
    second = parseInt(timestamp % SECONDS_IN_MINUTE);
    timestamp = parseInt(timestamp / SECONDS_IN_MINUTE);
    minute = parseInt(timestamp % MINUTES_IN_HOUR);
    timestamp = parseInt(timestamp / MINUTES_IN_HOUR);
    hour = parseInt(timestamp % HOURS_IN_DAY);
    timestamp = parseInt(timestamp / HOURS_IN_DAY);
    years = parseInt(timestamp / (DAYS_IN_4_YEARS)) * 4;
    timestamp = parseInt(timestamp % (DAYS_IN_4_YEARS));


    for (year = DAYS.length - 1; year > 0; year--) {
      if (timestamp >= DAYS[year][0]) {
          break;
      }
    }

    for (month = MONTHES_IN_YEAR - 1; month > 0; month--) {
      if (timestamp >= DAYS[year][month]) {
          break;
      }
    }

    _date = new DateConverter('', monthToName);
    _date.year = (TIMESTAMP_YEAR + years + year).toString();
    _date.month = addZeroToString((TIMESTAMP_MONTH + month).toString());
    _date.day = addZeroToString((TIMESTAMP_DAY + timestamp - DAYS[year][month]).toString());
    _date.buildDate();
    return _date;
  };
};

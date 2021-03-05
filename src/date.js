var moment = require('moment');

/**
 * TODO: all getters, all get method must return a value
 * */

function getFullDate() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}

function getWeekDay() {
  return parseInt(moment().format('d'));
}

function getCurrentMonth() {
  return parseInt(moment().format('M'));
}

function getCurrentYear() {
  return parseInt(moment().format('YYYY'));
}

module.exports = {
  getFullDate: getFullDate,
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};

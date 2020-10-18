'use strict';

var ParentElement = document.getElementById('cookie-stand');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, minCustomers, maxCustomers, avgCookiesSold) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesSold = avgCookiesSold;
  this.cookiesSoldPerHour = [];
  this.dailyStoreSale = 0;

}
Store.prototype.randomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};
Store.prototype.calcCookiesSoldPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgCookiesSold);
    this.cookiesSoldPerHour.push(cookiesPerHour);
    this.dailyStoreSale += cookiesPerHour;
    // console.log('calculate cookies per hour');
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldPerHour();
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
    var td = document.createElement('td');

    td.textContent = this.cookiesSoldPerHour[i];
    tr.appendChild(td);
  }
  var td = document.createElement('td');
  td.textContent = this.dailyStoreSale;
  tr.appendChild(td);
  parentElement.appendChild(tr);
};

var parentElement = document.getElementById('table');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.textContent = '';
tr.appendChild(td);
parentElement.appendChild(tr);
for (var i = 0; i < hours.length; i++) {
  var td = document.createElement('td');
  td.textContent = hours[i];
  tr.appendChild(td);
}
var td = document.createElement('td');
td.textContent = 'total';
tr.appendChild(td);
parentElement.appendChild(tr);

var seattle = new Store('seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 2.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

'use strict';
var locationArray = [];
var parentElement = document.getElementById('table');
var totalCookiesPerDay = new Array(15).fill(0);
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
  if (this.cookiesSoldPerHour.length === 0){
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgCookiesSold);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      this.dailyStoreSale += cookiesPerHour;
      totalCookiesPerDay[i] += cookiesPerHour;
      totalCookiesPerDay[totalCookiesPerDay.length - 1] += cookiesPerHour;
      // console.log('calculate cookies per hour');
    }
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldPerHour();
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
    td = document.createElement('td');

    td.textContent = this.cookiesSoldPerHour[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = this.dailyStoreSale;
  tr.appendChild(td);
  parentElement.appendChild(tr);
};
function renderHeader() {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = '';
  tr.appendChild(td);
  parentElement.appendChild(tr);
  for (var i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);
  parentElement.appendChild(tr);
}

var seattle = new Store('seattle', 23, 65, 6.3);
locationArray.push(seattle);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
locationArray.push(tokyo);
var dubai = new Store('Dubai', 11, 38, 2.7);
locationArray.push(dubai);
var paris = new Store('Paris', 20, 38, 2.3);
locationArray.push(paris);
var lima = new Store('Lima', 2, 16, 4.6);
locationArray.push(lima);

function renderFooter() {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);
  parentElement.appendChild(tr);
  for (var j = 0; j < totalCookiesPerDay.length; j++) {
    td = document.createElement('td');
    td.textContent = totalCookiesPerDay[j];
    tr.appendChild(td);
  }
  tr.appendChild(td);
  parentElement.appendChild(tr);
}

function renderEverything () {
  console.log(locationArray);
  renderHeader();
  for (var i = 0; i < locationArray.length; i++) {
    locationArray[i].render();
  }
  renderFooter();
}
renderEverything();
// var parentElement = document.getElementById('results');
var myForm = document.getElementById('cookie-store');
// event handler
myForm.addEventListener('submit',formSubmit);
function formSubmit(event) {
  event.preventDefault();
  var formTarget = event.target;
  var name = formTarget.name.value;
  var minCustomers = parseInt(formTarget.minCustomers.value);
  var maxCustomers = parseInt(formTarget.maxCustomers.value);
  var avgCookies = parseInt(formTarget.avgCookies.value);
  locationArray.push(new Store(name, minCustomers, maxCustomers, avgCookies));
  parentElement.innerHTML = '';
  renderEverything();
}



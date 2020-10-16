'use strict';

var ParentElement = document.getElementById('cookie-stand');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  name: ('Seattle'),
  minHours: 23,
  maxHours: 65,
  avgCookies: 6.3,
  numbersCustomers: 0,
  hoursCookies: 'hours',
}

getNum: function () {
  this.numbersCustomers = `${randomNumber(23, 65)}`
  console.log(`${this.name} has ${this.numbersCustomers} customers on an average day`);
}
render: function () {
  var article = document.createElement('article');
  ParentElement.appendChild(article);

  var h2 = document.createElement('h2');
    h2.textContent = this.key;
    article.appendChild(h2);

  var p = document.createElement('p');
    p.textContent = `${this.name} has a ${this.minHours} of customers and a a max of ${this.maxHours} customers per day.`;
    article.appendChild(p);

  var ul = document.createElement('ul');
    article.appendChild(ul);
  
  
  for (var i = 0; i < this.maxHours.length; i++) {
    var li = document.createElement('li');
    li.textContent = this.maxHours[i];
    ul.appendChild(li);
}

var img = document.createElement('img');
    img.setAttribute('src', 'img/salmon.png');
    img.setAttribute('alt', `${this.name}:`);
    article.appendChild(img);
};

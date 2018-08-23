"use strict";



let date = new Date(),
  day = date.getDay(),
  isStonsdag = day === 3 ? true : false;

function dayOfTheWeek() {
  let whatday = document.getElementById("isitwednesday");
  if (isStonsdag) {
    whatday.innerHTML = "Det er Stonsdag i dag!"
  } else {
  whatday.innerHTML = "Neste Stonsdag er " + nextStonsdagDate;
  }

}


let daysUntilStonsdag = function (today) {
  if (today === 0) return 3;
  if (today === 1) return 2;
  if (today === 2) return 1;
  if (today === 3) return 0;
  if (today === 4) return 6;
  if (today === 5) return 5;
  if (today === 6) return 4;
};

let nextStonsdagDate = moment(date).locale('nb').add(daysUntilStonsdag(day), 'days').format('Do MMMM');

window.addEventListener('load', function () {
  dayOfTheWeek();
  getMembers();
  getEvents();
  getAttendees();
});


function getEvents() {
  let queryString = `${strava.base_url}/clubs/${strava.club}/group_events?access_token=${strava.access_token}`;
  fetch(queryString).then(function (response) {
    return response.json().then(function (data) {
      data.forEach(function (item) {
        console.log(item);
      });

    });
  });
}


function getAttendees() {
  let queryString = `${strava.base_url}/group_events/373836/rsvps?access_token=${strava.access_token}`;
  fetch(queryString).then(function (response) {
    return response.json().then(function (data) {

        console.log(data);


    });
  });
}

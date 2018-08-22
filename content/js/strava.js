const strava = {
  "base_url": "https://www.strava.com/api/v3",
  "access_token": "8b678f5264d6c02b2db3bb9f32719ced3da4fd42",
  "club": "451222"
};


function getMembers() {
  let queryString = `${strava.base_url}/clubs/${strava.club}/members?access_token=${strava.access_token}`;
  let memberSection = document.getElementById("members");
  let memberText = "";
  fetch(queryString).then(function (response) {
    return response.json().then(function (data) {
      data.forEach(function (member) {

        memberText += "- " + member.firstname + "<br/>";
      });
      memberSection.innerHTML = memberText;
    });
  });


}

//https://github.com/jaredholdcroft/strava-api-v3/blob/master/lib/strava/api/v3/club_group_event.rb


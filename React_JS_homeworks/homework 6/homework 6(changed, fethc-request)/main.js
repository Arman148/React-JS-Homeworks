/*
fetch('https://api.mixcloud.com/spartacus/party-time/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
  */
const userURL = 'https://api.mixcloud.com/spartacus/party-time/';
const defMusicURL = 'https://api.mixcloud.com/discover/';

/*
window.onload = function() {
  what();
  function what(){
      document.getElementById('username').innerHTML = 'hi';
  };
}
*/


const fetchRequestHeader = (url) => {
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    let profPicUrl = `url(${data.user.pictures.medium})`;    
    let ProfPic = document.createElement('ProfPic');
    ProfPic.style.backgroundImage = profPicUrl
    document.getElementById('prof').append(ProfPic)

    let name = document.createElement('name')
    name.innerHTML = data.user.name;
    document.getElementById('prof').append(name)

    let description = document.createElement('description');
    description.innerHTML = data.description;
    document.getElementById('desc').append(description);
    
  });
}

fetchRequestHeader(userURL)







/*
document.getElementById('username').innerHTML = data.user.name;
let ProfPic = document.createElement('ProfPic');
ProfPic.className = 'profPic';
ProfPic.innerHtml = 'hi';
document.getElementById('prof').append(ProfPic)
*/









  /*
    fetchRequestUser(userURL);
    function fetchRequestUser(url){
        fetch(url)
      .then((response) => {
        return response.json();
    })
  .then((data) => {
    let name = data.user.name;
    document.getElementById('username').innerHTML = name;
    //document.getElementById("profPic").style.backgroundColor = "blue";
  });
    }

*/

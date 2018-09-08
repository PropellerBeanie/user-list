var userData;
var main = document.querySelector('main');
var userList = document.querySelector('.user-list');
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', true);
xhr.send();

xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;
  if (this.status != 200) {
    alert('Error: ' + (this.status ? this.statusText : 'request failed'));
    return;
  } else {
    userData = JSON.parse(xhr.responseText).results;
  }
  addScript('js/createlist.js');
  addScript('js/popup.js');
  addScript('js/sorting.js');
}

function addScript(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
}

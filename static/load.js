var path = document.location.hash.substr(1);
var xhr = new XMLHttpRequest();
xhr.open('GET', path + '/config.json');
xhr.addEventListener('load', function () {
  if (xhr.status === 200) {
    window.load(JSON.parse(xhr.responseText));
  } else {
    console.error(xhr.statusText);
  }
});
xhr.send();

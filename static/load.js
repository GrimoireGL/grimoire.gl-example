var path = document.location.hash.substr(1);
var xhr = new XMLHttpRequest();
xhr.open('GET', path + '/config.json');
xhr.addEventListener('load', function () {
  if (xhr.status === 200) {
    var items = JSON.parse(xhr.responseText);
    items.forEach(function(v) {
      v.contentUrl = path + '/' + v.contentUrl;
    });
    window.load(items, true);
  } else {
    console.error(xhr.statusText);
  }
});
xhr.send();

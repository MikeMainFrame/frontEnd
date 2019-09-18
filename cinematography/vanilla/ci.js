(function main(what) {

  var xhr = new XMLHttpRequest();
  xhr.open('get', 'http://www.omdbapi.com' + what + '&apikey=9022e30');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) cinemaList(xhr.responseText)
  }
  xhr.send();

  function cinemaList(data) {
    var temp = JSON.parse(data);
    temp.Search.map((slot) => {

      zcopy.childNodes[1].childNodes[1].textContent = slot.Title
      zcopy.childNodes[1].childNodes[3].src = slot.Poster
      zcopy.childNodes[1].childNodes[5].childNodes[1].textContent = slot.Year
      zcopy.childNodes[1].childNodes[7].childNodes[1].textContent = slot.Type

      div = document.createElement("div")
      div.innerHTML = zcopy.childNodes[1].outerHTML;
      zdata.appendChild(div)
    })
  }
})(window.location.search)

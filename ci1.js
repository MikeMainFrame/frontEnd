(function main(what) {

  getData(what)

  async function getData(what) {
    var temp = await xhrServer(what);
    document.getElementById('zdata').innerHTML = temp;
  }

  function xhrServer(what) {
    return new Promise(function (serverData, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://www.omdbapi.com/" + what + "&apikey=9022e30&");
      xhr.onload = () => { if (xhr.readyState === 4) serverData(xhr.responseText) };
      xhr.onerror = () => { reject(xhr.statusText); };
      xhr.send();
    });
  }
}

)(window.location.search);
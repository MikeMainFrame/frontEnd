(function main(what) {

  const cinemaList = async (what) => {
    const res = await axios.get('http://www.omdbapi.com' + what + '&apikey=9022e30')
    return res.data;
  }

  cinemaList(what).then((data) => {
    data.Search.map((slot) => {
      var o = filmBoxItem(slot)
      for (var pair in slot) {
        o.appendChild(insertElement(key = pair, slot[pair]))
      }
      zdata.appendChild(o)
    })
  })

  function insertElement(key, slot) {
    i = document.createElement("div")
    i.setAttribute("class", 'line')
    l = document.createElement("p")
    l.setAttribute("class", 'lead')
    l.textContent = key
    r = document.createElement("p")
    r.setAttribute("class", 'value')
    r.textContent = slot
    i.appendChild(l)
    i.appendChild(r)
    return i
  }
  function filmBoxItem(slot) {
    o = document.createElement("div")
    o.setAttribute('class', 'filmBox')
    b = document.createElement('img')
    b.setAttribute('src', slot.Poster)
    o.appendChild(b)
    return o
  }
}
)(window.location.search)
(function main(what) {

  const cinemaList = async (what) => {
    const res = await axios.get('http://www.omdbapi.com' + what + '&apikey=_______')
    return res.data;
  }

  cinemaList(what).then((data) => {
    data.Search.map((slot) => {

      zcopy.childNodes[1].childNodes[1].textContent = slot.Title
      zcopy.childNodes[1].childNodes[3].src = slot.Poster            
      zcopy.childNodes[1].childNodes[5].childNodes[1].textContent = slot.Year            
      zcopy.childNodes[1].childNodes[7].childNodes[1].textContent = slot.Type      

      div = document.createElement("div")
      div.innerHTML = zcopy.childNodes[1].outerHTML;
      zdata.appendChild(div)

    })
  })

}
)(window.location.search)

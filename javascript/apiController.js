

// function saveArtistDetails(data) {
//   let artistsDetails = {
//     "artistName": "Vincent Van Gogh",
//     "artistPaintings": data
//   };

  function saveArtistDetails(name, data) {
    let artistPaintings = data;
    // details = data;
    // for (let data of paintings) {
    //   artistPaintings.push(data);
    // }
    console.log(artistPaintings);
    let artistsDetails = {
      "artistName": name,
      "artistDetails": artistPaintings
    };

  console.log(artistsDetails);

  fetch("https://retoolapi.dev/j3UFnr/vincentPaintings",
    {
      "method": "POST",
      "body": JSON.stringify(artistsDetails),
      "headers": { "Content-Type": "application/json; charset=UTF-8" }
    })

    .then((response) => {

      if (response && response.ok) {
        // console.log(response.json);
        alert('sucess');
        return response.json();

      }
    })
   }


function getArtistDetails(idNum, index) {
  let getLink = "https://retoolapi.dev/ZGkFby/artistDetails/" + idNum;
  fetch(getLink,
    {
      "method": "GET",
      "headers": { "content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        console.log(response.json);
        return response.json();
      }
    })
    .then((data) =>
      document.getElementById('paintingDetails').innerHTML = data.artistPaintings[index])
}
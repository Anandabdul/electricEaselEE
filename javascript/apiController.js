function saveArtistDetails() {
  let artistDetails = {
    "artistName": "Vincent Van Gogh",
    "artistPaintings": paintings
  };

  fetch("https://retoolapi.dev/UwGSQv/artistsData",
    {
      "method": "POST",
      "body": JSON.stringify(artistDetails),
      "headers": { "Content-Type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
      if (response && response.ok) {
        console.log(response.json);
        return response.json();
      }
    })
}

function getArtistDetails(idNum, index) {
  let getLink = "https://retoolapi.dev/UwGSQv/artistsData/" + idNum;
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
// var paintings = [
//   thePotatoEatersArtDetails,
//   selfPortraitArtDetails,
//   shoesArtDetails,
//   cafeTeranceAtNightArtDetails,
//   starryNightArtDetails,
//   wheatfieldWithCypressesArtDetails,
//   sunflowersArtDetails,
//   irisesArtDetails,
//   skeletonArtDetails,
//   lAriesienneArtDetails,
// ];

function example(data) {
  alert("working!");
  console.log(data);
}

// function saveArtistDetails(data) {
//   let artistsDetails = {
//     "artistName": "Vincent Van Gogh",
//     "artistPaintings": data
//   };

  function saveArtistDetails(data) {
    let artistPaintings = [];
    for (let data of paintings) {
      artistPaintings.push(data);
    }
    // console.log(artistPaintings);
    let artistsDetails = {
      "name": "Vincent Van Gogh",
      "detail": artistPaintings
    };

  console.log(artistsDetails);

  fetch("https://retoolapi.dev/mXBe4L/data",
    {
      "method": "POST",
      "body": JSON.stringify(artistsDetails),
      "headers": { "Content-Type": "application/json; charset=UTF-8" }
    })

    .then((response) => {

      if (response && response.ok) {
        // console.log(response.json);
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
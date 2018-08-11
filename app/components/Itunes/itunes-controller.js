import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

// function clearArtist(){

// }

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE

  let template = ''

  for (let i = 0; i < results.length; i++) {
    const artist = results[i];
    template += `
    
        <div class="col-sm-3" style="outline: 1px solid black">
          <p>${artist.title}</p>
          <div class="album-art">
            <img src="${artist.albumArt}" alt="art" class="img-responsive"/>
          </div>
          <p>${artist.artist}</p>
          <p>${artist.collection}</p>
          <p>${artist.price}</p>
          <div>
            <audio controls  class="audio-controls">
              <source src="${artist.preview}" type="audio/mpeg"/>
            </audio>       
          </div>
        </div>     
          `      
            
  }
  document.getElementById("song-list").innerHTML = template
  // @ts-ignore
  document.getElementById("artistForm").reset()


  // clearArtist()


}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController
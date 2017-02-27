// 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');

// tag.src = "http://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$.getScript('http://www.youtube.com/iframe_api');

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
//h:266, w:469
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// function onPlayerStateChange(evt) {
//     if (evt.data == 1) {
//         // this will seek to a certain point when video starts
//         // but you're better off using 'start' parameter
//         // player.seekTo(22);   
//     }
// }

function onPlayerReady(evt) {

    // doesn't work here
    // player.seekTo(30);  

    // lets make ure we have a function
    //alert("typeof(player.SeekTo) = " + typeof(player.seekTo));
    evt.target.playVideo();

}

// 4. The API will call this function when the video player is ready.
// window.onPlayerReady = function(event) {
//   event.target.playVideo();
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;
function onPlayerStateChange(event){
  // alert("typeof(player.SeekTo) = " + typeof(player.seekTo));
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   done = true;
  // }
}
function stopVideo() {
  player.stopVideo();
}



// $.getScript('http://www.youtube.com/iframe_api');

//      var player;
//      function onYouTubePlayerAPIReady() {
//          player = new YT.Player('existing-iframe-example', {
//            height: '390',
//            width: '640',
//            videoId: 'p2H5YVfZVFw',
//              playerVars: { 'start': 159, 'autoplay': 1, 'controls': 1 },
//            events: {
//              'onReady': onPlayerReady,
//              'onStateChange': onPlayerStateChange,
//            }
             
//          });         
//      }

// function onPlayerStateChange(evt) 
// {
//     if (evt.data==1) 
//     {
//         // this will seek to a certain point when video starts
//         // but you're better off using 'start' parameter
//         // player.seekTo(22);   
//     }
// }

//      function onPlayerReady(evt) {
         
//         // doesn't work here
//         // player.seekTo(30);  
         
//          // lets make ure we have a function
//          alert("typeof(player.SeekTo) = " + typeof(player.seekTo));
//      }

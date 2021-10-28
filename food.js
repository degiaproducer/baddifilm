window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      foodLightbox_close();
    }
  }
  
  function foodLightbox_open() {
    var lightBoxVideo = document.getElementById("foodVideo");
    document.getElementById('foodLight').style.display = 'block';
    document.getElementById('foodFade').style.display = 'block';
    lightBoxVideo.pause();
  }
  
  function foodLightbox_close() {
    var lightBoxVideo = document.getElementById("foodVideo");
    document.getElementById('foodLight').style.display = 'none';
    document.getElementById('foodFade').style.display = 'none';
    lightBoxVideo.pause();
  }
window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("foodShowreel");
    document.getElementById('foodLight').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.pause();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("foodShowreel");
    document.getElementById('foodLight').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }
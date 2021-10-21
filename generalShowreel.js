window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      generalLightbox_close();
    }
  }
  
  function generalLightbox_open() {
    var lightBoxVideo = document.getElementById("generalShowreel");
    document.getElementById('generalLight').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.pause();
  }
  
  function generalLightbox_close() {
    var lightBoxVideo = document.getElementById("generalShowreel");
    document.getElementById('generalLight').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }
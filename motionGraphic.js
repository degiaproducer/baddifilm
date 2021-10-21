window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      motionLightbox_close();
    }
  }
  
  function motionLightbox_open() {
    var lightBoxVideo = document.getElementById("motionGraphic");
    document.getElementById('motionLight').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.pause();
  }
  
  function motionLightbox_close() {
    var lightBoxVideo = document.getElementById("motionGraphic");
    document.getElementById('motionLight').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }
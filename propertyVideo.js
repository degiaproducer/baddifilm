window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      propertyLightbox_close();
    }
  }
  
  function propertyLightbox_open() {
    var lightBoxVideo = document.getElementById("propertyShowreel");
    document.getElementById('propertyLight').style.display = 'block';
    document.getElementById('propertyFade').style.display = 'block';
    lightBoxVideo.pause();
  }
  
  function propertyLightbox_close() {
    var lightBoxVideo = document.getElementById("propertyShowreel");
    document.getElementById('propertyLight').style.display = 'none';
    document.getElementById('propertyFade').style.display = 'none';
    lightBoxVideo.pause();
  }
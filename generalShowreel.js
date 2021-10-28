window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    generalLightbox_close();
  }
}

function motionLightbox_open() {
  var lightBoxVideo = document.getElementById("generalShowreel");

  document.getElementById('generalLight').style.display = 'block';
  document.getElementById('generalFade').style.display = 'block';
  lightBoxVideo.pause();
}

function motionLightbox_close() {
  var lightBoxVideo = document.getElementById("generalShowreel");
  document.getElementById('generalLight').style.display = 'none';
  document.getElementById('geberalShowreel').style.display = 'none';
  lightBoxVideo.pause();
}
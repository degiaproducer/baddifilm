function propertyLightbox_open(){var e=document.getElementById("propertyShowreel");document.getElementById("propertyLight").style.display="block",document.getElementById("propertyFade").style.display="block",e.pause()}function propertyLightbox_close(){var e=document.getElementById("propertyShowreel");document.getElementById("propertyLight").style.display="none",document.getElementById("propertyFade").style.display="none",e.pause()}window.document.onkeydown=function(e){e||(e=event),27==e.keyCode&&propertyLightbox_close()};
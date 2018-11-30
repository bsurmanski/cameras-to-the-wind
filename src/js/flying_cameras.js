var camera_elems = document.getElementsByClassName("flying-camera");
var cameras = []
for(var i = 0; i < camera_elems.length; i++) {
  var p = new_particle(camera_elems[i]);
  cameras.push(p);
}

function new_particle(elem) {
  return {
    elem: elem,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    speed: 0.05 + Math.random() * 0.05,
    rotation: Math.random() * 360,
    rotation_speed: 0.1 + Math.random()
  };
}

var last_update = 0;
function animate_cameras(time) {
  var camera_elems = document.getElementsByClassName("flying-camera");
  for (var i = 0; i < cameras.length; i++) {
    cameras[i].x += (time - last_update) * cameras[i].speed;
    if(cameras[i].x > window.innerWidth) {
      cameras[i] = new_particle(cameras[i].elem);
      cameras[i].x = -100;
    }
    cameras[i].rotation += cameras[i].rotation_speed;
    camera_elems[i].style.top = cameras[i].y;
    camera_elems[i].style.left = cameras[i].x;
    camera_elems[i].style.transform = 'rotate(' + cameras[i].rotation + 'deg)';
  }
  last_update = time;
  requestAnimationFrame(animate_cameras);
}

requestAnimationFrame(animate_cameras);

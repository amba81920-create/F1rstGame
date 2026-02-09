export let scene, camera, renderer;

export function initEngine(){

 scene = new THREE.Scene();
 scene.background = new THREE.Color(0x87a8ff);

 camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);

 renderer = new THREE.WebGLRenderer({antialias:true});
 renderer.setSize(innerWidth,innerHeight);

 document.body.appendChild(renderer.domElement);

 window.onresize=()=>{
  camera.aspect=innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
 };
}

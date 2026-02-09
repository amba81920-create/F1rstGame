export class Player{

 constructor(scene,camera){

  this.obj=new THREE.Object3D();
  this.obj.position.y=1.7;

  this.camera=camera;
  this.obj.add(camera);

  scene.add(this.obj);

  this.yaw=0;
  this.pitch=0;

  this.speed=0.25;
  this.keys={};

  window.onkeydown=e=>this.keys[e.key]=true;
  window.onkeyup=e=>this.keys[e.key]=false;

  let drag=false;

  window.onpointerdown=()=>drag=true;
  window.onpointerup=()=>drag=false;

  window.onpointermove=e=>{
   if(!drag)return;

   this.yaw-=e.movementX*0.002;
   this.pitch-=e.movementY*0.002;
  };
 }

 update(){

  if(this.keys["w"]) this.obj.position.z-=this.speed;
  if(this.keys["s"]) this.obj.position.z+=this.speed;
  if(this.keys["a"]) this.obj.position.x-=this.speed;
  if(this.keys["d"]) this.obj.position.x+=this.speed;

  this.obj.rotation.y=this.yaw;
  this.camera.rotation.x=this.pitch;
 }
    }

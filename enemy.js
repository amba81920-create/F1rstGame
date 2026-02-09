export class Enemy{

 constructor(scene,x,z){

  const mat=new THREE.MeshLambertMaterial({color:0xff3333});

  this.mesh=new THREE.Mesh(
   new THREE.BoxGeometry(1,2,1),
   mat
  );

  this.mesh.position.set(x,1,z);

  scene.add(this.mesh);
 }

 update(playerPos){

  const dir=playerPos.clone().sub(this.mesh.position);

  if(dir.length()>2){
   this.mesh.position.add(dir.normalize().multiplyScalar(0.03));
  }
 }
}

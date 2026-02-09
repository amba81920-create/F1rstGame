export function shoot(camera,enemies,scene){

 const ray=new THREE.Raycaster();
 ray.setFromCamera(new THREE.Vector2(0,0),camera);

 const hit=ray.intersectObjects(enemies.map(e=>e.mesh));

 if(hit.length){

  const target=enemies.find(e=>e.mesh===hit[0].object);

  scene.remove(target.mesh);
  enemies.splice(enemies.indexOf(target),1);
 }
}

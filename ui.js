export function createUI(shootFn){

 const btn=document.createElement("button");
 btn.innerText="FIRE";

 document.body.appendChild(btn);

 btn.onpointerdown=shootFn;
                           }

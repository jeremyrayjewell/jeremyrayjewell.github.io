import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

//modals

const triggers = document.querySelectorAll('.sp-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior

    const targetId = trigger.dataset.target; // Get the target ID from the trigger
    const modal = document.getElementById(targetId); // Select the corresponding modal

    modal.style.display = 'block'; // Show the correct modal
  });
});

// Optional: Close the modal by clicking outside of it (if desired)
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('sp-source')) {
    event.target.style.display = 'none';
  }
});


// Setup

let angle = 0;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});



renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);
camera.position.setX(0);

renderer.render(scene, camera);

//portal 1
let map = new THREE.TextureLoader().load('./assets/portal1.png');
map.magFilter = THREE.NearestFilter;
let material = new THREE.SpriteMaterial({ map: map, transparent: true, opacity: 0.73 });
const sprite0 = new THREE.Sprite(material);
sprite0.scale.set(23, 15, 1);
sprite0.position.set(0, 0, -5.49);
scene.add(sprite0);

map = new THREE.TextureLoader().load('./assets/portal1.png');
map.magFilter = THREE.NearestFilter;
material = new THREE.SpriteMaterial({ map: map, color: 0xfcba03 }); // Add this line
const sprite1 = new THREE.Sprite(material);
sprite1.scale.set(23, 15, 1);
sprite1.position.set(0, 0, -5.5);
scene.add(sprite1);

//layer 1

let layer1Map = new THREE.TextureLoader().load('./assets/layer01.png');
layer1Map.magFilter = THREE.NearestFilter;
let layer1Material = new THREE.SpriteMaterial({ map: layer1Map });
const layer1Sprite = new THREE.Sprite(layer1Material);
layer1Sprite.scale.set(74, 30, 1);
layer1Sprite.position.set(-4, 0, -30.5);
scene.add(layer1Sprite);

//layer 2

let layer2Map = new THREE.TextureLoader().load('./assets/layer02.png');
layer2Map.magFilter = THREE.NearestFilter;
let layer2Material = new THREE.SpriteMaterial({ map: layer2Map });
const layer2Sprite = new THREE.Sprite(layer2Material);
layer2Sprite.scale.set(100, 50, 1);
layer2Sprite.position.set(-1, 0, -35.5);
scene.add(layer2Sprite);

//layer 3 

let layer3Map = new THREE.TextureLoader().load('./assets/layer03.png');
layer3Map.magFilter = THREE.NearestFilter;
let layer3Material = new THREE.SpriteMaterial({ map: layer3Map });
const layer3Sprite = new THREE.Sprite(layer3Material);
layer3Sprite.scale.set(150, 90, 1);
layer3Sprite.position.set(0, 10, -68.5);
scene.add(layer3Sprite);

// layer 4

let layer4Map = new THREE.TextureLoader().load('./assets/layer04.png');
layer4Map.magFilter = THREE.NearestFilter;
let layer4Material = new THREE.SpriteMaterial({ map: layer4Map });
const layer4Sprite = new THREE.Sprite(layer4Material);
layer4Sprite.scale.set(150, 90, 1);
layer4Sprite.position.set(0, 16, -75.4);
scene.add(layer4Sprite);

// layer 5

let layer5Map = new THREE.TextureLoader().load('./assets/layer05.png');
layer5Map.magFilter = THREE.NearestFilter;
let layer5Material = new THREE.SpriteMaterial({ map: layer5Map });
const layer5Sprite = new THREE.Sprite(layer5Material);
layer5Sprite.scale.set(245, 140, 1);
layer5Sprite.position.set(1, 0, -75.6);
scene.add(layer5Sprite);

//portal 2

map = new THREE.TextureLoader().load('./assets/portal2.png');
map.magFilter = THREE.NearestFilter;
material = new THREE.SpriteMaterial({ map: map, color: 0xf5d393 });
const sprite2 = new THREE.Sprite(material);
sprite2.scale.set(23, 15, 1);
sprite2.position.set(0, 0, -75.5);
scene.add(sprite2);

// //layer 6

// let layer6Map = new THREE.TextureLoader().load('./assets/layer06.png');
// layer6Map.magFilter = THREE.NearestFilter;
// let layer6Material = new THREE.SpriteMaterial({ map: layer6Map });
// const layer6Sprite = new THREE.Sprite(layer6Material);
// layer6Sprite.scale.set(245, 140, 1);
// layer6Sprite.position.set(1, 0, -105.5);
// scene.add(layer6Sprite);

// //layer 7

// let layer7Map = new THREE.TextureLoader().load('./assets/layer07.png');
// layer7Map.magFilter = THREE.NearestFilter;
// let layer7Material = new THREE.SpriteMaterial({ map: layer7Map });
// const layer7Sprite = new THREE.Sprite(layer7Material);
// layer7Sprite.scale.set(245, 140, 1);
// layer7Sprite.position.set(1, 0, -135.5);
// scene.add(layer7Sprite);

// //layer 8

// let layer8Map = new THREE.TextureLoader().load('./assets/layer08.png');
// layer8Map.magFilter = THREE.NearestFilter;
// let layer8Material = new THREE.SpriteMaterial({ map: layer8Map });
// const layer8Sprite = new THREE.Sprite(layer8Material);
// layer8Sprite.scale.set(245, 140, 1);
// layer8Sprite.position.set(1, 0, -165.5);
// scene.add(layer8Sprite);

// //layer 9

// let layer9Map = new THREE.TextureLoader().load('./assets/layer09.png');
// layer9Map.magFilter = THREE.NearestFilter;
// let layer9Material = new THREE.SpriteMaterial({ map: layer9Map });
// const layer9Sprite = new THREE.Sprite(layer9Material);
// layer9Sprite.scale.set(245, 140, 1);
// layer9Sprite.position.set(1, 0, -195.5);
// scene.add(layer9Sprite);

//layer 10

let layer10Map = new THREE.TextureLoader().load('./assets/layer10.png');
layer10Map.magFilter = THREE.NearestFilter;
let layer10Material = new THREE.SpriteMaterial({ map: layer10Map, color: 0xf5d393});
const layer10Sprite = new THREE.Sprite(layer10Material);
layer10Sprite.scale.set(249, 140, 1);
layer10Sprite.position.set(1, 0, -145.6);
scene.add(layer10Sprite);

// //layer 11

// let layer11Map = new THREE.TextureLoader().load('./assets/layer11.png');
// layer11Map.magFilter = THREE.NearestFilter;
// let layer11Material = new THREE.SpriteMaterial({ map: layer11Map });
// const layer11Sprite = new THREE.Sprite(layer11Material);
// layer11Sprite.scale.set(245, 140, 1);
// layer11Sprite.position.set(1, 0, -175.5);
// scene.add(layer11Sprite);


//layer 12

let layer12Map = new THREE.TextureLoader().load('./assets/layer12.png');
layer12Map.magFilter = THREE.NearestFilter;
let layer12Material = new THREE.SpriteMaterial({ map: layer12Map, color: 0x505050});
const layer12Sprite = new THREE.Sprite(layer12Material);
layer12Sprite.scale.set(14, 8, 1);
layer12Sprite.position.set(7, -5.7, -80.5);
scene.add(layer12Sprite);

//layer 13

let layer13Map = new THREE.TextureLoader().load('./assets/layer13.png');
layer13Map.magFilter = THREE.NearestFilter;
let layer13Material = new THREE.SpriteMaterial({ map: layer13Map, color: 0x505050});
const layer13Sprite = new THREE.Sprite(layer13Material);
layer13Sprite.scale.set(85, 58, 1);
layer13Sprite.position.set(-5, 8, -96.5);
scene.add(layer13Sprite);

//layer 14

let layer14Map = new THREE.TextureLoader().load('./assets/layer14.png');
layer14Map.magFilter = THREE.NearestFilter;
let layer14Material = new THREE.SpriteMaterial({ map: layer14Map });
const layer14Sprite = new THREE.Sprite(layer14Material);
layer14Sprite.scale.set(5, 2, 1);
layer14Sprite.position.set(-1, 6, -97.6);
scene.add(layer14Sprite);

let layer14direction = 1; 
// Animate the sprite
const animateLayer14 = () => {
  const layer14speed = 0.1;
    layer14Sprite.position.x += layer14direction * layer14speed;
    if (layer14Sprite.position.x > 10) {
        layer14direction = -1; 
    } else if (layer14Sprite.position.x < -10) {
        layer14direction = 1; 
    }

    requestAnimationFrame(animateLayer14);
};
animateLayer14();

//layer 15

let layer15Map = new THREE.TextureLoader().load('./assets/layer15.png');
layer15Map.magFilter = THREE.NearestFilter;
let layer15Material = new THREE.SpriteMaterial({ map: layer15Map, color: 0x004400 });
const layer15Sprite = new THREE.Sprite(layer15Material);
layer15Sprite.scale.set(85, 58, 1);
layer15Sprite.position.set(1, 0, -110.5);
scene.add(layer15Sprite);

//layer 16

let layer16Map = new THREE.TextureLoader().load('./assets/layer16.png');
layer16Map.magFilter = THREE.NearestFilter;
let layer16Material = new THREE.SpriteMaterial({ map: layer16Map, color: 0x003300});
const layer16Sprite = new THREE.Sprite(layer16Material);
layer16Sprite.scale.set(95, 68, 1);
layer16Sprite.position.set(1, 0, -115.5);
scene.add(layer16Sprite);

//layer 17

let layer17Map = new THREE.TextureLoader().load('./assets/layer17.png');
layer17Map.magFilter = THREE.NearestFilter;
let layer17Material = new THREE.SpriteMaterial({ map: layer17Map, color: 0x002200 });
const layer17Sprite = new THREE.Sprite(layer17Material);
layer17Sprite.scale.set(50, 30, 1);
layer17Sprite.position.set(-58, 35, -130.5);
scene.add(layer17Sprite);

let layer17direction = 1;

// Animate the sprite
const animateLayer17 = () => {
  const layer17speed = 0.01;
  layer17Sprite.position.y += layer17direction * layer17speed;

  // Adjust the condition to limit the movement range
  if (layer17Sprite.position.y > 35.5) {
    layer17direction = -1;
  } else if (layer17Sprite.position.y < 34.5) {
    layer17direction = 1;
  }

  requestAnimationFrame(animateLayer17);
};
animateLayer17();

//layer 18

let layer18Map = new THREE.TextureLoader().load('./assets/layer18.png');
layer18Map.magFilter = THREE.NearestFilter;
let layer18Material = new THREE.SpriteMaterial({ map: layer18Map, color: 0x006600 });
const layer18Sprite = new THREE.Sprite(layer18Material);
layer18Sprite.scale.set(170, 110, 1);
layer18Sprite.position.set(0, -30, -144.5);
scene.add(layer18Sprite);

//layer 19

let layer19Map = new THREE.TextureLoader().load('./assets/layer19.png');
layer19Map.magFilter = THREE.NearestFilter;
let layer19Material = new THREE.SpriteMaterial({ map: layer19Map, color: 0x004400});
const layer19Sprite = new THREE.Sprite(layer19Material);
layer19Sprite.scale.set(286, 200, 1);
layer19Sprite.position.set(0, -80, -145.4);
scene.add(layer19Sprite);



//portal 3

map = new THREE.TextureLoader().load('./assets/portal3.png');
map.magFilter = THREE.NearestFilter;
material = new THREE.SpriteMaterial({ map: map, color: 0x008000});
const sprite3 = new THREE.Sprite(material);
sprite3.scale.set(23, 15, 1);
sprite3.position.set(0, 0, -145.5);
scene.add(sprite3);

//layer 20

let layer20Map = new THREE.TextureLoader().load('./assets/layer20.png');
layer20Map.magFilter = THREE.NearestFilter;
let layer20Material = new THREE.SpriteMaterial({ map: layer20Map, color: 0x708090 });
const layer20Sprite = new THREE.Sprite(layer20Material);
layer20Sprite.scale.set(245, 140, 1);
layer20Sprite.position.set(0, 0, -218.6);
scene.add(layer20Sprite);

//layer 21

let layer21Map = new THREE.TextureLoader().load('./assets/layer21.png');
layer21Map.magFilter = THREE.NearestFilter;
let layer21Material = new THREE.SpriteMaterial({ map: layer21Map, color: 0x708090 });
const layer21Sprite = new THREE.Sprite(layer21Material);
layer21Sprite.scale.set(50, 30, 1);
layer21Sprite.position.set(0, 0, -168.6);
scene.add(layer21Sprite);

let breathingSpeed = 0.01; // Adjust breathing speed as needed
let breathingAmplitude = 2; // Adjust breathing amplitude as needed
let time = 0;




//layer 22

let layer22Map = new THREE.TextureLoader().load('./assets/layer22.png');
layer22Map.magFilter = THREE.NearestFilter;
let layer22Material = new THREE.SpriteMaterial({ map: layer22Map, color: 0x708090 });
const layer22Sprite = new THREE.Sprite(layer22Material);
layer22Sprite.scale.set(80, 60, 1);
layer22Sprite.position.set(0, 0, -193.6);
scene.add(layer22Sprite);

//layer 23

let layer23Map = new THREE.TextureLoader().load('./assets/layer23.png');
layer23Map.magFilter = THREE.NearestFilter;
let layer23Material = new THREE.SpriteMaterial({ map: layer23Map, color: 0x708090 });
const layer23Sprite = new THREE.Sprite(layer23Material);
layer23Sprite.scale.set(50, 30, 1);
layer23Sprite.position.set(-15, 0, -217.6);
scene.add(layer23Sprite);

// Animate the breathing layers 21-23

const animateBreathing = () => {
  // Use a sine wave to simulate breathing motion
  let breathingOffset = Math.sin(time) * breathingAmplitude;
  layer21Sprite.scale.set(50 + breathingOffset, 30 + breathingOffset, 1);
  layer22Sprite.scale.set(50 + breathingOffset, 30 + breathingOffset, 1);
  layer23Sprite.scale.set(50 + breathingOffset, 30 + breathingOffset, 1);

  time += breathingSpeed;

  requestAnimationFrame(animateBreathing);
};
animateBreathing();


//portal 4

map = new THREE.TextureLoader().load('./assets/portal4.png');
map.magFilter = THREE.NearestFilter;
material = new THREE.SpriteMaterial({ map: map, color: 0x0000ff });
const sprite4 = new THREE.Sprite(material);
sprite4.scale.set(23, 15, 1);
sprite4.position.set(0, 0, -218.5);
scene.add(sprite4);

//layer 30

let layer30Map = new THREE.TextureLoader().load('./assets/layer30.png');
layer30Map.magFilter = THREE.NearestFilter;
let layer30Material = new THREE.SpriteMaterial({ map: layer30Map, color: 0xd3d3d3 });
const layer30Sprite = new THREE.Sprite(layer30Material);
layer30Sprite.scale.set(250, 140, 1);
layer30Sprite.position.set(0, 3, -285.6);
scene.add(layer30Sprite);

//portal 5

map = new THREE.TextureLoader().load('./assets/portal5.png');
map.magFilter = THREE.NearestFilter;
material = new THREE.SpriteMaterial({ map: map, color: 0xd3d3d3 });
const sprite5 = new THREE.Sprite(material);
sprite5.scale.set(23, 15, 1);
sprite5.position.set(0, 0, -285.5);
scene.add(sprite5);

// Layer 31
let layer31Map = new THREE.TextureLoader().load('./assets/layer31.png');
layer31Map.magFilter = THREE.NearestFilter;
let layer31Material = new THREE.MeshBasicMaterial({ map: layer31Map, color: 0xd3d3d3, transparent: true });
let layer31geometry = new THREE.BoxGeometry(95, 78, 1);
const layer31Mesh = new THREE.Mesh(layer31geometry, layer31Material); // Fixed variable name here
layer31Mesh.position.set(0, 0, -240.6);
layer31Mesh.rotation.set(0, 0, 1);
scene.add(layer31Mesh);
const layer31clock = new THREE.Clock();
const animateLayer31 = () => {
  layer31Mesh.rotation.z += 0.008; // Fixed animation logic here (adjust the rotation speed as needed)
  requestAnimationFrame(animateLayer31);
};
animateLayer31();

// Layer 32
let layer32Map = new THREE.TextureLoader().load('./assets/layer32.png');
layer32Map.magFilter = THREE.NearestFilter;
let layer32Material = new THREE.MeshBasicMaterial({ map: layer32Map, color: 0xd3d3d3, transparent: true });
let layer32geometry = new THREE.BoxGeometry(100, 80, 1);
const layer32Mesh = new THREE.Mesh(layer32geometry, layer32Material); // Fixed variable name here
layer32Mesh.position.set(5, 0, -255.6);
layer32Mesh.rotation.set(0, 0, 1);
scene.add(layer32Mesh);
const layer32clock = new THREE.Clock();
const animateLayer32 = () => {
  layer32Mesh.rotation.z += -0.004; // Fixed animation logic here (adjust the rotation speed as needed)
  requestAnimationFrame(animateLayer32);
};
animateLayer32();

//layer 33

// Layer 33
let layer33Map = new THREE.TextureLoader().load('./assets/layer33.png');
layer33Map.magFilter = THREE.NearestFilter;
let layer33Material = new THREE.MeshBasicMaterial({ map: layer33Map, color: 0xd3d3d3, transparent: true });
let layer33geometry = new THREE.BoxGeometry(95, 78, 1);
const layer33Mesh = new THREE.Mesh(layer33geometry, layer33Material); // Use correct variable name here
layer33Mesh.position.set(0, 0, -270.6);
layer33Mesh.rotation.set(0, 0, 1);
scene.add(layer33Mesh);
const layer33clock = new THREE.Clock();
const animateLayer33 = () => {
  layer33Mesh.rotation.z += 0.006; // Adjust rotation speed as needed
  requestAnimationFrame(animateLayer33);
};
animateLayer33();


//layer 34

let layer34Map = new THREE.TextureLoader().load('./assets/layer34.png');
layer34Map.magFilter = THREE.NearestFilter;
let layer34Material = new THREE.MeshBasicMaterial({ map: layer34Map, color: 0xd3d3d3, transparent: true });
let layer34geometry = new THREE.BoxGeometry(80, 60, 1);
const layer34Mesh = new THREE.Mesh(layer34geometry, layer34Material); 
layer34Mesh.position.set(0, 0, -282.6);
layer34Mesh.rotation.set(0, 0, 1);
scene.add(layer34Mesh);
const layer34clock = new THREE.Clock();
const animateLayer34 = () => {
  layer34Mesh.rotation.z += 0.006; // Adjust rotation speed as needed
  requestAnimationFrame(animateLayer34);
};
animateLayer34();





//layer 40

let layer40Map = new THREE.TextureLoader().load('./assets/layer40.png');
layer40Map.magFilter = THREE.NearestFilter;
let layer40Material = new THREE.SpriteMaterial({ map: layer40Map, color: 0xd3d3d3 });
const layer40Sprite = new THREE.Sprite(layer40Material);
layer40Sprite.scale.set(285, 180, 1);
layer40Sprite.position.set(0, 1, -352.6);
scene.add(layer40Sprite);


//portal 6

map = new THREE.TextureLoader().load('./assets/portal6.png');
map.magFilter = THREE.NearestFilter;
material = new THREE.SpriteMaterial({ map: map });
const sprite6 = new THREE.Sprite(material);
sprite6.scale.set(23, 15, 1);
sprite6.position.set(0, 0, -352.5);
scene.add(sprite6);

//final layer

let finalLayerMap = new THREE.TextureLoader().load('./assets/resume.png');
finalLayerMap.magFilter = THREE.NearestFilter;
let finalLayerMaterial = new THREE.SpriteMaterial({ map: finalLayerMap, rotation: -0.1});
const finalLayerSprite = new THREE.Sprite(finalLayerMaterial);
finalLayerSprite.scale.set(4.25, 5.425, 1);
finalLayerSprite.position.set(8, -1, -405.6);
finalLayerSprite.visible = false;

scene.add(finalLayerSprite);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


// Background

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;



// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * .1;
  layer1Sprite.position.y = t * .03;
  layer1Sprite.position.x = t * .04;

  layer2Sprite.position.x = t * .02;
  layer3Sprite.position.y = t * .01;
  layer3Sprite.position.x = t * .01;

  layer4Sprite.position.y = t * .06;
  layer4Sprite.position.x = t * .0;

  if (camera.position.z < -350) {
    finalLayerSprite.visible = true;
  } else {
    finalLayerSprite.visible = false;
  }
  layer19Sprite.position.x = t * .09;

  finalLayerSprite.position.x = t * .00005;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
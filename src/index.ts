import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  350
);
camera.position.z = 7;

// cube
const texture = new THREE.TextureLoader().load('/images/dinner.jpg');
const textureMaterial = new THREE.MeshStandardMaterial({ map: texture });
const cube = new THREE.Mesh(new THREE.BoxGeometry(), textureMaterial);
cube.position.set(0, 0, 0);

const light = new THREE.AmbientLight('white', 2);

const dirLight = new THREE.DirectionalLight('white', 3);
dirLight.position.set(0, 10, 2);

const pointLight = new THREE.PointLight('white', 10, 190);
pointLight.position.set(0, -1, 6);
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.add(cube);
scene.add(pointLight);
// scene.add(pointLightHelper);

const rotate = (elements: THREE.Mesh[]) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].rotation.x += 0.001;
    elements[i].rotation.y += 0.001;
  }
};

const animate = () => {
  requestAnimationFrame(animate);

  rotate([cube]);

  renderer.render(scene, camera);
};

animate();

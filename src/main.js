import * as THREE from 'three';

let scene, camera, renderer;
let curve;
let progress = 0;
let cart;

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const width = window.innerWidth;
  const height = window.innerHeight * 0.9;

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('main-canvas'), antialias: true });
  renderer.setSize(width, height);

  // 燈光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 1);
  scene.add(pointLight);

  // 軌道曲線
  const points = [];
  for (let t = 0; t < Math.PI * 4; t += 0.1) {
    points.push(new THREE.Vector3(t * 2, Math.sin(t) * 2, 0));
  }
  curve = new THREE.CatmullRomCurve3(points);

  // 軌道兩條平行線
  const leftPoints = curve.getPoints(100).map(p => p.clone().add(new THREE.Vector3(0, 0, -0.5)));
  const rightPoints = curve.getPoints(100).map(p => p.clone().add(new THREE.Vector3(0, 0, 0.5)));

  const leftGeometry = new THREE.BufferGeometry().setFromPoints(leftPoints);
  const rightGeometry = new THREE.BufferGeometry().setFromPoints(rightPoints);

  const railMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
  const leftRail = new THREE.Line(leftGeometry, railMaterial);
  const rightRail = new THREE.Line(rightGeometry, railMaterial);

  scene.add(leftRail);
  scene.add(rightRail);

  // 過山車車廂
  const cartGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const cartMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  cart = new THREE.Mesh(cartGeometry, cartMaterial);
  scene.add(cart);

  window.addEventListener('resize', onWindowResize, false);
}

function animate() {
  requestAnimationFrame(animate);

  progress += 0.001;
  if (progress > 1) progress = 0;

  const pos = curve.getPointAt(progress);
  const tangent = curve.getTangentAt(progress);

  cart.position.copy(pos);
  cart.lookAt(pos.clone().add(tangent));

  // 相機放在車廂稍後方，模擬第一人稱
  const cameraOffset = tangent.clone().multiplyScalar(-1).add(new THREE.Vector3(0, 0.2, 0));
  camera.position.copy(pos.clone().add(cameraOffset));
  camera.lookAt(pos.clone().add(tangent));

  renderer.render(scene, camera);
}

function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight * 0.9;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

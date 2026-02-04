// Three.js Background Animation
// Simple "Starfield" or "Network" effect

const container = document.getElementById('canvas-container');

if (container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 700;

  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    // Spread particles
    posArray[i] = (Math.random() - 0.5) * 15; // Range -7.5 to 7.5
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  // Material
  const material = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xFFD700, // Gold
    transparent: true,
    opacity: 0.8,
  });

  // Mesh
  const particlesMesh = new THREE.Points(particlesGeometry, material);
  scene.add(particlesMesh);

  camera.position.z = 3;

  // Mouse Interaction
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX / window.innerWidth - 0.5;
    mouseY = event.clientY / window.innerHeight - 0.5;
  });

  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);

    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.001;

    // Subtle mouse parallax
    particlesMesh.rotation.y += mouseX * 0.05;
    particlesMesh.rotation.x += mouseY * 0.05;

    renderer.render(scene, camera);
  };

  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

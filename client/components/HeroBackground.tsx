import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0f1725);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 100;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPositions = new Float32Array(particleCount * 3);
    const particlesVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlesPositions[i] = (Math.random() - 0.5) * 200;
      particlesPositions[i + 1] = (Math.random() - 0.5) * 200;
      particlesPositions[i + 2] = (Math.random() - 0.5) * 200;

      particlesVelocities[i] = (Math.random() - 0.5) * 0.5;
      particlesVelocities[i + 1] = (Math.random() - 0.5) * 0.5;
      particlesVelocities[i + 2] = (Math.random() - 0.5) * 0.5;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlesPositions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00d9ff,
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    // Create connecting lines
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array((particleCount * 2) * 3);
    let lineIndex = 0;

    const positions = particlesGeometry.getAttribute("position").array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      const randomIndex = Math.floor(Math.random() * particleCount);
      linePositions[lineIndex++] = positions[i * 3];
      linePositions[lineIndex++] = positions[i * 3 + 1];
      linePositions[lineIndex++] = positions[i * 3 + 2];
      linePositions[lineIndex++] = positions[randomIndex * 3];
      linePositions[lineIndex++] = positions[randomIndex * 3 + 1];
      linePositions[lineIndex++] = positions[randomIndex * 3 + 2];
    }

    linesGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x00a8cc,
      transparent: true,
      opacity: 0.2,
    });

    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    linesRef.current = lines;
    scene.add(lines);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Update particles
      const positionAttribute = particlesGeometry.getAttribute("position");
      const positionArray = positionAttribute.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        positionArray[idx] += particlesVelocities[idx];
        positionArray[idx + 1] += particlesVelocities[idx + 1];
        positionArray[idx + 2] += particlesVelocities[idx + 2];

        // Bounce off boundaries
        if (Math.abs(positionArray[idx]) > 100) particlesVelocities[idx] *= -1;
        if (Math.abs(positionArray[idx + 1]) > 100) particlesVelocities[idx + 1] *= -1;
        if (Math.abs(positionArray[idx + 2]) > 100) particlesVelocities[idx + 2] *= -1;
      }

      positionAttribute.needsUpdate = true;

      // Rotate the scene slightly
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;
      lines.rotation.x += 0.0001;
      lines.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(to bottom, #0f1725, #0a0e1a)" }}
    />
  );
};
